import { client } from '@/lib/sanity/client'
import { projectsQuery, aboutPageQuery, siteSettingsQuery } from '@/lib/sanity/queries'
import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/sections/Hero'
import DecorativeFeatures from '@/components/sections/DecorativeFeatures'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import DecorativeDivider from '@/components/sections/DecorativeDivider'
import AboutSection from '@/components/sections/AboutSection'
import DecorativeCallout from '@/components/sections/DecorativeCallout'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/ui/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'

export const revalidate = 3600 // ISR: revalidate every hour

export default async function HomePage() {
  // Fetch data from Sanity (with fallback for empty CMS)
  const [projects, aboutData, siteSettings] = await Promise.all([
    client.fetch(projectsQuery).catch(() => []),
    client.fetch(aboutPageQuery).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ])

  return (
    <ErrorBoundary>
      <Navigation />
      <main id="main-content">
        <Hero data={aboutData} />
        <DecorativeFeatures />
        <ProjectsGallery projects={projects} />
        <DecorativeDivider />
        <AboutSection data={aboutData} />
        <DecorativeCallout />
        <ContactSection settings={siteSettings} />
      </main>
      <Footer settings={siteSettings} />
    </ErrorBoundary>
  )
}
