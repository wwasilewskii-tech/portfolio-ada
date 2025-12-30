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
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onNavigate) onNavigate('prev')
      if (e.key === 'ArrowRight' && onNavigate) onNavigate('next')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNavigate])

  const allImages = project?.galleryImages || []
  const hasGallery = allImages.length > 0

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
            className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900/10 text-navy-900 backdrop-blur-sm transition-all hover:bg-navy-900 hover:text-white"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          {onNavigate && (
            <>
              <button
                onClick={() => onNavigate('prev')}
                className="fixed left-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-navy-900/10 p-3 backdrop-blur-sm transition-all hover:bg-navy-900 hover:text-white"
                aria-label="Previous project"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => onNavigate('next')}
                className="fixed right-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-navy-900/10 p-3 backdrop-blur-sm transition-all hover:bg-navy-900 hover:text-white"
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
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-navy-100">
                    <Image
                      src={project.coverImageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
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
                  {hasGallery && (
                    <div className="mt-12 space-y-8">
                      <h3 className="font-display text-2xl font-bold text-navy-900">
                        Galeria
                      </h3>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {allImages.map((imageUrl: string, index: number) => (
                          <div
                            key={index}
                            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navy-100"
                          >
                            <Image
                              src={imageUrl}
                              alt={`${project.title} - ${index + 1}`}
                              fill
                              className="object-cover transition-transform hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        ))}
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
