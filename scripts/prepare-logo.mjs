/**
 * Déclinaisons du logo Business Ring Cleaner Services.
 *
 * Source unique : `src/assets/images/brand/logo-source.png` (1536 × 896, fond transparent).
 * Le master est volontairement hors de `public/` : il n'est chargé par aucune page et ne
 * doit donc pas être copié dans `dist/`.
 * Génère le lockup horizontal (navbar), le logo empilé (footer, partage), le
 * symbole seul, les favicons, le manifeste et l'image de partage 1200 × 630.
 *
 * Commande : npm run logo
 *
 * Zones mesurées sur le master (profil alpha) :
 *   symbole    x 166→1381 · y 10→593   (1216 × 584, ratio 2,08)
 *   bloc texte x 42→1497  · y 602→891  (1456 × 290, ratio 5,02)
 */
import { mkdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const SOURCE = path.join(ROOT, 'src', 'assets', 'images', 'brand', 'logo-source.png')
const BRAND_DIR = path.join(ROOT, 'src', 'assets', 'images', 'brand')
const PUBLIC_DIR = path.join(ROOT, 'public')

const MARK = { left: 166, top: 10, width: 1216, height: 584 }
const WORDMARK = { left: 42, top: 602, width: 1456, height: 290 }
const FULL = {
  left: WORDMARK.left,
  top: MARK.top,
  width: WORDMARK.width,
  height: WORDMARK.top + WORDMARK.height - MARK.top,
}

const GAP = 60 // gouttière du lockup horizontal, à l'échelle du symbole
const WORD_HEIGHT = 478 // hauteur du bloc texte dans le lockup horizontal

const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 }
const WHITE = '#FFFFFF'
const NAVY = '#0A2A6B'
const BRAND = '#0B5FE0'
const LIGHT = '#3B9BFF'

const report = []

/** Retire les marges transparentes résiduelles. */
const trim = (buffer) => sharp(buffer).trim({ threshold: 1 }).toBuffer()

/** Rééchantillonne et optimise en PNG. */
const optimize = (buffer, width) =>
  sharp(buffer).resize({ width }).png({ compressionLevel: 9, effort: 10 }).toBuffer()

const track = async (label, file) => {
  const { size } = await stat(file)
  report.push(`${label.padEnd(24)} ${path.relative(ROOT, file).padEnd(46)} ${(size / 1024).toFixed(0)} Ko`)
}

await mkdir(BRAND_DIR, { recursive: true })

const markRaw = await trim(await sharp(SOURCE).extract(MARK).png().toBuffer())
const stackedRaw = await trim(await sharp(SOURCE).extract(FULL).png().toBuffer())

/* 1. Symbole seul (réutilisation : réseaux sociaux, e-mails) */
const markFile = path.join(BRAND_DIR, 'logo-mark.png')
await writeFile(markFile, await optimize(markRaw, 512))
await track('symbole', markFile)

/* 2. Logo complet empilé — footer */
const stackedFile = path.join(BRAND_DIR, 'logo-stacked.png')
const stackedBuffer = await optimize(stackedRaw, 640)
await writeFile(stackedFile, stackedBuffer)
await track('logo empilé', stackedFile)

/* 3. Lockup horizontal — navbar : symbole + bloc texte côte à côte */
const wordWidth = Math.round((WORDMARK.width * WORD_HEIGHT) / WORDMARK.height)
const word = await sharp(SOURCE).extract(WORDMARK).resize({ height: WORD_HEIGHT }).png().toBuffer()
const markForLock = await sharp(markRaw).resize({ height: MARK.height }).png().toBuffer()
const markMeta = await sharp(markForLock).metadata()
const lockWidth = markMeta.width + GAP + wordWidth

const lockRaw = await sharp({
  create: { width: lockWidth, height: MARK.height, channels: 4, background: TRANSPARENT },
})
  .composite([
    { input: markForLock, left: 0, top: 0 },
    { input: word, left: markMeta.width + GAP, top: Math.round((MARK.height - WORD_HEIGHT) / 2) },
  ])
  .png()
  .toBuffer()

const horizontalFile = path.join(BRAND_DIR, 'logo-horizontal.png')
const horizontalBuffer = await optimize(await trim(lockRaw), 756)
await writeFile(horizontalFile, horizontalBuffer)
await track('lockup horizontal', horizontalFile)

/* 4. Icônes : symbole centré sur une tuile (l'onglet reste lisible sur fond clair) */
const tile = async ({ size, ratio, radius, background = WHITE }) => {
  const mark = await sharp(markRaw).resize({ width: Math.round(size * ratio) }).png().toBuffer()
  const { width, height } = await sharp(mark).metadata()
  const base = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">` +
      `<rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="${background}"/>` +
      `</svg>`,
  )

  return sharp(base)
    .composite([
      { input: mark, left: Math.round((size - width) / 2), top: Math.round((size - height) / 2) },
    ])
    .png({ compressionLevel: 9, effort: 10 })
    .toBuffer()
}

const icons = [
  { file: 'favicon-32.png', size: 32, ratio: 0.92, radius: 6 },
  { file: 'favicon-192.png', size: 192, ratio: 0.86, radius: 44 },
  { file: 'icon-512.png', size: 512, ratio: 0.82, radius: 116 },
  { file: 'icon-maskable-512.png', size: 512, ratio: 0.6, radius: 0, background: NAVY },
  { file: 'apple-touch-icon.png', size: 180, ratio: 0.8, radius: 0 },
]

for (const icon of icons) {
  const file = path.join(PUBLIC_DIR, icon.file)
  await writeFile(file, await tile(icon))
  await track('icône', file)
}

/* 5. Image de partage 1200 × 630 (carte blanche + logo + accroche) */
const OG_WIDTH = 1200
const OG_HEIGHT = 630
const card = { x: 80, y: 92, width: 1040, height: 446, radius: 40 }
const ogLogoWidth = 480
const ogLogo = await sharp(stackedRaw).resize({ width: ogLogoWidth }).png().toBuffer()
const ogLogoMeta = await sharp(ogLogo).metadata()
const ogFont = 'Segoe UI, Poppins, Arial, Helvetica, sans-serif'

const ogBackground = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="1" stop-color="${BRAND}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.12" r="0.62">
      <stop offset="0" stop-color="${LIGHT}" stop-opacity="0.42"/>
      <stop offset="1" stop-color="${LIGHT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#bg)"/>
  <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#glow)"/>
  <circle cx="110" cy="600" r="240" fill="#FFFFFF" opacity="0.06"/>
  <circle cx="1100" cy="70" r="180" fill="#FFFFFF" opacity="0.05"/>
  <rect x="${card.x}" y="${card.y}" width="${card.width}" height="${card.height}" rx="${card.radius}" fill="${WHITE}"/>
  <text x="${OG_WIDTH / 2}" y="${card.y + card.height - 72}" text-anchor="middle"
        font-family="${ogFont}" font-size="30" font-weight="600" fill="${NAVY}">
    Nettoyage canapés, tapis &amp; cuir à Douala
  </text>
  <text x="${OG_WIDTH / 2}" y="${card.y + card.height - 34}" text-anchor="middle"
        font-family="${ogFont}" font-size="24" fill="#5B6B8C">
    À domicile · Devis gratuit sur WhatsApp
  </text>
</svg>`)

const ogFile = path.join(PUBLIC_DIR, 'og-image.jpg')
const ogBuffer = await sharp(ogBackground)
  .composite([
    {
      input: ogLogo,
      left: Math.round((OG_WIDTH - ogLogoMeta.width) / 2),
      top: card.y + 40,
    },
  ])
  .jpeg({ quality: 90, chromaSubsampling: '4:4:4' })
  .toBuffer()
await writeFile(ogFile, ogBuffer)
await track('image de partage', ogFile)

/* 6. Manifeste d'application (icônes Android / installation) */
const manifest = {
  name: 'Business Ring Cleaner Services',
  short_name: 'BRC Services',
  description: 'Nettoyage professionnel de canapés, tapis et cuir à Douala.',
  lang: 'fr',
  start_url: '/',
  scope: '/',
  display: 'standalone',
  background_color: '#F5F8FF',
  theme_color: BRAND,
  icons: [
    { src: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}

const manifestFile = path.join(PUBLIC_DIR, 'site.webmanifest')
await writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`)
await track('manifeste', manifestFile)

console.log('\nLogo Business Ring Cleaner Services — déclinaisons générées\n')
for (const line of report) console.log(`  ${line}`)
console.log('')
