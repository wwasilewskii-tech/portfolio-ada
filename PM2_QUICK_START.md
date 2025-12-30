# PM2 Quick Start Guide

## 🚀 Szybki Start z PM2

PM2 to process manager dla Node.js, który automatycznie restartuje aplikację w przypadku crashu i zarządza logami.

### Instalacja PM2

```bash
# Instalacja globalna
npm install -g pm2

# Lub za pomocą npx (bez instalacji globalnej)
npx pm2 [command]
```

### Podstawowe Komendy

```bash
# Uruchomienie aplikacji
pm2 start ecosystem.config.js

# Lub prosto:
pm2 start npm --name "portfolio-ada" -- start

# Status wszystkich aplikacji
pm2 status

# Logi w czasie rzeczywistym
pm2 logs portfolio-ada

# Tylko błędy
pm2 logs portfolio-ada --err

# Tylko output
pm2 logs portfolio-ada --out

# Monitoring (CPU, RAM)
pm2 monit

# Restart aplikacji
pm2 restart portfolio-ada

# Zatrzymanie
pm2 stop portfolio-ada

# Usunięcie z listy PM2
pm2 delete portfolio-ada

# Restart wszystkich
pm2 restart all
```

### Auto-Start po Restarcie Serwera

```bash
# Generuj startup script
pm2 startup

# Zapisz obecną listę aplikacji
pm2 save

# Przywróć zapisane aplikacje
pm2 resurrect
```

### Zarządzanie Logami

```bash
# Zobacz ostatnie logi
pm2 logs --lines 100

# Wyczyść logi
pm2 flush

# Rotacja logów (automatyczne archiwizowanie)
pm2 install pm2-logrotate
```

### Aktualizacja Aplikacji

```bash
# 1. Pull zmian z Git
git pull origin main

# 2. Zainstaluj dependencies (jeśli były zmiany)
npm install

# 3. Zbuduj aplikację
npm run build

# 4. Zrestartuj PM2 z zerowym downtime
pm2 reload portfolio-ada

# Lub restart (z krótkim downtime)
pm2 restart portfolio-ada
```

### Debug & Troubleshooting

```bash
# Szczegółowe info o aplikacji
pm2 show portfolio-ada

# Informacje o środowisku
pm2 env 0

# Lista procesów z PID
pm2 list

# Kill wszystkie procesy PM2
pm2 kill

# Delete wszystkie i zacznij od nowa
pm2 delete all
```

### Użycie z ecosystem.config.js

Nasz projekt ma plik `ecosystem.config.js` z konfiguracją:

```bash
# Start z configiem
pm2 start ecosystem.config.js

# Start w production mode
pm2 start ecosystem.config.js --env production

# Restart z configiem
pm2 restart ecosystem.config.js

# Stop
pm2 stop ecosystem.config.js
```

### Monitoring Web Dashboard (Opcjonalnie)

```bash
# Instalacja PM2 Plus (darmowy monitoring)
pm2 plus

# Lub użyj lokalnego dashboardu
pm2 web
# Otwórz: http://localhost:9615
```

### Najczęstsze Problemy

**Problem: "pm2: command not found"**
```bash
# Zainstaluj globalnie z sudo (Linux)
sudo npm install -g pm2

# Lub dodaj do PATH
export PATH=$PATH:/usr/local/bin
```

**Problem: Aplikacja ciągle się restartuje**
```bash
# Sprawdź logi błędów
pm2 logs portfolio-ada --err

# Zobacz szczegóły
pm2 show portfolio-ada

# Często przyczyną są:
# - Brakujące zmienne środowiskowe
# - Port zajęty przez inny proces
# - Błędy w kodzie (sprawdź build)
```

**Problem: Port zajęty (EADDRINUSE)**
```bash
# Znajdź proces na porcie 3000
lsof -i :3000

# Kill procesu
kill -9 <PID>

# Restart PM2
pm2 restart portfolio-ada
```

### Przydatne Aliasy (opcjonalnie)

Dodaj do `~/.bashrc` lub `~/.zshrc`:

```bash
alias pm2l='pm2 logs portfolio-ada'
alias pm2s='pm2 status'
alias pm2r='pm2 restart portfolio-ada'
alias pm2m='pm2 monit'
```

---

## 📖 Dokumentacja

Pełna dokumentacja PM2: https://pm2.keymetrics.io/docs/usage/quick-start/

---

**Rekomendowana konfiguracja dla portfolio:**
- ✅ Auto-restart włączony
- ✅ Max memory restart: 1GB
- ✅ Logs w `/logs` directory
- ✅ Startup script skonfigurowany
- ✅ PM2 save wykonany
