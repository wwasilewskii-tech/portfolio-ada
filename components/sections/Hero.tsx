'use client'

import AnimatedText from '@/components/ui/AnimatedText'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'
import { ArrowDown } from 'lucide-react'

interface HeroProps {
  data?: {
    heroTitle?: string
  }
}

/**
 * Hero Section
 * Main landing section with animated text and CTA
 */
export default function Hero({ data }: HeroProps) {
  const title = data?.heroTitle || 'Adrianna Rauhut'
  const subtitle = 'Fotografka i Graficzka Szczecin'

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projekty')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Minimal background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[800px] w-[800px] translate-x-1/2 translate-y-1/2 rounded-full bg-navy-400/5 blur-3xl" />
      </div>

      {/* Geometric accent shapes - hidden on mobile for cleaner look */}
      <div className="absolute inset-0 hidden overflow-hidden sm:block">
        {/* Yellow circle - top right */}
        <div className="absolute right-[10%] top-[15%] h-24 w-24 rounded-full bg-yellow-400/20 sm:h-32 sm:w-32" />

        {/* Navy square - bottom left */}
        <div
          className="absolute bottom-[20%] left-[8%] h-20 w-20 rounded-lg bg-navy-900/10 sm:h-24 sm:w-24"
          style={{ transform: 'rotate(15deg)' }}
        />

        {/* Pink blob - right side */}
        <div
          className="absolute right-[5%] top-[45%] h-32 w-32 rounded-[3rem] bg-pink-200/30 sm:h-40 sm:w-40"
          style={{ transform: 'rotate(-12deg)' }}
        />

        {/* Purple rectangle - left side */}
        <div
          className="absolute left-[12%] top-[35%] h-12 w-36 rounded-2xl bg-purple-200/25 sm:h-16 sm:w-48"
          style={{ transform: 'rotate(-8deg)' }}
        />

        {/* Small yellow square - top left */}
        <div
          className="absolute left-[20%] top-[25%] h-10 w-10 rounded-md bg-yellow-300/30 sm:h-12 sm:w-12"
          style={{ transform: 'rotate(25deg)' }}
        />

        {/* Blue organic shape - bottom right */}
        <div
          className="absolute bottom-[25%] right-[15%] h-28 w-28 rounded-[2rem] bg-blue-200/25 sm:h-36 sm:w-36"
          style={{ transform: 'rotate(20deg)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
        <ScrollReveal direction="fade" delay={0.2}>
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-navy-500">
            {subtitle}
          </p>
        </ScrollReveal>

        <AnimatedText
          text={title}
          as="h1"
          type="chars"
          stagger={0.04}
          delay={0.4}
          triggerOnScroll={false}
          className="mb-12 font-display text-5xl font-light leading-[1.1] text-navy-900 sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <ScrollReveal direction="up" delay={0.8}>
          <p className="mx-auto mb-16 max-w-xl text-lg leading-relaxed text-navy-600">
            Specjalistka ds. content wizualnego ze Szczecina. Tworzę w obszarach fotografii i grafiki.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MagneticButton
              intensity={0.3}
              className="group rounded-full bg-navy-900 px-10 py-5 font-medium text-white transition-all duration-300 hover:bg-navy-800 hover:shadow-xl"
            >
              <button onClick={scrollToProjects} className="flex items-center gap-2">
                Zobacz projekty
                <ArrowDown className="transition-transform group-hover:translate-y-1" size={18} />
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Minimal scroll indicator - hidden on mobile */}
        <ScrollReveal direction="fade" delay={1.5}>
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden sm:block">
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-navy-400 to-transparent" />
              <button
                onClick={scrollToProjects}
                className="text-navy-400 transition-colors hover:text-navy-900"
                aria-label="Scroll down"
              >
                <ArrowDown className="animate-bounce" size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
