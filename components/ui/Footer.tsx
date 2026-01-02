import { Mail, Phone, MapPin } from 'lucide-react'

interface FooterProps {
  settings?: {
    email?: string
    phone?: string
    address?: {
      street?: string
      city?: string
      postalCode?: string
      country?: string
    }
    linkedin?: string
    behance?: string
    instagram?: string
  }
}

/**
 * Footer Component
 * Contains NAP (Name, Address, Phone) information for SEO
 * and social media links
 */
export default function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 py-12 text-navy-200">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Name & Description */}
          <div>
            <h3 className="mb-4 font-display text-xl font-bold text-white">
              Adrianna Rauhut
            </h3>
            <p className="text-sm leading-relaxed">
              Fotografka, Graficzka, Operatorka Kamery
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Specjalistka ds. content wizualnego ze Szczecina specjalizująca się w
              fotografii artystycznej, grafice i projektach video.
            </p>
          </div>

          {/* Contact Information (NAP) */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-white">
              Kontakt
            </h3>
            <address className="not-italic">
              {settings?.email && (
                <div className="mb-3 flex items-start gap-2">
                  <Mail size={18} className="mt-0.5 shrink-0 text-yellow-400" />
                  <a
                    href={`mailto:${settings.email}`}
                    className="text-sm hover:text-yellow-400 transition-colors"
                  >
                    {settings.email}
                  </a>
                </div>
              )}
              {settings?.phone && (
                <div className="mb-3 flex items-start gap-2">
                  <Phone size={18} className="mt-0.5 shrink-0 text-yellow-400" />
                  <a
                    href={`tel:${settings.phone.replace(/\s/g, '')}`}
                    className="text-sm hover:text-yellow-400 transition-colors"
                  >
                    {settings.phone}
                  </a>
                </div>
              )}
              {settings?.address && (
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-yellow-400" />
                  <div className="text-sm">
                    {settings.address.street && (
                      <div>{settings.address.street}</div>
                    )}
                    <div>
                      {settings.address.postalCode && `${settings.address.postalCode} `}
                      {settings.address.city || 'Szczecin'}
                    </div>
                    <div>{settings.address.country || 'Polska'}</div>
                  </div>
                </div>
              )}
            </address>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-white">
              Social Media
            </h3>
            <div className="space-y-2">
              {settings?.linkedin && (
                <a
                  href={settings.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-yellow-400 transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {settings?.behance && (
                <a
                  href={settings.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-yellow-400 transition-colors"
                >
                  Behance
                </a>
              )}
              {settings?.instagram && (
                <a
                  href={settings.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-yellow-400 transition-colors"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-navy-800 pt-8 text-center">
          <p className="text-sm text-navy-400">
            © {currentYear} Adrianna Rauhut. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
