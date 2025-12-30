'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils/cn'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  className?: string
}

/**
 * ScrollReveal
 * Reveals content with animation when it enters the viewport
 *
 * @param direction - Direction of reveal animation
 * @param delay - Delay before animation starts (in seconds)
 * @param duration - Duration of animation (in seconds)
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Initial state based on direction
    const initialState: gsap.TweenVars = {
      opacity: 0,
    }

    const animateState: gsap.TweenVars = {
      opacity: 1,
    }

    switch (direction) {
      case 'up':
        initialState.y = 60
        animateState.y = 0
        break
      case 'down':
        initialState.y = -60
        animateState.y = 0
        break
      case 'left':
        initialState.x = 60
        animateState.x = 0
        break
      case 'right':
        initialState.x = -60
        animateState.x = 0
        break
      case 'fade':
        // Only opacity
        break
    }

    gsap.set(element, initialState)

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: () => {
        gsap.to(element, {
          ...animateState,
          duration,
          delay,
          ease: 'power3.out',
        })
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [direction, delay, duration])

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  )
}
