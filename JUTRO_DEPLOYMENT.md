# 🚀 Przewodnik Deployment - Sesja na Jutro

## ✅ Status Przed Deployment

```
Portfolio Status: READY FOR PRODUCTION ✅
Build: SUCCESS (21s, 0 errors, 0 warnings)
Testing: COMPLETED (accessibility, responsive, performance)
CMS: CONFIGURED (Sanity Studio at /studio)
```

---

## 📋 Zadania na Jutro - Faza 10: Deployment

### 1. **Environment Variables Setup** ⚙️

**Przygotuj te zmienne przed deployment:**

```env
# .env.local (NIGDY nie commituj!)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://adriannarauhut.com  # lub inna domena
RESEND_API_KEY=re_xxxxxxxxxxxx  # jeśli używasz contact form
REVALIDATE_SECRET=your_random_secret_string_123  # dla webhook
```

**Jak wygenerować REVALIDATE_SECRET:**
```bash
# W terminalu:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

### 2. **Vercel Account Setup** 🌐

1. **Załóż konto Vercel** (jeśli nie masz):
   - Idź do https://vercel.com
   - Sign up with GitHub (recommended)
   - Potwierdź email

2. **Install Vercel CLI** (opcjonalnie):
   ```bash
   npm install -g vercel
   vercel login
   ```

---

### 3. **Deployment Steps** 🚀

#### **Metoda A: GitHub (Recommended)**

1. **Push do GitHub:**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Import do Vercel:**
   - Vercel Dashboard → Add New Project
   - Import Git Repository
   - Wybierz `portfolio-ada`
   - Configure:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - **Environment Variables:** Dodaj wszystkie zmienne z `.env.local`
   - Deploy!

#### **Metoda B: Vercel CLI**

```bash
# W folderze projektu:
vercel

# Odpowiedz na pytania:
# Set up and deploy? Yes
# Which scope? Your account
# Link to existing project? No
# What's your project's name? portfolio-ada
# In which directory is your code located? ./
# Want to override settings? No

# Deploy to production:
vercel --prod
```

---

### 4. **Sanity Webhook Configuration** 🔗

**Po deployment na Vercel:**

1. **Skopiuj URL projektu:**
   ```
   https://portfolio-ada.vercel.app (lub twoja custom domain)
   ```

2. **Sanity Dashboard:**
   - Idź do https://sanity.io/manage
   - Wybierz swój projekt
   - API → Webhooks → Create Webhook

3. **Webhook Config:**
   ```
   Name: Vercel Revalidation
   URL: https://portfolio-ada.vercel.app/api/revalidate?secret=YOUR_REVALIDATE_SECRET
   Dataset: production
   Trigger on: Create, Update, Delete
   HTTP method: POST
   ```

4. **Test Webhook:**
   - Save webhook
   - Edytuj jakiś projekt w Sanity Studio
   - Publish
   - Sprawdź czy strona się zaktualizowała (może zająć do 1 minuty)

---

### 5. **Custom Domain (Opcjonalnie)** 🌍

**Jeśli Adrianna ma własną domenę:**

1. **Vercel Dashboard:**
   - Settings → Domains
   - Add Domain: `adriannarauhut.com`
   - Add

2. **DNS Configuration:**

   **A Record (Apex domain):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **CNAME (www subdomain):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (może zająć do 48h, zwykle 10-30min)

4. **SSL Certificate:**
   - Vercel automatycznie wygeneruje SSL (Let's Encrypt)
   - HTTPS włączy się automatycznie

---

### 6. **Post-Deployment Testing** ✅

**Po deployment, sprawdź:**

- [ ] Strona główna ładuje się poprawnie
- [ ] Nawigacja działa (smooth scroll)
- [ ] Sanity Studio działa: `https://your-domain.com/studio`
- [ ] Projekty się wyświetlają
- [ ] Modal projektów działa
- [ ] Contact form wysyła (jeśli skonfigurowany)
- [ ] Animacje działają płynnie
- [ ] Responsive design na mobile
- [ ] Lighthouse audit: 90+ score

**Lighthouse Audit:**
```bash
# Chrome DevTools:
# 1. Otwórz stronę w Chrome
# 2. F12 → Lighthouse
# 3. Generate report
# 4. Target: 90+ we wszystkich kategoriach
```

---

### 7. **Sanity Studio Access** 🎨

**Adrianna będzie mogła zarządzać treścią przez:**

```
https://your-domain.com/studio
```

**Lub przez Sanity Dashboard:**
```
https://your-project.sanity.studio
```

**Dodaj Adriannę jako admin:**
- Sanity Dashboard → Projekt → Members → Invite
- Email Adrianny → Role: Administrator

---

### 8. **Monitoring & Analytics (Opcjonalnie)** 📊

**Vercel Analytics (darmowe):**
1. Vercel Dashboard → Analytics → Enable
2. Automatyczne metryki Web Vitals

**Google Analytics (opcjonalnie):**
1. Utwórz Google Analytics property
2. Dodaj tracking code do `app/layout.tsx`

---

## 🐛 Troubleshooting

### **Problem: Build fails na Vercel**
```bash
# Rozwiązanie:
# 1. Sprawdź czy build działa lokalnie:
npm run build

# 2. Sprawdź environment variables na Vercel
# 3. Sprawdź node version (Vercel używa Node 18+)
```

### **Problem: Images nie ładują się**
```javascript
// next.config.js - sprawdź czy masz:
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

### **Problem: Sanity CORS error**
```bash
# W terminalu:
npx sanity cors add https://your-domain.vercel.app --credentials

# Lub ręcznie w Sanity Dashboard:
# API → CORS Origins → Add origin
# Origin: https://your-domain.vercel.app
# Allow credentials: Yes
```

### **Problem: Webhook nie działa**
- Sprawdź czy URL jest poprawny
- Sprawdź czy `REVALIDATE_SECRET` się zgadza
- Sprawdź logi w Vercel Dashboard → Logs
- Test webhook ręcznie (curl lub Postman)

---

## 📝 Checklist Przed Deployment

- [ ] `.env.local` ma wszystkie zmienne
- [ ] `.env.local` NIE jest w git (jest w `.gitignore`)
- [ ] `npm run build` działa lokalnie
- [ ] Sanity Studio działa na `/studio`
- [ ] Logo i zdjęcia są w `public/`
- [ ] README.md zaktualizowany
- [ ] Git committed & pushed

---

## 📦 Post-Deployment Tasks

**Po udanym deployment:**

1. **Dodaj prawdziwe projekty:**
   - Zdjęcia z wystaw
   - Projekty graficzne (okładki)
   - Prace video
   - Case studies

2. **Update About section:**
   - Bio Adrianny
   - Skills
   - Career timeline
   - Nagrody i wyróżnienia

3. **Configure Contact:**
   - Email Adrianny
   - LinkedIn, Instagram, Behance
   - Test contact form

4. **SEO Optimization:**
   - Add sitemap (Next.js auto-generates)
   - Submit to Google Search Console
   - Add og:image (social sharing)

5. **Share!**
   - LinkedIn post
   - Instagram story
   - Email do współpracowników

---

## 🎯 Success Metrics

**Po deployment, sprawdź:**

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | 90+ | Chrome DevTools |
| Lighthouse Accessibility | 100 | Chrome DevTools |
| Lighthouse SEO | 90+ | Chrome DevTools |
| FCP (First Contentful Paint) | < 1.5s | Vercel Analytics |
| LCP (Largest Contentful Paint) | < 2.5s | Vercel Analytics |
| CLS (Cumulative Layout Shift) | < 0.1 | Vercel Analytics |
| Build time | < 30s | Vercel Dashboard |

---

## 🆘 Helpful Resources

**Vercel:**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

**Sanity:**
- Docs: https://www.sanity.io/docs
- Community: https://slack.sanity.io

**Next.js:**
- Docs: https://nextjs.org/docs
- Deployment: https://nextjs.org/docs/deployment

---

## ⏰ Szacowany Czas

**Deployment process:**
- Setup Vercel: 10 min
- Configure env variables: 5 min
- Deploy: 5 min
- Sanity webhook: 10 min
- Custom domain (opcjonalnie): 20 min
- Testing: 15 min

**Całkowity czas: 45-65 minut** ⏱️

---

## 🎉 Po Deployment

**Gotowe! Portfolio Adrianny jest LIVE! 🚀**

Adrianna może teraz:
- ✅ Zarządzać projektami przez Sanity Studio
- ✅ Dodawać nowe prace
- ✅ Edytować bio i about
- ✅ Odbierać wiadomości przez contact form
- ✅ Dzielić się portfolio z całym światem!

---

**Status na dziś:** Portfolio gotowe, wszystko działa lokalnie ✅
**Jutro:** Deployment na Vercel i uruchomienie live! 🚀

---

*Dokument przygotowany: 2025-12-28*
*Następna sesja: Deployment*
