import type { Metadata } from "next";
import { inter, bricolage } from "./fonts";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CursorFollower from "@/components/ui/CursorFollower";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adriannart.pl';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Adrianna Rauhut - Fotografka, Graficzka, Operatorka Kamery",
  description: "Portfolio Adrianny Rauhut - specjalistki ds. content wizualnego ze Szczecina. Fotografia, grafika, ilustracje literackie, projekty video.",
  keywords: [
    "fotografia",
    "grafika",
    "Szczecin",
    "fotografia artystyczna",
    "ilustracje",
    "design okładek",
    "operatorka kamery",
    "Adrianna Rauhut",
  ],
  openGraph: {
    title: "Adrianna Rauhut - Portfolio",
    description: "Specjalistka ds. content wizualnego - fotografia, grafika, video. Współpraca ze Związkiem Literatów Polskich, Uniwizja.",
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Adrianna Rauhut Portfolio Logo',
      }
    ],
    locale: "pl_PL",
    type: "website",
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
    "jobTitle": "Fotografka, Graficzka, Operatorka Kamery",
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
      "Operatorka Kamery",
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
    "description": "Portfolio Adrianny Rauhut - specjalistki ds. content wizualnego ze Szczecina. Fotografia, grafika, ilustracje literackie, projekty video.",
    "inLanguage": "pl-PL",
    "author": {
      "@type": "Person",
      "name": "Adrianna Rauhut"
    }
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
