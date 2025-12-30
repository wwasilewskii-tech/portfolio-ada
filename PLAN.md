# Plan Implementacji Portfolio Adrianny Rauhut

## 📊 Status Projektu (2025-12-28)

### ✅ Fazy Ukończone:
- ✅ **Faza 1:** Setup Projektu
- ✅ **Faza 2:** Sanity CMS
- ✅ **Faza 3:** Styling & Design System
- ✅ **Faza 4:** Animacje Core
- ✅ **Faza 5:** Layout & Navigation
- ✅ **Faza 6:** Homepage Sections
- ✅ **Faza 7:** Project Modal
- ✅ **Faza 8:** API Routes
- ✅ **Faza 9:** Polish & Testing

### ⏳ Do Wykonania:
- ⏳ **Faza 10:** Deployment (Vercel)

### 📦 Build Status:
```
✓ Compiled successfully in 21.0s
✓ No errors or warnings
✓ Ready for production deployment
```

---

## O Właścicielce Portfolio

**Adrianna Rauhut** – szczecinianka, fotografka, graficzka, operatorka kamery.

**Doświadczenie artystyczne:**
- II miejsce w konkursie plastycznym – Ogólnopolski Festiwal Wokalno-Plastyczny „Młodych Bajanie przez Śpiew i Malowanie" (2010)
- Warsztaty animacji filmowej „Alkohol, narkotyki, dopalacze – co w zamian?" (2012/2013)
- Warsztaty „Z klatki schodowej do klatki filmowej" (2018)

**Wystawy:**
- „Port malarski. Moja Łasztownia" – Galeria Kapitańska, Szczecin (wystawa poplenerowa)
- „Od miłości do nienawiści – jeden krok" (2015, Szczecin Meeting Point)
- „Interakcje – poezja, fotografia, grafika" (2015, Klub 12. Szczecińskiej Dywizji Zmechanizowanej)
- „Poetyckie rusałki" (2016, Klub Hormon)

**Projekty graficzne:**
- Ilustracje tomików poezji: „Roztańczony atrament", „…(nie) z tej bajki", „Łapacz róż" (Edyta Rauhut)
- Projekt okładki: „Do rozważenia…" (Barbara Moraczewska-Jankowska)
- Projekt okładki: „Z piątego wymiaru…" (Zenon Lach-Ceraszyński)
- Projekt okładki audiobooka: „Zapiski z umierania" (Maria Pawlikowska-Jasnorzewska, 2024)

**Współpraca:**
- Grafik – Związek Literatów Polskich Oddział w Szczecinie
- Operatorka kamery – Uniwizja (Telewizja Uniwersytetu Szczecińskiego)
- Współinicjatorka akcji „Przygarnij wiersz – on nie gryzie" (ZLP Oddział Szczecin)

## Podsumowanie Projektu

Portfolio dla Adrianny Rauhut – artystki multimedialnej (fotografia, grafika, operatorka kamery). Strona wizualnie inspirowana https://www.ngan-nguyen.com/ z kolorami brandingowymi (granatowy i żółty). Single-page design z płynnym scrollowaniem, zaawansowanymi animacjami i prostym systemem zarządzania treścią do prezentacji prac fotograficznych, graficznych i projektów video.

## Identyfikacja Wizualna

**Logo:** `C:\projekty\portfolio ada\Adriannaart2.png`
- Stylizowany kot w okręgu z napisem "ADRIANNA ART"
- Kolory: granatowy (navy) dla kota i części tekstu + żółty dla okręgu i "ART"
- Design: minimalistyczny, artystyczny, zapamiętujący się
- Zastosowanie: nawigacja, favicon, footer, og:image

**Kolory brandingowe:**
- **Navy (Granatowy):** ciemny, elegancki kolor bazowy
- **Yellow (Żółty):** energiczny kolor akcentujący
- Kontrast: wysoki, czytelny, idealny dla portfolio artystycznego

**Typografia:**
- Display font: Bricolage Grotesque (dla tytułów, nawiązanie do przykładu)
- Body font: Inter (dla tekstu)

**Styl wizualny:**
- Minimalistyczny, skupiony na treści (fotografie, grafiki)
- Przestronny layout z dużym white space
- Delikatne animacje podkreślające elementy
- Accent color (yellow) używany oszczędnie dla maksymalnego efektu

## Stack Technologiczny

**Frontend:**
- **Next.js 14** (App Router) - framework
- **React 18** - UI library
- **TypeScript** - type safety
- **Tailwind CSS** - styling

**CMS:**
- **Sanity.io** - headless CMS z panelem administracyjnym
  - Wybrane ze względu na: darmowy tier, doskonałą integrację z Next.js, customizable studio, real-time collaboration
  - Studio embedded w projekcie pod `/studio`

**Animacje:**
- **GSAP + ScrollTrigger** - główny silnik animacji
- **Lenis** - smooth scrolling
- **Framer Motion** - page transitions i modalowe okna

**Deployment:**
- **Vercel** - zero-config deployment, automatic SSL, global CDN
- **ISR** (Incremental Static Regeneration) z on-demand revalidation via webhooks

## Kluczowe Decyzje Architektoniczne

### 1. App Router (Next.js 14)
- Server Components dla lepszego performance
- Built-in streaming i suspense
- Łatwiejsze zarządzanie loading states

### 2. Struktura Projektu

```
portfolio-ada/
├── app/
│   ├── layout.tsx                 # Root layout z providers
│   ├── page.tsx                   # Homepage (server component)
│   ├── globals.css                # Global styles + CSS variables
│   ├── fonts.ts                   # Font definitions
│   └── api/
│       ├── contact/route.ts       # Email API
│       └── revalidate/route.ts    # Webhook revalidation
├── components/
│   ├── sections/                  # Main page sections
│   │   ├── Hero.tsx
│   │   ├── ProjectsGallery.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                        # Reusable UI
│   │   ├── Navigation.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── AnimatedText.tsx
│   │   └── CursorFollower.tsx
│   ├── animations/                # Animation wrappers
│   │   ├── ScrollReveal.tsx
│   │   ├── MagneticButton.tsx
│   │   └── ParallaxSection.tsx
│   └── providers/
│       └── SmoothScrollProvider.tsx
├── lib/
│   ├── sanity/
│   │   ├── client.ts              # Sanity client config
│   │   ├── queries.ts             # GROQ queries
│   │   └── image-url.ts           # Image URL builder
│   └── utils/
│       ├── cn.ts                  # classname merger
│       └── constants.ts           # Brand colors, breakpoints
└── studio/
    └── schemas/
        ├── project.ts             # Project content schema
        ├── aboutPage.ts           # About page schema
        └── siteSettings.ts        # Site settings schema
```

### 3. Schemat Danych Sanity (Project)

Kluczowe pola dla projektu portfolio (dostosowane do profilu Adrianny):
- **title**, **slug** - identyfikacja
- **shortDescription** - widoczny na karcie (max 120 znaków)
- **thumbnailImage** - miniatura (z blurhash dla performance)
- **coverImage**, **galleryImages** - galeria projektu
- **medium[]** - medium artystyczne (np. "Canon 5D Mark IV", "Adobe Photoshop", "DaVinci Resolve")
- **categories[]** - kategorie dostosowane do profilu:
  - **Fotografia** (portrety, reportaż, fotografia artystyczna)
  - **Grafika** (ilustracje, projekty okładek, branding)
  - **Projekty Video** (telewizja, animacje, dokumentalne)
  - **Ilustracje Literackie** (ilustracje do poezji, książek)
  - **Design Okładek** (książki, audiobooki, tomiki)
  - **Wystawy** (prace wystawiennicze)
- **brandColors[]** - kolory dominujące w projekcie (opcjonalnie)
- **client**, **year**, **role** - metadane
- **location** - miejsce (np. "Szczecin Meeting Point", "Galeria Kapitańska")
- **exhibition** - nazwa wystawy (jeśli dotyczy)
- **collaboration** - współpraca (np. "Związek Literatów Polskich", "Uniwizja")
- **caseStudy** - Portable Text (opis projektu, proces twórczy, inspiracje)
- **awards[]** - nagrody i wyróżnienia
- **pressLinks[]** - linki do materiałów prasowych, recenzji
- **externalLink** - link zewnętrzny (jeśli dotyczy)

Dodatkowe schematy:
- **aboutPage** - hero title, bio (z osiągnięciami Adrianny), skills, career timeline, wystawy, nagrody
- **siteSettings** - email, LinkedIn, Behance, Instagram, inne social media

### 4. Kolory Brandingowe (Tailwind Config)

**Navy (Granatowy):**
- `navy-900` (#0f172a) - główny tekst, headings
- `navy-800` (#1e3a8a) - body text, przyciski
- `navy-500` (#1e3a8a) - akcenty, CTA
- `navy-50` - tła sekcji

**Yellow (Żółty):**
- `yellow-400` (#facc15) - primary accent (hover, highlights)
- `yellow-300` - lighter accents
- Gradienty: `bg-gradient-navy-yellow`

### 5. Kluczowe Animacje

**Smooth Scrolling:**
- Lenis z integracją GSAP ScrollTrigger
- Duration: 1.2s, custom easing

**Scroll-based:**
- `ScrollReveal` - fade-in + slide (up/down/left/right)
- Parallax backgrounds w About section
- Progress indicators

**Interactive:**
- `AnimatedText` - character split animations
- `MagneticButton` - przyciąganie do kursora
- `CursorFollower` - custom cursor (desktop only)
- Project card hover - 3D tilt + scale

**Modal:**
- Framer Motion z scale + fade transitions
- Backdrop blur effect

## Implementacja Krok po Kroku

### Faza 1: Setup Projektu (Dzień 1)

```bash
# 1. Inicjalizacja Next.js
npx create-next-app@latest portfolio-ada --typescript --tailwind --app

# 2. Instalacja zależności
npm install next-sanity @sanity/client @sanity/image-url @portabletext/react
npm install gsap @gsap/react @studio-freight/lenis framer-motion
npm install clsx tailwind-merge lucide-react react-hook-form zod resend
npm install -D @tailwindcss/typography @tailwindcss/aspect-ratio

# 3. Setup Sanity
npm install -g @sanity/cli
sanity init

# 4. Struktura folderów
mkdir -p components/{sections,ui,animations,providers}
mkdir -p lib/{sanity,utils}
mkdir -p studio/schemas
```

### Faza 2: Sanity CMS (Dzień 1-2)

**Kluczowe pliki:**

1. **studio/schemas/project.ts** - schemat projektu z polami: title, slug, shortDescription, thumbnailImage, coverImage, galleryImages, technologies, categories, brandColors, client, year, role, caseStudy (Portable Text), metrics, externalLink, githubLink

2. **lib/sanity/client.ts** - konfiguracja klienta:
```typescript
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})
```

3. **lib/sanity/queries.ts** - GROQ queries:
```typescript
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc, publishedAt desc) {
    _id, title, slug, shortDescription, featured,
    "thumbnailUrl": thumbnailImage.asset->url,
    "thumbnailBlurHash": thumbnailImage.asset->metadata.blurhash,
    technologies, categories, client, year
  }
`
```

4. **app/studio/[[...index]]/page.tsx** - Sanity Studio:
```typescript
'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

**Dodaj 3-5 testowych projektów w Studio** (http://localhost:3000/studio)

### Faza 3: Styling & Design System (Dzień 2)

**Kluczowe pliki:**

1. **tailwind.config.ts** - pełna konfiguracja z:
   - Kolory: navy (50-950), yellow (50-950)
   - Fonty: Inter, Bricolage Grotesque (display)
   - Custom animations: fade-in, slide-up, scale-in
   - Custom utilities: text-gradient, glass, section-padding

2. **app/globals.css** - CSS variables, custom scrollbar, utility classes

3. **app/fonts.ts** - Next.js font loading:
```typescript
import { Inter, Bricolage_Grotesque } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '600', '700']
})
```

### Faza 4: Animacje Core (Dzień 3)

**Kluczowe komponenty:**

1. **components/providers/SmoothScrollProvider.tsx**
   - Inicjalizacja Lenis smooth scrolling
   - Sync z GSAP ScrollTrigger
   - Dodać jako wrapper w `app/layout.tsx`

2. **components/animations/ScrollReveal.tsx**
   - GSAP scroll-triggered animations
   - Props: direction (up/down/left/right), delay
   - Użycie: wrap content do reveal on scroll

3. **components/ui/AnimatedText.tsx**
   - Character/word split animations
   - GSAP stagger animations
   - Użycie: hero titles

4. **components/animations/MagneticButton.tsx**
   - Magnetic cursor effect
   - GSAP position tracking
   - Użycie: CTAs, primary buttons

5. **components/ui/CursorFollower.tsx**
   - Custom cursor (desktop only)
   - GSAP smooth following
   - Dodać do `app/layout.tsx`

### Faza 5: Layout & Navigation (Dzień 3)

**Kluczowe pliki:**

1. **app/layout.tsx** - Root layout:
```typescript
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import Navigation from '@/components/ui/Navigation'
import CursorFollower from '@/components/ui/CursorFollower'
import { inter, bricolage } from './fonts'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans">
        <SmoothScrollProvider>
          <Navigation />
          <CursorFollower />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
```

2. **components/ui/Navigation.tsx**
   - Fixed header z glassmorphism on scroll
   - Smooth scroll do sekcji
   - Social links (LinkedIn, GitHub)

### Faza 6: Homepage Sections (Dzień 4-5)

**4 główne sekcje:**

1. **components/sections/Hero.tsx**
   - AnimatedText dla title
   - ScrollReveal dla subtitle
   - MagneticButton CTA
   - Background gradient decorations

2. **components/sections/ProjectsGallery.tsx**
   - Filter tabs (categories)
   - Grid projektów (responsive: 1 col mobile, 2 tablet, 3 desktop)
   - ProjectCard components z hover animations
   - State management dla selected project (modal)

3. **components/sections/AboutSection.tsx**
   - ParallaxSection dla tła
   - Bio content (Portable Text)
   - Skills grid
   - Career timeline

4. **components/sections/ContactSection.tsx**
   - Contact form (react-hook-form + zod)
   - API route z Resend dla email
   - Social links

**components/ui/ProjectCard.tsx:**
- Image z Next/Image + blurhash placeholder
- Hover: scale image (1.1), show overlay, 3D tilt effect
- Click: open modal

**app/page.tsx** - Homepage (Server Component):
```typescript
import { client } from '@/lib/sanity/client'
import { projectsQuery, aboutPageQuery, siteSettingsQuery } from '@/lib/sanity/queries'
import Hero from '@/components/sections/Hero'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'

export const revalidate = 3600 // ISR: 1 hour

export default async function HomePage() {
  const [projects, aboutData, siteSettings] = await Promise.all([
    client.fetch(projectsQuery),
    client.fetch(aboutPageQuery),
    client.fetch(siteSettingsQuery),
  ])

  return (
    <main>
      <Hero data={aboutData} />
      <ProjectsGallery projects={projects} />
      <AboutSection data={aboutData} />
      <ContactSection settings={siteSettings} />
    </main>
  )
}
```

### Faza 7: Project Modal (Dzień 5-6)

**components/ui/ProjectModal.tsx:**
- Framer Motion animations (scale + fade)
- Backdrop blur overlay
- Fetch project by slug (client-side)
- Render:
  - Cover image
  - Title + metadata (client, year, role)
  - Technologies tags
  - Case study content (Portable Text)
  - Gallery grid
  - Success metrics cards
  - External/GitHub links
- Close button (X icon)
- Click outside to close

**components/ui/PortableTextRenderer.tsx:**
- Custom components dla Portable Text
- Styled headings (h2, h3)
- Image rendering z Next/Image
- Link styling

### Faza 8: API Routes (Dzień 6)

1. **app/api/contact/route.ts** - Contact form:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    subject: `New contact from ${name}`,
    html: `<h2>From: ${name} (${email})</h2><p>${message}</p>`
  })

  return Response.json({ success: true })
}
```

2. **app/api/revalidate/route.ts** - Webhook revalidation:
```typescript
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ message: 'Invalid' }, { status: 401 })
  }

  revalidatePath('/')
  return Response.json({ revalidated: true })
}
```

### Faza 9: Polish & Testing (Dzień 7) ✅ UKOŃCZONE

**Checklist:**

- [x] Responsywność (375px, 768px, 1440px)
- [x] Keyboard navigation działa
- [x] Color contrast check (WCAG AA)
- [x] Images mają alt text
- [x] Loading states dla wszystkich async operations (blur placeholders)
- [x] Error handling w forms
- [x] ErrorBoundary component dodany
- [x] Test smooth scrolling na różnych przeglądarkach
- [x] Test animacji performance (60fps)
- [x] Add `prefers-reduced-motion` support
- [x] Skip-to-main link dla accessibility
- [x] Focus states dla keyboard navigation
- [x] Image optimization z blur placeholders
- [x] MetadataBase dla OpenGraph
- [x] Build test passed (no errors/warnings)

**SEO Setup:**
```typescript
// app/layout.tsx
export const metadata = {
  title: 'Adrianna Rauhut - Fotografka, Graficzka, Operatorka Kamery',
  description: 'Portfolio Adrianny Rauhut - artystki multimedialnej ze Szczecina. Fotografia, grafika, ilustracje literackie, projekty video.',
  keywords: ['fotografia', 'grafika', 'Szczecin', 'fotografia artystyczna', 'ilustracje', 'design okładek', 'operatorka kamery'],
  openGraph: {
    title: 'Adrianna Rauhut - Portfolio',
    description: 'Artystka multimedialna - fotografia, grafika, video. Współpraca ze Związkiem Literatów Polskich, Uniwizja.',
    images: ['/og-image.jpg'],
    locale: 'pl_PL',
  },
}
```

### Faza 10: Deployment (Dzień 8)

**Vercel Setup:**

1. **Lokalne przygotowanie:**
```bash
# Test production build
npm run build
npm run start

# Setup Vercel
npm install -g vercel
vercel login
vercel
```

2. **Environment Variables** (Vercel Dashboard):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=...
RESEND_API_KEY=...
CONTACT_EMAIL=...
REVALIDATE_SECRET=... (generate random string)
```

3. **Sanity Webhook** (Sanity Dashboard → API → Webhooks):
   - URL: `https://your-domain.vercel.app/api/revalidate?secret=YOUR_SECRET`
   - Trigger: publish, unpublish
   - Dataset: production

4. **next.config.js:**
```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}
```

5. **Deploy:**
```bash
vercel --prod
```

6. **Custom domain** (opcjonalnie):
   - Vercel Dashboard → Domains → Add
   - Update DNS records

## Kluczowe Pliki do Implementacji

**Priorytet P0 (Must Have):**
1. `app/layout.tsx` - Root layout
2. `app/page.tsx` - Homepage
3. `lib/sanity/client.ts` - Sanity client
4. `lib/sanity/queries.ts` - GROQ queries
5. `studio/schemas/project.ts` - Project schema
6. `components/providers/SmoothScrollProvider.tsx` - Smooth scrolling
7. `components/ui/Navigation.tsx` - Navigation
8. `components/sections/Hero.tsx` - Hero section
9. `components/sections/ProjectsGallery.tsx` - Projects grid
10. `components/ui/ProjectCard.tsx` - Project card
11. `components/ui/ProjectModal.tsx` - Project modal
12. `tailwind.config.ts` - Design system

**Priorytet P1 (Should Have):**
13. `components/animations/ScrollReveal.tsx` - Scroll animations
14. `components/ui/AnimatedText.tsx` - Text animations
15. `components/animations/MagneticButton.tsx` - Magnetic effect
16. `components/sections/AboutSection.tsx` - About section
17. `components/sections/ContactSection.tsx` - Contact section
18. `components/ui/CursorFollower.tsx` - Custom cursor

## Timeline

**Całkowity czas: 8 dni**
- Setup & Sanity: 2 dni
- Styling & Animations: 1 dzień
- Homepage Sections: 2 dni
- Modal & Polish: 2 dni
- Deployment: 1 dzień

## System Zarządzania Treścią

**Dodawanie nowego projektu:**
1. Przejdź do `http://localhost:3000/studio` (dev) lub `https://your-domain.com/studio` (prod)
2. Kliknij "Project" → "+"
3. Wypełnij pola:
   - **Title** (tytuł projektu, np. "Wystawa Poetyckie rusałki")
   - **Slug** (auto-generate z title)
   - **Short Description** (max 120 znaków - widoczny na karcie projektu)
   - **Thumbnail Image** (miniatura do grid - główne zdjęcie)
   - **Cover Image** (duże zdjęcie w modalu - hero image projektu)
   - **Gallery Images** (dodatkowe zdjęcia z projektu)
   - **Medium** (np. "Canon 5D Mark IV", "Adobe Illustrator", "DaVinci Resolve")
   - **Categories** (Fotografia, Grafika, Projekty Video, Ilustracje Literackie, Design Okładek, Wystawy)
   - **Client** (jeśli dotyczy, np. "Związek Literatów Polskich")
   - **Year** (rok realizacji)
   - **Role** (np. "Fotografka", "Graficzka", "Ilustratorka")
   - **Location** (miejsce, np. "Galeria Kapitańska, Szczecin")
   - **Exhibition** (nazwa wystawy, jeśli dotyczy)
   - **Collaboration** (współpraca, np. "ZLP Oddział Szczecin")
   - **Case Study** (rich text editor - opis projektu, proces twórczy, inspiracje)
   - **Awards** (nagrody i wyróżnienia związane z projektem)
   - **Press Links** (linki do recenzji, materiałów prasowych)
   - **External Link** (link zewnętrzny, jeśli istnieje)
4. Publish
5. Projekt automatycznie pojawi się na stronie (webhook revalidation)

## Przykładowe Projekty do Dodania (Bazując na Bio Adrianny)

**Fotografia:**
1. Wystawa "Od miłości do nienawiści – jeden krok" (2015, Szczecin Meeting Point)
2. Wystawa "Interakcje – poezja, fotografia, grafika" (2015)
3. Wystawa "Poetyckie rusałki" (2016, Klub Hormon)
4. Wystawa "Port malarski. Moja Łasztownia" (Galeria Kapitańska)

**Grafika / Design Okładek:**
5. Ilustracje "Roztańczony atrament" (Edyta Rauhut)
6. Ilustracje "…(nie) z tej bajki" (Edyta Rauhut)
7. Ilustracje "Łapacz róż" (Edyta Rauhut)
8. Okładka "Do rozważenia…" (Barbara Moraczewska-Jankowska)
9. Okładka "Z piątego wymiaru…" (Zenon Lach-Ceraszyński)
10. Okładka audiobooka "Zapiski z umierania" (2024)

**Projekty Video / Animacja:**
11. Warsztaty animacji filmowej "Alkohol, narkotyki, dopalacze – co w zamian?" (2012/2013)
12. Warsztaty "Z klatki schodowej do klatki filmowej" (2018)
13. Projekty z Uniwizji (Telewizja Uniwersytetu Szczecińskiego)

**Współpraca / Projekty Specjalne:**
14. Akcja "Przygarnij wiersz – on nie gryzie" (ZLP)
15. Prace graficzne dla Związku Literatów Polskich

**Nagrody:**
16. II miejsce – "Młodych Bajanie przez Śpiew i Malowanie" (2010)

## Performance Targets

- **Lighthouse Score:** 90+ (wszystkie kategorie)
- **FCP (First Contentful Paint):** < 1.5s
- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** < 0.1
- **Bundle size:** < 200KB (first load JS)

## Backup & Security

- **Git:** commit & push regularnie
- **Sanity:** automatyczne backupy (Sanity hosting)
- **Environment variables:** NIGDY nie commituj do repo
- **API keys:** rotate co 3-6 miesięcy
- **CORS:** configure dla Sanity webhook

## Post-Launch Tasks

1. Dodaj prawdziwe projekty portfolio
2. Profesjonalne fotografie
3. Complete case studies z metrics
4. Update bio i about content
5. Test na prawdziwych użytkownikach
6. Setup Google Analytics (opcjonalnie)
7. Monitor performance (Vercel Analytics)

---

**Autor planu:** Claude Sonnet 4.5
**Data:** 2025-12-27
**Szacowany czas implementacji:** 8 dni intensywnej pracy
