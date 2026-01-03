'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'
import { motion } from 'framer-motion'
import { DEFAULT_BLUR_DATA_URL } from '@/lib/utils/imageUtils'

interface ProjectCardProps {
  project: {
    _id: string
    title: string
    slug: { current: string }
    shortDescription?: string
    thumbnailUrl: string
    thumbnailBlurHash?: string
    categories?: string[]
    year?: number
  }
  onClick?: () => void
  className?: string
  index?: number
}

/**
 * ProjectCard
 * Card component for displaying project preview
 *
 * Features:
 * - Image with hover scale effect
 * - Overlay with project info
 * - 3D tilt effect on hover
 * - Category badges
 */
export default function ProjectCard({ project, onClick, className, index = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const categoryColors: Record<string, string> = {
    fotografia: 'bg-navy-600',
    grafika: 'bg-yellow-500',
    video: 'bg-navy-800',
    ilustracje: 'bg-yellow-400',
    'design-okladek': 'bg-navy-700',
    wystawy: 'bg-yellow-600',
  }

  return (
    <motion.div
      className={cn(
        'group relative cursor-pointer overflow-hidden',
        className
      )}
      onClick={onClick}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      whileHover={isMobile ? {} : { y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-navy-100">
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={DEFAULT_BLUR_DATA_URL}
          priority={index === 0}
          loading={index === 0 ? 'eager' : 'lazy'}
        />

        {/* Subtle overlay on hover */}
        <div
          className={cn(
            'absolute inset-0 bg-navy-900/0 transition-all duration-500',
            isHovered && 'bg-navy-900/20'
          )}
        />

        {/* Minimal info overlay */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-navy-900/95 via-navy-900/80 to-transparent p-6 transition-transform duration-500',
            isHovered && 'translate-y-0'
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="mb-2 font-display text-lg font-medium text-white">
                {project.title}
              </h3>
              {project.categories && project.categories.length > 0 && (
                <p className="text-sm text-white/70">
                  {project.categories.slice(0, 2).map((cat) =>
                    cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')
                  ).join(' • ')}
                </p>
              )}
            </div>
            {project.year && (
              <span className="text-sm font-light text-white/60">{project.year}</span>
            )}
          </div>
        </div>
      </div>

      {/* Title below image - always visible */}
      <div className="mt-4">
        <h3 className="font-display text-base font-medium text-navy-900 transition-colors group-hover:text-navy-700">
          {project.title}
        </h3>
        {project.year && (
          <p className="mt-1 text-sm text-navy-500">{project.year}</p>
        )}
      </div>
    </motion.div>
  )
}
