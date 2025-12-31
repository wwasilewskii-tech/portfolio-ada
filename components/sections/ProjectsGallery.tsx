'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { cn } from '@/lib/utils/cn'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  shortDescription?: string
  thumbnailUrl: string
  thumbnailBlurHash?: string
  categories?: string[]
  medium?: string[]
  client?: string
  year?: number
}

interface ProjectsGalleryProps {
  projects: Project[]
}

const categoryLabels: Record<string, string> = {
  all: 'Wszystkie',
  fotografia: 'Fotografia',
  grafika: 'Grafika',
  video: 'Projekty Video',
  ilustracje: 'Ilustracje Literackie',
  'design-okladek': 'Design Okładek',
  wystawy: 'Wystawy',
}

/**
 * ProjectsGallery
 * Main gallery section with filtering and project cards
 */
export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null)

  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.flatMap((p) => p.categories || []))]

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.categories?.includes(selectedCategory))

  const handleProjectClick = (project: Project) => {
    setSelectedProjectSlug(project.slug.current)
  }

  const handleCloseModal = () => {
    setSelectedProjectSlug(null)
  }

  const handleNavigateProject = (direction: 'prev' | 'next') => {
    const currentIndex = filteredProjects.findIndex(
      (p) => p.slug.current === selectedProjectSlug
    )
    if (currentIndex === -1) return

    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % filteredProjects.length
        : (currentIndex - 1 + filteredProjects.length) % filteredProjects.length

    setSelectedProjectSlug(filteredProjects[nextIndex].slug.current)
  }

  return (
    <section id="projekty" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-navy-900 sm:text-5xl">
              Moje Projekty
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-navy-700">
              Odkryj moją pracę w różnych mediach - od fotografii przez grafikę
              po projekty video
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'rounded-full px-6 py-2 text-sm font-medium transition-all',
                  selectedCategory === category
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
                )}
              >
                {categoryLabels[category] || category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-navy-600">
              Brak projektów w tej kategorii
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        projectSlug={selectedProjectSlug}
        onClose={handleCloseModal}
        onNavigate={handleNavigateProject}
      />
    </section>
  )
}
