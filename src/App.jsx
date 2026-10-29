import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import MobileActionBar from './components/MobileActionBar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

const EASE = [0.22, 1, 0.36, 1]

function PageFallback() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-center justify-center gap-3">
      <span
        className="h-9 w-9 animate-spin rounded-full border-2 border-brand/20 border-t-brand"
        aria-hidden="true"
      />
      <span className="text-sm text-ink/50" role="status">
        Chargement de la page…
      </span>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const reduce = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col bg-cream pb-[72px] md:pb-0">
      <ScrollToTop />
      <Navbar />

      <main id="contenu" className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  )
}
