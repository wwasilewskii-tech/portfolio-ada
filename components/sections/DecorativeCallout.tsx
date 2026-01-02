'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'
import { Asterisk, Quote, Minus } from 'lucide-react'

/**
 * DecorativeCallout
 * Large callout section with overlapping cards
 * Inspired by playful, organic design
 */
export default function DecorativeCallout() {
  return (
    <section className="relative bg-navy-50 py-32">
      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left - Main Card */}
          <ScrollReveal direction="left">
            <div className="relative rounded-[3rem] bg-navy-900 p-12 lg:p-16">
              {/* Decorative icon */}
              <div className="mb-8">
                <Asterisk className="h-12 w-12 text-yellow-400" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h2 className="mb-6 font-display text-4xl font-light italic text-white lg:text-5xl">
                Szukasz fotografa?
              </h2>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-white/80">
                Szukasz kogoś, kto zamieni Twoją wizję w obraz? Specjalizuję się w tworzeniu spójnej identyfikacji wizualnej – od fotografii produktowej, przez projekty graficzne. Każdy projekt traktuję indywidualnie, dbając o szczegóły i terminowość. Napisz – chętnie poznam Twoje potrzeby i zaproponuję rozwiązanie szyte na miarę.
              </p>

              <MagneticButton
                intensity={0.2}
                className="rounded-full bg-white px-8 py-4 font-semibold text-navy-900 transition-colors hover:bg-yellow-400"
              >
                <a href="#kontakt">Porozmawiajmy</a>
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Right - Floating Cards */}
          <div className="relative hidden h-[600px] lg:block">
            <ScrollReveal direction="right" delay={0.2}>
              {/* Card 1 - Purple */}
              <div
                className="absolute left-0 top-0 w-64 rounded-[2rem] bg-purple-100 p-6 shadow-xl"
                style={{ transform: 'rotate(-6deg)' }}
              >
                <Quote className="mb-4 h-8 w-8 text-navy-900" strokeWidth={1.5} />
                <h3 className="mb-2 font-display text-lg font-semibold text-navy-900">
                  Twórcze ujęcia
                </h3>
                <p className="text-sm text-navy-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              {/* Card 2 - Blue */}
              <div
                className="absolute right-8 top-32 w-64 rounded-[2rem] bg-blue-100 p-6 shadow-xl"
                style={{ transform: 'rotate(3deg)' }}
              >
                <Asterisk className="mb-4 h-8 w-8 text-navy-900" strokeWidth={1.5} />
                <h3 className="mb-2 font-display text-lg font-semibold text-navy-900">
                  Profesjonalne portfolio
                </h3>
                <p className="text-sm text-navy-700">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              {/* Card 3 - Pink */}
              <div
                className="absolute left-12 top-80 w-56 rounded-[2rem] bg-pink-100 p-6 shadow-xl"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <Minus className="mb-4 h-8 w-8 text-navy-900" strokeWidth={1.5} />
                <h3 className="mb-2 font-display text-lg font-semibold text-navy-900">
                  Każdy detal ma znaczenie
                </h3>
                <p className="text-sm text-navy-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -right-64 bottom-0 h-96 w-96 rounded-full bg-yellow-200/20 blur-3xl" />
    </section>
  )
}
