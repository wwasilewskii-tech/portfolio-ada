# Deployment Guide - hostido.pl

## 📋 Wymagania wstępne

### 1. Wersja Node.js
- **Minimalna wersja:** Node.js 18.x lub nowsza
- **Zalecana wersja:** Node.js 20.x LTS
- Sprawdź w panelu hostido.pl czy masz dostęp do Node.js 18+

### 2. Dostęp SSH (jeśli dostępny)
- Hosting z dostępem SSH znacznie ułatwia deployment
- Jeśli nie masz SSH, możesz użyć FTP + panel hostingowy

### 3. Konfiguracja domenowa
- Domena już dodana i skonfigurowana w panelu hostido.pl
- DNS prawidłowo skierowane na serwer

---

## 🚀 Metoda 1: Deployment przez SSH (ZALECANE)

### Krok 1: Przygotowanie lokalne

```bash
# 1. Upewnij się, że build działa lokalnie
npm run build

# 2. Sprawdź czy wszystko jest git-tracked (opcjonalnie)
git status

# 3. Przygotuj pliki do uploadu
# NIE uploaduj folderów: node_modules, .next/cache, .git
```

### Krok 2: Upload plików na serwer

**Opcja A: Git (jeśli masz repozytorium)**
```bash
# Na serwerze (przez SSH)
cd /sciezka/do/twojego/katalogu
git clone https://github.com/twoje-repo/portfolio-ada.git
cd portfolio-ada
```

**Opcja B: FTP/SFTP**
- Prześlij wszystkie pliki OPRÓCZ:
  - `node_modules/`
  - `.next/cache/`
  - `.git/`
  - `.env.local` (zmienne ustaw w panelu)

### Krok 3: Konfiguracja na serwerze

```bash
# Połącz się przez SSH
ssh user@twoj-serwer.hostido.pl

# Przejdź do katalogu projektu
cd /sciezka/do/portfolio-ada

# Zainstaluj dependencies
npm install --production

# Zbuduj aplikację
npm run build
```

### Krok 4: Ustawienie zmiennych środowiskowych

**W panelu hostido.pl:**
1. Znajdź sekcję "Zmienne środowiskowe" lub "Environment Variables"
2. Dodaj następujące zmienne:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=zq22exja
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://adriannarauhut.com
RESEND_API_KEY=twoj_resend_api_key
CONTACT_EMAIL=adrianna@adriannarauhut.com
NODE_ENV=production
```

**LUB przez SSH (plik .env.production):**
```bash
# Utwórz plik .env.production
nano .env.production

# Wklej zmienne (użyj Ctrl+O aby zapisać, Ctrl+X aby wyjść)
NEXT_PUBLIC_SANITY_PROJECT_ID=zq22exja
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://adriannarauhut.com
RESEND_API_KEY=twoj_resend_api_key
CONTACT_EMAIL=adrianna@adriannarauhut.com
```

### Krok 5: Uruchomienie aplikacji

**Opcja A: PM2 (Process Manager) - ZALECANE**
```bash
# Zainstaluj PM2 globalnie (jeśli nie jest zainstalowany)
npm install -g pm2

# Uruchom aplikację
pm2 start npm --name "portfolio-ada" -- start

# Ustaw auto-restart po restarcie serwera
pm2 startup
pm2 save

# Sprawdź status
pm2 status
pm2 logs portfolio-ada
```

**Opcja B: npm start w tle**
```bash
# Uruchom w tle używając nohup
nohup npm start > output.log 2>&1 &

# Sprawdź czy działa
ps aux | grep node
```

### Krok 6: Konfiguracja proxy/domeny w panelu

W panelu hostido.pl:
1. Przejdź do ustawień domeny
2. Ustaw proxy/redirect:
   - **Źródło:** adriannarauhut.com
   - **Target:** localhost:3000 (lub port na którym działa Next.js)
3. Włącz SSL/HTTPS (jeśli dostępne)

---

## 🔄 Metoda 2: Deployment przez FTP + Panel (bez SSH)

### Krok 1: Przygotowanie lokalne

```bash
# Zbuduj aplikację lokalnie
npm run build

# Zainstaluj dependencies w trybie produkcyjnym
npm install --production
```

### Krok 2: Upload przez FTP

**Prześlij wszystkie pliki łącznie z:**
- `/app`
- `/components`
- `/lib`
- `/public`
- `/.next` (folder z buildem!)
- `/node_modules` (to może zająć dużo czasu, ale jest wymagane)
- `package.json`
- `next.config.ts`
- `sanity.config.ts`
- Wszystkie inne pliki konfiguracyjne

**NIE przesyłaj:**
- `.env.local`
- `.git`

### Krok 3: Konfiguracja w panelu hostido.pl

1. **Ustaw zmienne środowiskowe** (jak w Metodzie 1, Krok 4)
2. **Ustaw Node.js application:**
   - Wersja Node.js: 18.x lub 20.x
   - Entry point: `node_modules/.bin/next start`
   - Lub: `npm start`
   - Port: 3000 (lub inny przypisany przez hosting)

### Krok 4: Uruchomienie

- W panelu hostido.pl kliknij "Start Application"
- Sprawdź logi w panelu czy aplikacja wystartowała poprawnie

---

## ✅ Krok 3: Weryfikacja po deployment

### Sprawdź czy strona działa:

1. **Homepage:**
   - Otwórz https://adriannarauhut.com
   - Sprawdź czy wszystkie sekcje się ładują

2. **Navigation:**
   - Kliknij w menu i sprawdź smooth scroll
   - Sprawdź responsive menu na mobile

3. **Projects Gallery:**
   - Sprawdź czy obrazy z Sanity ładują się poprawnie
   - Kliknij w projekt i sprawdź modal

4. **Contact Form:**
   - Wyślij testową wiadomość
   - Sprawdź czy dostałeś email (jeśli skonfigurowałeś Resend)

5. **SEO & Metadata:**
   - Sprawdź źródło strony (View Source)
   - Zweryfikuj meta tags
   - Test: https://search.google.com/test/rich-results

6. **Performance:**
   - Test PageSpeed: https://pagespeed.web.dev/
   - Core Web Vitals powinny być zielone

---

## 🔧 Troubleshooting

### Problem: "Module not found" errors
**Rozwiązanie:**
```bash
# Usuń node_modules i zainstaluj ponownie
rm -rf node_modules
npm install --production
npm run build
```

### Problem: Błędy z Sanity CMS
**Rozwiązanie:**
1. Sprawdź czy zmienne środowiskowe są ustawione
2. Zweryfikuj CORS w Sanity: https://www.sanity.io/manage
3. Dodaj swoją domenę do CORS:
   ```bash
   npx sanity cors add https://adriannarauhut.com --credentials
   ```

### Problem: SSL/HTTPS nie działa
**Rozwiązanie:**
1. Włącz "Force HTTPS" w panelu hostido.pl
2. Sprawdź certyfikat SSL (powinien być automatyczny Let's Encrypt)
3. Jeśli problemy, skontaktuj się z supportem hostido.pl

### Problem: Contact form nie wysyła maili
**Rozwiązanie:**
1. Sprawdź RESEND_API_KEY w zmiennych środowiskowych
2. Sprawdź logi: `pm2 logs portfolio-ada`
3. W Resend dodaj i zweryfikuj swoją domenę dla "from" address

### Problem: Obrazy nie ładują się
**Rozwiązanie:**
1. Sprawdź czy Sanity CDN jest dostępny
2. W `next.config.ts` sprawdź czy domeny są dodane:
   ```typescript
   images: {
     domains: ['cdn.sanity.io'],
   }
   ```

### Problem: "Port already in use"
**Rozwiązanie:**
```bash
# Znajdź proces na porcie 3000
lsof -i :3000

# Zabij proces
kill -9 <PID>

# Lub użyj PM2
pm2 delete portfolio-ada
pm2 start npm --name "portfolio-ada" -- start
```

---

## 🔄 Aktualizacje w przyszłości

### Jak zaktualizować aplikację:

**Metoda 1: Git + SSH**
```bash
# Połącz się przez SSH
ssh user@serwer.hostido.pl
cd portfolio-ada

# Pobierz zmiany
git pull origin main

# Zainstaluj nowe dependencies (jeśli były zmiany)
npm install

# Przebuduj aplikację
npm run build

# Zrestartuj aplikację
pm2 restart portfolio-ada
```

**Metoda 2: FTP**
1. Zbuduj lokalnie: `npm run build`
2. Prześlij zmienione pliki przez FTP
3. Zrestartuj aplikację w panelu hostido.pl

---

## 📊 Monitoring

### PM2 Monitoring (jeśli używasz PM2)
```bash
# Status aplikacji
pm2 status

# Logi w czasie rzeczywistym
pm2 logs portfolio-ada

# Metryki
pm2 monit

# Restart po crash (automatyczne)
pm2 resurrect
```

### Logi w panelu hostido.pl
- Sprawdzaj regularnie logi w panelu
- Szukaj błędów i warnigns

---

## 🔐 Bezpieczeństwo

### Checklist bezpieczeństwa:
- ✅ HTTPS włączone
- ✅ Zmienne środowiskowe bezpiecznie przechowywane (nie w kodzie)
- ✅ `.env.local` nigdy nie uploadowane na serwer
- ✅ `.env.production` ma odpowiednie uprawnienia (chmod 600)
- ✅ Dependencies aktualne (npm audit)
- ✅ Sanity CORS skonfigurowany tylko dla twojej domeny

---

## 📞 Support

### Kontakt z hostido.pl:
- Support: https://hostido.pl/kontakt
- Panel: https://panel.hostido.pl

### Przydatne linki:
- Next.js Docs: https://nextjs.org/docs/deployment
- Sanity Docs: https://www.sanity.io/docs
- PM2 Docs: https://pm2.keymetrics.io/docs

---

**Data utworzenia:** 2025-12-30
**Wersja aplikacji:** 1.0
**Next.js:** 15.x
**Node.js:** 18.x+
