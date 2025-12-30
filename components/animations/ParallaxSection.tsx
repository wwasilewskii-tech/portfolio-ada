'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils/cn'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

/**
 * ParallaxSection
 * Creates parallax scrolling effect for background or content
 *
 * @param speed - Parallax speed (0.5 = slow, 1.5 = fast)
 */
export default function ParallaxSection({
  children,
  speed = 0.5,
  className,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const scrollTrigger = gsap.to(section, {
      y: () => -(section.offsetHeight * speed),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      scrollTrigger.scrollTrigger?.kill()
      scrollTrigger.kill()
    }
  }, [speed])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div ref={sectionRef} className="will-change-transform">
        {children}
      </div>
    </div>
  )
}
