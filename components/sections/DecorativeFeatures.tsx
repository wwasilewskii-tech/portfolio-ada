'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { Sparkles, Star, Heart, Palette } from 'lucide-react'

/**
 * DecorativeFeatures
 * Playful decorative section between main content
 * Inspired by organic shapes and colorful cards
 */
export default function DecorativeFeatures() {
  const features = [
    {
      icon: Palette,
      color: 'bg-yellow-100',
      title: 'Wizja artystyczna',
      text: 'Każdy projekt to opowieść wizualna. Łączę estetykę z funkcjonalnością, tworząc projekty, które zapadają w pamięć.',
    },
    {
      icon: Star,
      color: 'bg-purple-100',
      title: 'Unikalne podejście',
      text: 'Nie ma dwóch takich samych projektów. Dostosowuję się do Twoich potrzeb, tworząc rozwiązania szyte na miarę.',
    },
    {
      icon: Heart,
      color: 'bg-blue-100',
      title: 'Pasja w każdym kadrze',
      text: 'Fotografia to nie tylko technika – to emocje i szczegóły. W każdym ujęciu szukam tego, co wyjątkowe.',
    },
    {
      icon: Sparkles,
      color: 'bg-pink-100',
      title: 'Kreatywność bez granic',
      text: 'Od ilustracji literackich po design okładek – łączę różne media, by stworzyć spójną całość.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-yellow-200/30 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div
                className={`group relative overflow-hidden rounded-[2rem] ${feature.color} p-8 transition-transform hover:-translate-y-2`}
                style={{
                  transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <feature.icon className="h-8 w-8 text-navy-900" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-display text-xl font-semibold text-navy-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-700">
                  {feature.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
