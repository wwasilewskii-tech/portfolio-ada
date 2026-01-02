'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'
import { cn } from '@/lib/utils/cn'

interface ContactSectionProps {
  settings?: {
    email?: string
    linkedin?: string
    behance?: string
    instagram?: string
  }
}

const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki').max(100, 'Imię jest za długie'),
  email: z.string().email('Nieprawidłowy adres email').max(255, 'Email jest za długi'),
  message: z.string().min(10, 'Wiadomość musi mieć co najmniej 10 znaków').max(5000, 'Wiadomość jest za długa'),
  honeypot: z.string().optional(), // Hidden field for spam protection
})

type ContactFormData = z.infer<typeof contactSchema>

/**
 * ContactSection
 * Contact form and social links section
 */
export default function ContactSection({ settings }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
        const errorData = await response.json()

        if (response.status === 429) {
          setErrorMessage('Za dużo prób. Spróbuj ponownie za chwilę.')
        } else if (errorData.error) {
          setErrorMessage(errorData.error)
        } else {
          setErrorMessage('Wystąpił błąd. Spróbuj ponownie.')
        }
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Błąd połączenia. Sprawdź internet i spróbuj ponownie.')
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <section id="kontakt" className="bg-navy-900 py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center">
            <ScrollReveal direction="left">
              <h2 className="mb-6 font-display text-4xl font-bold sm:text-5xl">
                Skontaktuj się
              </h2>
              <p className="mb-8 text-lg text-navy-200">
                Jeśli szukasz realizatora projektu wizualnego, zapraszam do kontaktu.
              </p>

              <div className="mb-8 space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Email</h3>
                  <a
                    href={`mailto:${settings?.email || 'kontakt@adriannart.pl'}`}
                    className="text-yellow-400 hover:underline"
                  >
                    {settings?.email || 'kontakt@adriannart.pl'}
                  </a>
                </div>
              </div>

            </ScrollReveal>
          </div>

          {/* Right - Contact Form */}
          <ScrollReveal direction="right">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
            >
              <div>
                <label htmlFor="name" className="mb-2 block font-medium">
                  Imię
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={cn(
                    'w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-navy-400 outline-none transition-colors focus:bg-white/20',
                    errors.name && 'border-2 border-red-400'
                  )}
                  placeholder="Twoje imię"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-medium">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={cn(
                    'w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-navy-400 outline-none transition-colors focus:bg-white/20',
                    errors.email && 'border-2 border-red-400'
                  )}
                  placeholder="twoj@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-medium">
                  Wiadomość
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className={cn(
                    'w-full resize-none rounded-lg bg-white/10 px-4 py-3 text-white placeholder-navy-400 outline-none transition-colors focus:bg-white/20',
                    errors.message && 'border-2 border-red-400'
                  )}
                  placeholder="Twoja wiadomość..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Honeypot field - hidden from users, filled by bots */}
              <input
                {...register('honeypot')}
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-0 top-0 h-0 w-0 opacity-0"
                aria-hidden="true"
              />

              <MagneticButton
                intensity={0.2}
                className="w-full rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-navy-900 transition-colors hover:bg-yellow-300 disabled:opacity-50"
              >
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
              </MagneticButton>

              {submitStatus === 'success' && (
                <p className="text-center text-green-400">
                  Wiadomość wysłana pomyślnie!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-red-400">
                  {errorMessage || 'Wystąpił błąd. Spróbuj ponownie.'}
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
