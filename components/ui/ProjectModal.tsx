'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { cn } from '@/lib/utils/cn'

interface ProjectModalProps {
  projectSlug: string | null
  onClose: () => void
  onNavigate?: (direction: 'prev' | 'next') => void
}

/**
 * ProjectModal - Full-screen project detail view
 * Inspired by ngan-nguyen.com - minimal, content-focused
 */
export default function ProjectModal({ projectSlug, onClose, onNavigate }: ProjectModalProps) {
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  useEffect(() => {
    if (!projectSlug) return

    const fetchProject = async () => {
      setLoading(true)
      try {
        const query = groq`
          *[_type == "project" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            shortDescription,
            "coverImageUrl": coverImage.asset->url,
            "galleryImages": galleryImages[].asset->url,
            categories,
            medium,
            client,
            year,
            role,
            location,
            exhibition,
            collaboration,
            caseStudy,
            awards,
            pressLinks,
            externalLink
          }
        `
        const data = await client.fetch(query, { slug: projectSlug })
        setProject(data)
      } catch (error) {
        console.error('Failed to fetch project:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [projectSlug])

  useEffect(() => {
    // Prevent body scroll when modal is open, but allow modal content to scroll
    if (projectSlug) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [projectSlug])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        // Lightbox navigation
        if (e.key === 'Escape') {
          setIsLightboxOpen(false)
        } else if (e.key === 'ArrowLeft') {
          handleLightboxPrev()
        } else if (e.key === 'ArrowRight') {
          handleLightboxNext()
        }
      } else {
        // Modal navigation
        if (e.key === 'Escape') onClose()
        if (e.key === 'ArrowLeft' && onNavigate) onNavigate('prev')
        if (e.key === 'ArrowRight' && onNavigate) onNavigate('next')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNavigate, isLightboxOpen, lightboxImageIndex])

  // Combine cover image and gallery images for lightbox
  const allImages = project
    ? [
        ...(project.coverImageUrl ? [project.coverImageUrl] : []),
        ...(project.galleryImages || [])
      ]
    : []
  const hasGallery = allImages.length > 0

  const handleLightboxOpen = (index: number) => {
    setLightboxImageIndex(index)
    setIsLightboxOpen(true)
  }

  const handleLightboxClose = () => {
    setIsLightboxOpen(false)
  }

  const handleLightboxNext = () => {
    if (allImages.length > 0) {
      setLightboxImageIndex((prev) => (prev + 1) % allImages.length)
    }
  }

  const handleLightboxPrev = () => {
    if (allImages.length > 0) {
      setLightboxImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
    }
  }

  return (
    <AnimatePresence>
      {projectSlug && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed right-6 top-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-navy-900/10 text-navy-900 backdrop-blur-sm transition-all hover:bg-navy-900 hover:text-white"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          {onNavigate && (
            <>
              <button
                onClick={() => onNavigate('prev')}
                className="fixed left-6 top-1/2 z-[60] -translate-y-1/2 rounded-full bg-navy-900/10 p-3 backdrop-blur-sm transition-all hover:bg-navy-900 hover:text-white"
                aria-label="Previous project"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => onNavigate('next')}
                className="fixed right-6 top-1/2 z-[60] -translate-y-1/2 rounded-full bg-navy-900/10 p-3 backdrop-blur-sm transition-all hover:bg-navy-900 hover:text-white"
                aria-label="Next project"
              >
                <ArrowRight size={24} />
              </button>
            </>
          )}

          {/* Content */}
          {loading ? (
            <div className="flex min-h-screen items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-navy-900 border-t-transparent" />
            </div>
          ) : project ? (
            <div className="container mx-auto px-6 py-24">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12 max-w-4xl"
              >
                <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 md:text-5xl lg:text-6xl">
                  {project.title}
                </h1>

                {project.shortDescription && (
                  <p className="mb-8 text-xl text-navy-700">
                    {project.shortDescription}
                  </p>
                )}

                {/* Metadata */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-navy-600">
                  {project.year && (
                    <div>
                      <span className="font-semibold">Rok:</span> {project.year}
                    </div>
                  )}
                  {project.client && (
                    <div>
                      <span className="font-semibold">Klient:</span> {project.client}
                    </div>
                  )}
                  {project.role && (
                    <div>
                      <span className="font-semibold">Rola:</span> {project.role}
                    </div>
                  )}
                  {project.location && (
                    <div>
                      <span className="font-semibold">Lokalizacja:</span> {project.location}
                    </div>
                  )}
                </div>

                {/* Categories & Medium */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.categories?.map((cat: string) => (
                    <span
                      key={cat}
                      className="rounded-full bg-navy-100 px-4 py-1 text-sm font-medium text-navy-800"
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Cover Image */}
              {project.coverImageUrl && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-16"
                >
                  <div
                    className="relative mx-auto flex max-w-4xl cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-navy-100"
                    onClick={() => handleLightboxOpen(0)}
                  >
                    <Image
                      src={project.coverImageUrl}
                      alt={project.title}
                      width={1200}
                      height={1600}
                      className="h-auto w-full max-h-[70vh] object-contain"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      priority
                    />
                  </div>
                </motion.div>
              )}

              {/* Content Grid */}
              <div className="grid gap-16 lg:grid-cols-12">
                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="lg:col-span-8"
                >
                  {/* Case Study */}
                  {project.caseStudy && (
                    <div className="prose prose-lg max-w-none">
                      <PortableText value={project.caseStudy} />
                    </div>
                  )}

                  {/* Gallery */}
                  {project.galleryImages && project.galleryImages.length > 0 && (
                    <div className="mt-12 space-y-8">
                      <h3 className="font-display text-2xl font-bold text-navy-900">
                        Galeria
                      </h3>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {project.galleryImages.map((imageUrl: string, index: number) => {
                          // Offset by 1 if coverImage exists
                          const lightboxIndex = project.coverImageUrl ? index + 1 : index
                          return (
                            <div
                              key={index}
                              className="cursor-pointer overflow-hidden rounded-lg bg-navy-100 transition-transform hover:scale-[1.02]"
                              onClick={() => handleLightboxOpen(lightboxIndex)}
                            >
                              <Image
                                src={imageUrl}
                                alt={`${project.title} - ${index + 1}`}
                                width={800}
                                height={1067}
                                className="h-auto w-full object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Sidebar */}
                <motion.aside
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="lg:col-span-4"
                >
                  <div className="sticky top-24 space-y-8">
                    {/* Medium */}
                    {project.medium && project.medium.length > 0 && (
                      <div>
                        <h4 className="mb-3 font-semibold text-navy-900">
                          Narzędzia
                        </h4>
                        <ul className="space-y-2 text-sm text-navy-700">
                          {project.medium.map((tool: string, i: number) => (
                            <li key={i}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Awards */}
                    {project.awards && project.awards.length > 0 && (
                      <div>
                        <h4 className="mb-3 font-semibold text-navy-900">
                          Nagrody
                        </h4>
                        <ul className="space-y-2 text-sm text-navy-700">
                          {project.awards.map((award: string, i: number) => (
                            <li key={i}>{award}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Collaboration */}
                    {project.collaboration && (
                      <div>
                        <h4 className="mb-3 font-semibold text-navy-900">
                          Współpraca
                        </h4>
                        <p className="text-sm text-navy-700">
                          {project.collaboration}
                        </p>
                      </div>
                    )}

                    {/* External Link */}
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                      >
                        Zobacz projekt <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </motion.aside>
              </div>
            </div>
          ) : (
            <div className="flex min-h-screen items-center justify-center">
              <p className="text-navy-600">Projekt nie został znaleziony</p>
            </div>
          )}

          {/* Lightbox */}
          {isLightboxOpen && hasGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
              onClick={handleLightboxClose}
            >
              {/* Close Button */}
              <button
                onClick={handleLightboxClose}
                className="fixed right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>

              {/* Previous Button */}
              {allImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLightboxPrev()
                  }}
                  className="fixed left-6 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={32} />
                </button>
              )}

              {/* Next Button */}
              {allImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLightboxNext()
                  }}
                  className="fixed right-6 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ArrowRight size={32} />
                </button>
              )}

              {/* Image Counter */}
              {allImages.length > 1 && (
                <div className="fixed bottom-6 left-1/2 z-[110] -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                  {lightboxImageIndex + 1} / {allImages.length}
                </div>
              )}

              {/* Image */}
              <div
                className="relative h-[90vh] w-[90vw]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={allImages[lightboxImageIndex]}
                  alt={`${project?.title} - ${lightboxImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
