'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils/cn'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  type?: 'chars' | 'words' | 'lines'
  stagger?: number
  delay?: number
  triggerOnScroll?: boolean
}

/**
 * AnimatedText
 * Splits text into characters/words and animates them with stagger effect
 *
 * @param text - Text to animate
 * @param type - Split type (chars, words, lines)
 * @param stagger - Stagger delay between elements
 * @param delay - Initial delay before animation starts
 * @param triggerOnScroll - Whether to trigger animation on scroll or immediately
 */
export default function AnimatedText({
  text,
  className,
  as: Component = 'p',
  type = 'chars',
  stagger = 0.03,
  delay = 0,
  triggerOnScroll = true,
}: AnimatedTextProps) {
  const containerRef = useRef<any>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Split text into elements
    const splitText = () => {
      const words = text.split(' ')

      if (type === 'chars') {
        return words.map((word, wordIndex) => {
          const chars = word.split('').map((char, charIndex) => (
            `<span key="${wordIndex}-${charIndex}" class="inline-block" style="opacity: 0;">${char}</span>`
          ))
          return `<span class="inline-block whitespace-nowrap">${chars.join('')}</span>` + (wordIndex < words.length - 1 ? '<span class="inline-block">&nbsp;</span>' : '')
        }).join('')
      } else if (type === 'words') {
        return words.map((word, index) => (
          `<span key="${index}" class="inline-block whitespace-nowrap" style="opacity: 0;">${word}</span>${index < words.length - 1 ? ' ' : ''}`
        )).join('')
      }

      return text
    }

    container.innerHTML = splitText()

    const elements = container.querySelectorAll('span:not([class*="inline-block"]):not(:empty), span[style*="opacity: 0"]')

    const animate = () => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        delay,
        ease: 'power3.out',
      })
    }

    if (triggerOnScroll) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top 85%',
        onEnter: animate,
      })

      return () => {
        scrollTrigger.kill()
      }
    } else {
      animate()
    }
  }, [text, type, stagger, delay, triggerOnScroll])

  return <Component ref={containerRef} className={cn(className)} />
}
