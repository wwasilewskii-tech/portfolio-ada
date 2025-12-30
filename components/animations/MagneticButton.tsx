'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils/cn'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

/**
 * MagneticButton
 * Button with magnetic cursor effect - follows cursor when hovering
 *
 * @param intensity - How strongly the button is attracted to cursor (0-1)
 *
 * Features:
 * - Magnetic effect on hover
 * - Scale animation
 * - Respects prefers-reduced-motion preference
 */
export default function MagneticButton({
  children,
  className,
  intensity = 0.5,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) return

    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * intensity
    const deltaY = (e.clientY - centerY) * intensity

    gsap.to(button, {
      x: deltaX,
      y: deltaY,
      duration: 0.4,
      ease: 'power2.out',
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)

    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) return

    const button = buttonRef.current
    if (!button) return

    gsap.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)

    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) return

    const button = buttonRef.current
    if (!button) return

    gsap.to(button, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    })
  }

  return (
    <button
      ref={buttonRef}
      className={cn('relative cursor-pointer transition-colors', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
