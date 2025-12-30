'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

/**
 * CursorFollower
 * Custom cursor that follows mouse movement (desktop only)
 *
 * Features:
 * - Smooth following animation
 * - Expands on interactive elements
 * - Hidden on mobile/touch devices
 * - Respects prefers-reduced-motion preference
 */
export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Hide if user prefers reduced motion
    if (prefersReducedMotion) return

    // Only show on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      })
    }

    const handleMouseEnterInteractive = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeaveInteractive = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive)
      el.addEventListener('mouseleave', handleMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive)
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
      })
    }
  }, [prefersReducedMotion])

  if (!isVisible) return null

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-yellow-400 opacity-50 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />

      {/* Inner cursor dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
