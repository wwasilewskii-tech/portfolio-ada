'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import ParallaxSection from '@/components/animations/ParallaxSection'
import Image from 'next/image'
import { Circle, Square, Triangle } from 'lucide-react'
import { DEFAULT_BLUR_DATA_URL } from '@/lib/utils/imageUtils'

interface AboutSectionProps {
  data?: {
    heroTitle?: string
    bio?: any
    skills?: Array<{
      category: string
      items: string[]
    }>
    careerTimeline?: Array<{
      year: string
      title: string
      description: string
    }>
    exhibitions?: Array<{
      year: string
      title: string
      location: string
      description?: string
    }>
    awards?: Array<{
      year: string
      title: string
      description?: string
    }>
  }
}

/**
 * AboutSection
 * About me section with bio, skills, and background
 */
export default function AboutSection({ data }: AboutSectionProps) {
  const defaultSkills = [
    {
      category: 'Fotografia',
      items: ['Fotografia portretowa', 'Reportaż', 'Fotografia artystyczna'],
    },
    {
      category: 'Grafika',
      items: ['Ilustracje', 'Design okładek', 'Branding'],
    },
    {
      category: 'Video',
      items: ['Operatorka kamery', 'Animacja', 'Montaż'],
    },
  ]

  const skills = data?.skills || defaultSkills

  return (
    <section id="o-mnie" className="relative overflow-hidden bg-white py-20">
      {/* Background decoration with parallax */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />
      </ParallaxSection>

      {/* Geometric accent shapes - smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pink organic shape - top left */}
        <div
          className="absolute left-[5%] top-[10%] h-20 w-20 rounded-[2rem] bg-pink-200/40 sm:h-32 sm:w-32"
          style={{ transform: 'rotate(-15deg)' }}
        />

        {/* Yellow circle - right side */}
        <div className="absolute right-[8%] top-[30%] h-16 w-16 rounded-full bg-yellow-300/30 sm:h-24 sm:w-24" />

        {/* Purple rectangle - bottom left */}
        <div
          className="absolute bottom-[15%] left-[10%] h-16 w-32 rounded-xl bg-purple-200/35 sm:h-20 sm:w-40"
          style={{ transform: 'rotate(12deg)' }}
        />

        {/* Small blue square - top right */}
        <div
          className="absolute right-[15%] top-[15%] h-12 w-12 rounded-lg bg-blue-200/40 sm:h-16 sm:w-16"
          style={{ transform: 'rotate(-8deg)' }}
        />

        {/* Yellow blob - bottom right */}
        <div
          className="absolute bottom-[20%] right-[12%] h-20 w-20 rounded-[2rem] bg-yellow-200/30 sm:h-28 sm:w-28"
          style={{ transform: 'rotate(20deg)' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image with organic shape */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main image container with skewed shape */}
              <div
                className="relative aspect-[3/4] overflow-hidden rounded-[3rem] bg-navy-200 shadow-2xl"
                style={{ transform: 'rotate(-2deg)' }}
              >
                <Image
                  src="/adrianna1.jpg"
                  alt="Adrianna Rauhut"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-yellow-400/20 blur-xl" />
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-purple-400/20 blur-xl" />

              {/* Floating icon accents */}
              <div className="absolute -right-4 top-1/4 rounded-full bg-white p-3 shadow-lg">
                <Circle className="h-6 w-6 text-yellow-500" strokeWidth={2} />
              </div>
              <div className="absolute -left-4 bottom-1/3 rounded-full bg-white p-3 shadow-lg">
                <Square className="h-6 w-6 text-purple-500" strokeWidth={2} />
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <ScrollReveal direction="right">
              <h2 className="mb-6 font-display text-4xl font-bold text-navy-900 sm:text-5xl">
                O mnie
              </h2>

              <div className="mb-8 space-y-4 text-lg text-navy-700">
                <p>
                  <strong className="text-navy-900">Adrianna Rauhut</strong> –
                  szczecinianka, fotografka, graficzka, operatorka kamery.
                </p>
                <p>
                  Tworzę w obszarach fotografii, grafiki i wideo. Współpracuję
                  ze Związkiem Literatów Polskich oraz Uniwizją (Telewizja
                  Uniwersytetu Szczecińskiego).
                </p>
                <p>
                  Moje prace były prezentowane na wystawach w Szczecinie,
                  zdobyłam II miejsce w konkursie plastycznym podczas
                  Ogólnopolskiego Festiwalu Wokalno-Plastycznego.
                </p>
              </div>
            </ScrollReveal>

            {/* Skills - Artistic Flower Shapes */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <h3 className="font-display text-2xl font-bold text-navy-900">
                  Umiejętności
                </h3>

                {skills.map((skillGroup, groupIndex) => {
                  // Color schemes for each category
                  const colorSchemes = [
                    {
                      // Fotografia - Purple shades
                      title: 'text-purple-700',
                      badges: [
                        'bg-purple-100 text-purple-700 shadow-purple-200/50',
                        'bg-purple-200/60 text-purple-800 shadow-purple-300/50',
                        'bg-purple-100/80 text-purple-700 shadow-purple-200/50',
                      ],
                    },
                    {
                      // Grafika - Yellow/Orange shades
                      title: 'text-yellow-700',
                      badges: [
                        'bg-yellow-100 text-yellow-800 shadow-yellow-200/50',
                        'bg-yellow-200/70 text-yellow-900 shadow-yellow-300/50',
                        'bg-orange-100 text-orange-700 shadow-orange-200/50',
                      ],
                    },
                    {
                      // Video - Blue/Teal shades
                      title: 'text-blue-700',
                      badges: [
                        'bg-blue-100 text-blue-700 shadow-blue-200/50',
                        'bg-cyan-100 text-cyan-800 shadow-cyan-200/50',
                        'bg-blue-200/60 text-blue-800 shadow-blue-300/50',
                      ],
                    },
                  ]

                  const colorScheme = colorSchemes[groupIndex] || colorSchemes[0]

                  return (
                    <div key={skillGroup.category}>
                      <h4 className={`mb-3 font-semibold ${colorScheme.title}`}>
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill, index) => {
                          // Organic flower-like shapes with different rotations
                          const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']
                          const rotation = rotations[index % rotations.length]
                          const badgeColor = colorScheme.badges[index % colorScheme.badges.length]

                          return (
                            <span
                              key={skill}
                              className={`group relative inline-block ${rotation} transition-transform hover:scale-105 hover:rotate-0`}
                            >
                              <span
                                className={`inline-block rounded-[1.5rem] px-5 py-2.5 text-sm font-medium shadow-lg transition-all ${badgeColor}`}
                                style={{
                                  borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                                }}
                              >
                                {skill}
                              </span>
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Career Timeline, Exhibitions & Awards - Full Width */}
        {(data?.careerTimeline || data?.exhibitions || data?.awards) && (
          <div className="mt-20 space-y-16">
            {/* Career Timeline */}
            {data?.careerTimeline && data.careerTimeline.length > 0 && (
              <ScrollReveal direction="up">
                <div>
                  <h3 className="mb-8 text-center font-display text-3xl font-bold text-navy-900">
                    Doświadczenie
                  </h3>
                  <div className="space-y-6">
                    {data.careerTimeline.map((item, index) => (
                      <div
                        key={index}
                        className="group relative flex gap-6 rounded-2xl bg-navy-50/50 p-6 transition-all hover:bg-navy-50"
                      >
                        {/* Year badge */}
                        <div className="flex-shrink-0">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 font-bold text-navy-900 shadow-lg">
                            {item.year}
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="mb-2 text-xl font-bold text-navy-900">
                            {item.title}
                          </h4>
                          <p className="text-navy-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Exhibitions */}
            {data?.exhibitions && data.exhibitions.length > 0 && (
              <ScrollReveal direction="up" delay={0.1}>
                <div>
                  <h3 className="mb-8 text-center font-display text-3xl font-bold text-navy-900">
                    Wystawy
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {data.exhibitions.map((exhibition, index) => (
                      <div
                        key={index}
                        className="group rounded-2xl bg-purple-50/50 p-6 transition-all hover:bg-purple-50 hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <h4 className="flex-1 text-lg font-bold text-purple-900">
                            {exhibition.title}
                          </h4>
                          <span className="ml-4 rounded-full bg-purple-200 px-3 py-1 text-sm font-semibold text-purple-900">
                            {exhibition.year}
                          </span>
                        </div>
                        <p className="mb-2 text-sm font-medium text-purple-700">
                          📍 {exhibition.location}
                        </p>
                        {exhibition.description && (
                          <p className="text-navy-700">{exhibition.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Awards */}
            {data?.awards && data.awards.length > 0 && (
              <ScrollReveal direction="up" delay={0.2}>
                <div>
                  <h3 className="mb-8 text-center font-display text-3xl font-bold text-navy-900">
                    Nagrody i Wyróżnienia
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {data.awards.map((award, index) => (
                      <div
                        key={index}
                        className="group rounded-2xl bg-yellow-50/50 p-6 transition-all hover:bg-yellow-50 hover:shadow-lg"
                      >
                        <div className="mb-3 text-4xl">🏆</div>
                        <div className="mb-2 text-sm font-bold text-yellow-700">
                          {award.year}
                        </div>
                        <h4 className="mb-2 font-bold text-navy-900">
                          {award.title}
                        </h4>
                        {award.description && (
                          <p className="text-sm text-navy-700">{award.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
