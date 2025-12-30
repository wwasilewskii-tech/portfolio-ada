# 🚀 Deployment Checklist - Portfolio Adrianny Rauhut

## 📋 Pre-Deployment (Przed wdrożeniem)

### Lokalne Testy
- [ ] `npm run build` działa bez błędów
- [ ] `npm run build` działa bez warnings
- [ ] `npm start` uruchamia aplikację lokalnie
- [ ] Strona działa poprawnie na localhost:3000
- [ ] Wszystkie sekcje ładują się poprawnie
- [ ] Navigation działa (desktop + mobile)
- [ ] Contact form wysyła wiadomości (jeśli Resend skonfigurowany)
- [ ] Sanity CMS zwraca dane (projekty ładują się)

### Weryfikacja Plików
- [ ] `.env.local` zawiera wszystkie wymagane zmienne
- [ ] `.env.example` jest zaktualizowany
- [ ] `.gitignore` zawiera `.env.local` i `node_modules`
- [ ] `package.json` jest aktualny
- [ ] Brak plików tymczasowych/testowych w repozytorium

### Sanity CMS
- [ ] CORS skonfigurowany dla produkcyjnej domeny
  ```bash
  npx sanity cors add https://adriannarauhut.com --credentials
  ```
- [ ] Projekt Sanity jest opublikowany (published)
- [ ] Testowe projekty/dane są dodane w Sanity Studio
- [ ] Obrazy są przesłane i optymalizowane

### Email Configuration (Opcjonalnie)
- [ ] Resend API key jest utworzony
- [ ] Email address jest zweryfikowany w Resend
- [ ] Test email działa lokalnie

---

## 🌐 Deployment na hostido.pl

### Przygotowanie Hostingu
- [ ] Konto hostido.pl jest aktywne
- [ ] Domena jest dodana w panelu
- [ ] DNS jest skonfigurowany i propagowany
- [ ] Node.js 18+ jest dostępny w panelu
- [ ] Dostęp SSH jest skonfigurowany (jeśli dostępny)

### Upload Aplikacji

**Metoda SSH:**
- [ ] Repozytorium Git jest utworzone i zaktualizowane
- [ ] Połączenie SSH działa
- [ ] Kod sklonowany na serwer: `git clone ...`
- [ ] Dependencies zainstalowane: `npm install --production`
- [ ] Aplikacja zbudowana: `npm run build`

**Metoda FTP:**
- [ ] Wszystkie pliki przesłane (oprócz node_modules, .git, .env.local)
- [ ] Folder `.next` z buildem jest przesłany
- [ ] `node_modules` przesłane (lub zainstalowane na serwerze)

### Zmienne Środowiskowe na Serwerze
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID` ustawiony
- [ ] `NEXT_PUBLIC_SANITY_DATASET` ustawiony (production)
- [ ] `NEXT_PUBLIC_SITE_URL` ustawiony (https://adriannarauhut.com)
- [ ] `RESEND_API_KEY` ustawiony (jeśli używasz email)
- [ ] `CONTACT_EMAIL` ustawiony (twój email)
- [ ] `NODE_ENV=production` ustawiony

### Uruchomienie Aplikacji

**PM2 (Zalecane):**
- [ ] PM2 zainstalowany: `npm install -g pm2`
- [ ] Aplikacja uruchomiona: `pm2 start npm --name portfolio-ada -- start`
- [ ] Auto-restart skonfigurowany: `pm2 startup && pm2 save`
- [ ] Status aplikacji OK: `pm2 status`

**Panel hostido.pl:**
- [ ] Node.js application skonfigurowana w panelu
- [ ] Port ustawiony (domyślnie 3000)
- [ ] Aplikacja wystartowana

### Proxy/Domena
- [ ] Proxy skonfigurowane: domena → localhost:3000
- [ ] SSL/HTTPS włączony
- [ ] Force HTTPS włączony
- [ ] Certyfikat SSL aktywny (Let's Encrypt)

---

## ✅ Post-Deployment (Po wdrożeniu)

### Podstawowe Testy
- [ ] Strona otwiera się: https://adriannarauhut.com
- [ ] Homepage ładuje się poprawnie
- [ ] Brak błędów w konsoli przeglądarki (F12)
- [ ] Navigation działa (smooth scroll)
- [ ] Mobile menu działa poprawnie

### Testy Funkcjonalności
- [ ] Projects Gallery ładuje projekty z Sanity
- [ ] Obrazy ładują się poprawnie
- [ ] Modal z projektem otwiera się i zamyka
- [ ] AboutSection wyświetla zdjęcie i treść
- [ ] Footer zawiera poprawne informacje

### Contact Form
- [ ] Formularz się wyświetla
- [ ] Walidacja działa (puste pola są blokowane)
- [ ] Wysłanie formularza działa
- [ ] Email przychodzi na CONTACT_EMAIL (jeśli Resend skonfigurowany)
- [ ] Loading state działa podczas wysyłania
- [ ] Success/error message wyświetla się

### SEO & Metadata
- [ ] Title strony poprawny (w zakładce przeglądarki)
- [ ] Meta description jest obecny
- [ ] OpenGraph tags są obecne (View Source)
- [ ] Favicon się wyświetla
- [ ] robots.txt jest dostępny: /robots.txt
- [ ] sitemap.xml jest dostępny: /sitemap.xml

### Performance & Accessibility
- [ ] Strona ładuje się szybko (< 3s)
- [ ] Obrazy ładują się z blur placeholder
- [ ] Animacje działają płynnie
- [ ] Keyboard navigation działa (Tab)
- [ ] Focus states są widoczne
- [ ] Skip to main content działa (Shift+Tab na początku)

### Responsive Design
- [ ] Desktop (1920px+) - wszystko wygląda dobrze
- [ ] Laptop (1440px) - wszystko wygląda dobrze
- [ ] Tablet (768px) - wszystko wygląda dobrze
- [ ] Mobile (375px) - wszystko wygląda dobrze
- [ ] Mobile menu działa poprawnie

### Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (jeśli masz dostęp)
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

### External Tools Verification
- [ ] Google PageSpeed Insights - wyniki > 90
  - https://pagespeed.web.dev/analysis?url=https://adriannarauhut.com
- [ ] Google Rich Results Test - brak błędów
  - https://search.google.com/test/rich-results
- [ ] SSL Labs Test - Rating A
  - https://www.ssllabs.com/ssltest/analyze.html?d=adriannarauhut.com

---

## 🔧 Monitoring & Maintenance

### Logs & Monitoring
- [ ] PM2 logs są czyste: `pm2 logs portfolio-ada`
- [ ] Brak błędów w logach aplikacji
- [ ] Panel hostido.pl - logi są czyste

### Performance Monitoring
- [ ] Dodaj stronę do Google Search Console
- [ ] Dodaj stronę do Google Analytics (opcjonalnie)
- [ ] Skonfiguruj monitoring uptime (np. UptimeRobot)

### Backups
- [ ] Backup kodu na Git (GitHub/GitLab)
- [ ] Backup danych z Sanity (eksport dataset)
- [ ] Backup .env zmiennych (bezpieczne miejsce)

---

## 🚨 Troubleshooting

Jeśli coś nie działa, sprawdź:

1. **Logi:**
   - `pm2 logs portfolio-ada` (jeśli używasz PM2)
   - Panel hostido.pl → Logs

2. **Zmienne środowiskowe:**
   - Sprawdź czy wszystkie są ustawione
   - `printenv | grep NEXT_PUBLIC` (przez SSH)

3. **Port:**
   - Sprawdź czy aplikacja nasłuchuje na właściwym porcie
   - `netstat -tlnp | grep 3000`

4. **Build:**
   - Usuń `.next` i zbuduj ponownie: `rm -rf .next && npm run build`

5. **Dependencies:**
   - Usuń `node_modules` i zainstaluj ponownie: `rm -rf node_modules && npm install`

---

## 📝 Notatki

### Ważne URL-e:
- Strona produkcyjna: https://adriannarauhut.com
- Sanity Studio: https://adriannarauhut.com/studio (jeśli dostępne)
- Panel hostido.pl: https://panel.hostido.pl
- Sanity Manage: https://www.sanity.io/manage

### Kontakty:
- Hostido.pl support: https://hostido.pl/kontakt
- Sanity support: https://www.sanity.io/help
- Resend support: https://resend.com/support

---

**Status:** 🟢 Ready for Deployment
**Data:** 2025-12-30
**Wersja:** 1.0

---

## ✅ Final Approval

Po ukończeniu wszystkich checklist, strona jest gotowa do użytku produkcyjnego!

- [ ] **Wszystkie testy przeszły pomyślnie**
- [ ] **Klient zatwierdził wdrożenie**
- [ ] **Dokumentacja jest kompletna**

🎉 **Portfolio Adrianny Rauhut jest LIVE!**
