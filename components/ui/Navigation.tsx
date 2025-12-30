'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import { Menu, X } from 'lucide-react'
import { DEFAULT_BLUR_DATA_URL } from '@/lib/utils/imageUtils'

interface NavigationProps {
  className?: string
}

/**
 * Navigation
 * Main navigation component with:
 * - Logo
 * - Smooth scroll to sections
 * - Glassmorphism effect on scroll
 * - Mobile menu
 */
export default function Navigation({ className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: 'Projekty', href: '#projekty' },
    { label: 'O mnie', href: '#o-mnie' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <>
      <nav
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/80 py-4 shadow-sm backdrop-blur-md'
            : 'bg-transparent py-6',
          className
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/logo.png"
                alt="Adrianna Rauhut"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_DATA_URL}
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-bold text-navy-900">
                Adrianna Rauhut
              </p>
              <p className="text-xs text-navy-600">Artystka multimedialna</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="relative text-navy-800 transition-colors hover:text-yellow-400"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-50 text-navy-900 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-lg transition-opacity duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href.substring(1))}
              className="font-display text-3xl text-white transition-colors hover:text-yellow-400"
              style={{
                animation: isMobileMenuOpen
                  ? `slideIn 0.5s ease-out ${index * 0.1}s forwards`
                  : 'none',
                opacity: 0,
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
