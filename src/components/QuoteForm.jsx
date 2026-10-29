import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react'
import { services } from '../data/services.js'
import { site, whatsappLink } from '../data/site.js'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailjsReady = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

const inputClass =
  'h-12 w-full rounded-xl border border-brand/15 bg-white px-4 text-sm text-ink shadow-sm outline-none transition duration-300 ease-soft placeholder:text-ink/35 focus:border-brand focus:ring-2 focus:ring-brand/20'

const labelClass = 'mb-1.5 block text-sm font-medium text-brand-navy'
const errorClass = 'mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600'

export default function QuoteForm({ defaultService = '' }) {
  const [status, setStatus] = useState('idle')
  const [fallbackData, setFallbackData] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      nom: '',
      telephone: '',
      email: '',
      service: defaultService,
      quartier: '',
      message: '',
      societe: '',
    },
  })

  const serviceOptions = useMemo(
    () => services.map((service) => ({ value: service.title, label: service.title })),
    [],
  )

  const send = async (values) => {
    setStatus('sending')

    const payload = {
      from_name: values.nom,
      phone: values.telephone,
      reply_to: values.email || 'non renseigné',
      service: values.service,
      quartier: values.quartier || 'non précisé',
      message: values.message || '—',
      to_email: site.email,
    }

    if (!emailjsReady) {
      setFallbackData(payload)
      setStatus('fallback')
      return
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, { publicKey: PUBLIC_KEY })
      setStatus('success')
      reset({ nom: '', telephone: '', email: '', service: '', quartier: '', message: '', societe: '' })
    } catch {
      setFallbackData(payload)
      setStatus('fallback')
    }
  }

  const onSubmit = (values) => {
    if (values.societe) {
      setStatus('success')
      return
    }
    send(values)
  }

  const fallbackMessage = fallbackData
    ? `Bonjour Business Ring Cleaner 👋\n\nNom : ${fallbackData.from_name}\nTéléphone : ${fallbackData.phone}\nService : ${fallbackData.service}\nQuartier : ${fallbackData.quartier}\nMessage : ${fallbackData.message}`
    : ''

  const fallbackMailto = fallbackData
    ? `mailto:${site.email}?subject=${encodeURIComponent(
        `Demande de devis — ${fallbackData.service}`,
      )}&body=${encodeURIComponent(fallbackMessage)}`
    : '#'

  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand/10 bg-white p-6 shadow-card sm:p-8">
      <h2 className="heading-md">Demander un devis gratuit</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">
        Remplissez ce formulaire : nous revenons vers vous sous 24h ouvrées avec un tarif et un
        créneau. Aucune information n’est partagée avec des tiers.
      </p>

      {status === 'success' ? (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
          <CheckCircle2 size={36} className="mx-auto text-green-600" aria-hidden="true" />
          <p className="mt-3 font-display text-lg font-semibold text-green-900">
            Merci, votre demande est envoyée !
          </p>
          <p className="mt-1 text-sm text-green-800/80">
            Nous vous contactons très vite. Pour une réponse immédiate, écrivez-nous sur WhatsApp.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
            <button type="button" onClick={() => setStatus('idle')} className="btn-outline">
              Nouvelle demande
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="societe">Société</label>
              <input id="societe" tabIndex={-1} autoComplete="off" {...register('societe')} />
            </div>

            <div>
              <label htmlFor="nom" className={labelClass}>
                Nom complet <span className="text-brand">*</span>
              </label>
              <input
                id="nom"
                type="text"
                autoComplete="name"
                placeholder="Ex. Mireille Ngo"
                aria-invalid={errors.nom ? 'true' : 'false'}
                className={inputClass}
                {...register('nom', {
                  required: 'Merci d’indiquer votre nom',
                  minLength: { value: 2, message: 'Le nom est trop court' },
                })}
              />
              {errors.nom ? (
                <p className={errorClass}>
                  <AlertCircle size={13} aria-hidden="true" />
                  {errors.nom.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="telephone" className={labelClass}>
                Téléphone / WhatsApp <span className="text-brand">*</span>
              </label>
              <input
                id="telephone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+237 6 90 00 00 00"
                aria-invalid={errors.telephone ? 'true' : 'false'}
                className={inputClass}
                {...register('telephone', {
                  required: 'Un numéro est nécessaire pour vous répondre',
                  pattern: {
                    value: /^[+0-9][0-9\s().-]{7,19}$/,
                    message: 'Numéro de téléphone invalide',
                  },
                })}
              />
              {errors.telephone ? (
                <p className={errorClass}>
                  <AlertCircle size={13} aria-hidden="true" />
                  {errors.telephone.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                E-mail <span className="font-normal text-ink/45">(facultatif)</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="vous@exemple.com"
                aria-invalid={errors.email ? 'true' : 'false'}
                className={inputClass}
                {...register('email', {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                    message: 'Adresse e-mail invalide',
                  },
                })}
              />
              {errors.email ? (
                <p className={errorClass}>
                  <AlertCircle size={13} aria-hidden="true" />
                  {errors.email.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="service" className={labelClass}>
                Service souhaité <span className="text-brand">*</span>
              </label>
              <select
                id="service"
                aria-invalid={errors.service ? 'true' : 'false'}
                className={inputClass}
                {...register('service', { required: 'Choisissez un service' })}
              >
                <option value="">Sélectionnez…</option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                <option value="Autre / plusieurs services">Autre / plusieurs services</option>
              </select>
              {errors.service ? (
                <p className={errorClass}>
                  <AlertCircle size={13} aria-hidden="true" />
                  {errors.service.message}
                </p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="quartier" className={labelClass}>
                Quartier ou entreprise <span className="font-normal text-ink/45">(facultatif)</span>
              </label>
              <input
                id="quartier"
                type="text"
                placeholder="Ex. Bonapriso, Douala"
                className={inputClass}
                {...register('quartier')}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Votre besoin <span className="font-normal text-ink/45">(facultatif)</span>
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Nombre de canapés, type de tissu, taches, délai souhaité…"
                className="w-full rounded-xl border border-brand/15 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition duration-300 ease-soft placeholder:text-ink/35 focus:border-brand focus:ring-2 focus:ring-brand/20"
                {...register('message')}
              />
            </div>

          </div>

          {status === 'fallback' && fallbackData ? (
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="flex items-start gap-2 text-sm font-semibold text-amber-900">
                <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                L’envoi automatique n’est pas encore activé.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-amber-900/80">
                Votre demande est prête : envoyez-la en un clic via WhatsApp ou par e-mail. Le
                propriétaire du site peut activer l’envoi automatique en renseignant les clés
                EmailJS dans le fichier <code className="font-mono">.env</code>.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={whatsappLink(fallbackMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Envoyer sur WhatsApp
                </a>
                <a href={fallbackMailto} className="btn-outline w-full sm:w-auto">
                  <Mail size={18} aria-hidden="true" />
                  Envoyer par e-mail
                </a>
              </div>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting || status === 'sending'}
            className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting || status === 'sending' ? (
              <>
                <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                Envoi en cours…
              </>
            ) : (
              <>
                <Send size={18} aria-hidden="true" />
                Envoyer ma demande
              </>
            )}
          </button>

          <p className="mt-3 text-center text-[11px] leading-relaxed text-ink/50">
            * Champs obligatoires — vos données servent uniquement à traiter votre demande de devis.
          </p>

        </form>
      )}
    </div>
  )
}
