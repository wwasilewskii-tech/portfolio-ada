import type { Metadata } from "next";
import { inter, bricolage } from "./fonts";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CursorFollower from "@/components/ui/CursorFollower";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adriannart.pl';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Adrianna Rauhut - Fotografka, Graficzka",
  description: "Portfolio Adrianny Rauhut - specjalistki ds. content wizualnego ze Szczecina. Fotografia, grafika, ilustracje literackie, design wizualny.",
  keywords: [
    "fotografia",
    "grafika",
    "Szczecin",
    "fotografia artystyczna",
    "ilustracje",
    "design okładek",
    "Adrianna Rauhut",
  ],
  openGraph: {
    title: "Adrianna Rauhut - Fotografka i Graficzka Szczecin",
    description: "Profesjonalna fotografia i grafika w Szczecinie. Fotografia artystyczna, portretowa, design okładek, ilustracje literackie.",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Adrianna Rauhut - Fotografka i Graficzka Szczecin',
      }
    ],
    locale: "pl_PL",
    type: "website",
    siteName: "Adrianna Rauhut Portfolio",
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adrianna Rauhut",
    "jobTitle": "Fotografka, Graficzka",
    "url": baseUrl,
    "image": `${baseUrl}/adrianna1.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Szczecin",
      "addressCountry": "PL"
    },
    "knowsAbout": [
      "Fotografia",
      "Grafika",
      "Ilustracje Literackie",
      "Design Okładek",
      "Fotografia Artystyczna",
      "Fotografia Portretowa"
    ],
    "alumniOf": "Związek Literatów Polskich",
    "worksFor": {
      "@type": "Organization",
      "name": "Uniwizja - Telewizja Uniwersytetu Szczecińskiego"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Adrianna Rauhut Portfolio",
    "url": baseUrl,
    "description": "Portfolio Adrianny Rauhut - specjalistki ds. content wizualnego ze Szczecina. Fotografia, grafika, ilustracje literackie, design wizualny.",
    "inLanguage": "pl-PL",
    "author": {
      "@type": "Person",
      "name": "Adrianna Rauhut"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Adrianna Rauhut - Fotografka i Graficzka",
    "image": `${baseUrl}/adrianna1.jpg`,
    "description": "Profesjonalna fotografia i grafika w Szczecinie. Specjalizuję się w fotografii artystycznej, portretowej, designie okładek i ilustracjach literackich.",
    "url": baseUrl,
    "telephone": "+48-XXX-XXX-XXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Szczecin",
      "addressRegion": "Zachodniopomorskie",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.4285,
      "longitude": 14.5528
    },
    "areaServed": {
      "@type": "City",
      "name": "Szczecin"
    },
    "sameAs": [
      "https://www.facebook.com/adriannarauhut",
      "https://www.instagram.com/adriannarauhut"
    ],
    "serviceType": [
      "Fotografia artystyczna",
      "Fotografia portretowa",
      "Grafika komputerowa",
      "Design okładek",
      "Ilustracje literackie"
    ],
    "founder": {
      "@type": "Person",
      "name": "Adrianna Rauhut"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jakie usługi fotograficzne oferuje fotograf w Szczecinie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferuję profesjonalne usługi fotograficzne w Szczecinie, w tym fotografię portretową, biznesową, artystyczną, sesje koncepcyjne oraz reportaże z wydarzeń kulturalnych. Specjalizuję się w fotografii artystycznej - moje prace były prezentowane na wystawach w Szczecinie."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie usługi graficzne świadczy grafik w Szczecinie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jako grafik komputerowy w Szczecinie oferuję design okładek książek, ilustracje literackie i artystyczne, branding i identyfikację wizualną oraz grafikę reklamową. Współpracuję ze Związkiem Literatów Polskich i wieloma wydawnictwami."
        }
      },
      {
        "@type": "Question",
        "name": "Gdzie działasz jako fotograf i grafik?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Głównie obsługuję klientów w Szczecinie i okolicach (Police, Goleniów, Stargard). Chętnie podejmuję się projektów z całego województwa zachodniopomorskiego, a w zakresie grafiki komputerowej i designu pracuję również zdalnie z klientami z całej Polski."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie doświadczenie ma fotografka z Szczecina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moje prace fotograficzne były prezentowane na wystawach w Szczecinie: 'Od miłości do nienawiści' (Meeting Point), 'Interakcje poezja, fotografia, grafika' (Klub 12. DZ) oraz 'Poetyckie rusałki' (Klub Hormon). Współpracuję z instytucjami kulturalnymi i blogiem edisanonimaart.pl."
        }
      }
    ]
  };

  return (
    <html lang="pl" className={`${inter.variable} ${bricolage.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <a href="#main-content" className="skip-to-main">
          Przejdź do głównej treści
        </a>
        <SmoothScrollProvider>
          <CursorFollower />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
