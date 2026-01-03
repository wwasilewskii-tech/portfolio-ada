'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ArrowLeft, ArrowRight, ExternalLink, ChevronUp } from 'lucide-react'
import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { cn } from '@/lib/utils/cn'

interface ProjectLightboxProps {
  projectSlug: string | null
  onClose: () => void
  onNavigate?: (direction: 'prev' | 'next') => void
}

interface ProjectData {
  _id: string
  title: string
  slug: { current: string }
  shortDescription?: string
  coverImageUrl?: string
  galleryImages?: string[]
  categories?: string[]
  medium?: string[]
  client?: string
  year?: number
  role?: string
  location?: string
  exhibition?: string
  collaboration?: string
  caseStudy?: any
  awards?: string[]
  pressLinks?: any[]
  externalLink?: string
}

export default function ProjectLightbox({ projectSlug, onClose, onNavigate }: ProjectLightboxProps) {
  const [project, setProject] = useState<ProjectData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch project data from Sanity
  useEffect(() => {
    if (!projectSlug) return

    const fetchProject = async () => {
      setLoading(true)
      setError(null)
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

        if (!data) {
          setError('Projekt nie został znaleziony')
        } else {
          setProject(data)
        }
      } catch (error) {
        console.error('Failed to fetch project:', error)
        setError('Wystąpił błąd podczas ładowania projektu')
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [projectSlug])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (projectSlug) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [projectSlug])

  // Keyboard navigation - simplified (no nested lightbox logic)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft' && onNavigate) {
        e.preventDefault()
        onNavigate('prev')
      } else if (e.key === 'ArrowRight' && onNavigate) {
        e.preventDefault()
        onNavigate('next')
      }
    }

    if (projectSlug) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [projectSlug, onClose, onNavigate])

  // Combine cover image and gallery images
  const allImages = useMemo(() => {
    if (!project) return []

    const images: string[] = []
    if (project.coverImageUrl) images.push(project.coverImageUrl)
    if (project.galleryImages) images.push(...project.galleryImages)

    return images
  }, [project])

  return (
    <AnimatePresence>
      {projectSlug && (
        <motion.div
          key={projectSlug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex bg-black"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
        >
          {/* Top bar with navigation and close button */}
          <div className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-6 py-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
            {/* Project navigation arrows */}
            {onNavigate && (
              <div className="flex gap-2 pointer-events-auto">
                <button
                  onClick={() => onNavigate('prev')}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  aria-label="Poprzedni projekt"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={() => onNavigate('next')}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  aria-label="Następny projekt"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 pointer-events-auto ml-auto"
              aria-label="Zamknij"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content: Loading/Error/Project */}
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : project ? (
            <ProjectContent project={project} allImages={allImages} />
          ) : null}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ProjectContent({
  project,
  allImages
}: {
  project: ProjectData
  allImages: string[]
}) {
  return (
    <div className="flex w-full h-full">
      {/* LEFT/CENTER: Scrollable image gallery */}
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth overscroll-contain"
        data-lenis-prevent
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-24 space-y-8">
          {allImages.length > 0 ? (
            allImages.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center justify-center min-h-screen"
              >
                <div className="relative w-full">
                  <Image
                    src={imageUrl}
                    alt={`${project.title} - ${index + 1}`}
                    width={1600}
                    height={1200}
                    className="w-full h-auto max-h-[90vh] object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 70vw"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </motion.div>
            ))
          ) : (
            <div className="flex items-center justify-center min-h-screen text-white/60">
              <p>Brak zdjęć w tym projekcie</p>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Metadata sidebar (desktop only) */}
      <aside
        className="hidden lg:block w-96 bg-white overflow-y-auto overscroll-contain"
        data-lenis-prevent
      >
        <div className="sticky top-0 p-8">
          <MetadataSidebar project={project} />
        </div>
      </aside>

      {/* MOBILE: Metadata drawer */}
      <div className="lg:hidden">
        <MobileMetadataDrawer project={project} />
      </div>
    </div>
  )
}

function MetadataSidebar({ project }: { project: ProjectData }) {
  return (
    <div className="space-y-8">
      {/* Title & Description */}
      <div>
        <h1 id="project-title" className="font-display text-3xl font-bold text-navy-900 mb-4">
          {project.title}
        </h1>
        {project.shortDescription && (
          <p className="text-navy-700 leading-relaxed">
            {project.shortDescription}
          </p>
        )}
      </div>

      {/* Metadata */}
      <div className="space-y-4 text-sm">
        {project.year && (
          <div>
            <dt className="font-semibold text-navy-900">Rok</dt>
            <dd className="text-navy-700 mt-1">{project.year}</dd>
          </div>
        )}
        {project.client && (
          <div>
            <dt className="font-semibold text-navy-900">Klient</dt>
            <dd className="text-navy-700 mt-1">{project.client}</dd>
          </div>
        )}
        {project.role && (
          <div>
            <dt className="font-semibold text-navy-900">Rola</dt>
            <dd className="text-navy-700 mt-1">{project.role}</dd>
          </div>
        )}
        {project.location && (
          <div>
            <dt className="font-semibold text-navy-900">Lokalizacja</dt>
            <dd className="text-navy-700 mt-1">{project.location}</dd>
          </div>
        )}
        {project.exhibition && (
          <div>
            <dt className="font-semibold text-navy-900">Wystawa</dt>
            <dd className="text-navy-700 mt-1">{project.exhibition}</dd>
          </div>
        )}
      </div>

      {/* Categories */}
      {project.categories && project.categories.length > 0 && (
        <div>
          <dt className="font-semibold text-navy-900 mb-2">Kategorie</dt>
          <div className="flex flex-wrap gap-2">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-medium"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Medium/Tools */}
      {project.medium && project.medium.length > 0 && (
        <div>
          <dt className="font-semibold text-navy-900 mb-2">Narzędzia</dt>
          <dd className="text-navy-700 text-sm space-y-1">
            {project.medium.map((tool, i) => (
              <div key={i}>{tool}</div>
            ))}
          </dd>
        </div>
      )}

      {/* Awards */}
      {project.awards && project.awards.length > 0 && (
        <div>
          <dt className="font-semibold text-navy-900 mb-2">Nagrody</dt>
          <dd className="text-navy-700 text-sm space-y-1">
            {project.awards.map((award, i) => (
              <div key={i}>🏆 {award}</div>
            ))}
          </dd>
        </div>
      )}

      {/* Collaboration */}
      {project.collaboration && (
        <div>
          <dt className="font-semibold text-navy-900 mb-2">Współpraca</dt>
          <dd className="text-navy-700 text-sm">{project.collaboration}</dd>
        </div>
      )}

      {/* External Link */}
      {project.externalLink && (
        <a
          href={project.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors text-sm font-semibold"
        >
          Zobacz projekt <ExternalLink size={16} />
        </a>
      )}

      {/* Case Study */}
      {project.caseStudy && (
        <div className="pt-6 border-t border-navy-200">
          <dt className="font-semibold text-navy-900 mb-3">Opis projektu</dt>
          <div className="prose prose-sm max-w-none text-navy-700">
            <PortableText value={project.caseStudy} />
          </div>
        </div>
      )}
    </div>
  )
}

function MobileMetadataDrawer({ project }: { project: ProjectData }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60]">
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/90 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-t border-navy-200"
      >
        <span className="font-semibold text-navy-900 truncate pr-4">
          {project.title}
        </span>
        <ChevronUp
          size={20}
          className={cn(
            "transition-transform flex-shrink-0",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>

      {/* Drawer content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white overflow-hidden"
          >
            <div
              className="p-6 max-h-[60vh] overflow-y-auto overscroll-contain"
              data-lenis-prevent
            >
              <MetadataSidebar project={project} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-white" />
    </div>
  )
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center w-full h-full text-white">
      <div className="text-center">
        <p className="text-xl mb-4">⚠️</p>
        <p>{message}</p>
      </div>
    </div>
  )
}
