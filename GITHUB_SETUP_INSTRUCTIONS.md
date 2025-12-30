# 🚀 Instrukcje Połączenia z GitHub

## ✅ Co już jest zrobione:

- ✅ Git skonfigurowany (username: wwasilewskii-tech, email: wwasilewskii@gmail.com)
- ✅ Repozytorium Git zainicjalizowane
- ✅ Wszystkie pliki dodane do staging
- ✅ Initial commit utworzony (73 pliki, 28,528 linii kodu)

## 📋 Co musisz zrobić teraz:

### Krok 1: Utwórz nowe repozytorium na GitHub

1. **Przejdź do:** https://github.com/new
2. **Wypełnij formularz:**
   - **Repository name:** `portfolio-ada` (lub inna nazwa)
   - **Description:** "Portfolio Adrianny Rauhut - Next.js 15 + Sanity CMS"
   - **Visibility:** Public lub Private (Twój wybór)
   - ⚠️ **NIE zaznaczaj:**
     - "Add a README file" ❌
     - "Add .gitignore" ❌
     - "Choose a license" ❌

   (Mamy już te pliki lokalnie!)

3. **Kliknij:** "Create repository"

### Krok 2: Skopiuj URL repozytorium

Po utworzeniu repo, GitHub pokaże Ci stronę z instrukcjami. Skopiuj URL repozytorium:

**HTTPS (łatwiejsze - zalecane dla początkujących):**
```
https://github.com/wwasilewskii-tech/portfolio-ada.git
```

**SSH (jeśli masz skonfigurowany klucz SSH):**
```
git@github.com:wwasilewskii-tech/portfolio-ada.git
```

### Krok 3: Podłącz lokalne repo do GitHub

#### Opcja A: HTTPS (Zalecane)

Otwórz terminal w katalogu projektu i wykonaj:

```bash
# Zmień główną gałąź na 'main' (jeśli jest 'master')
git branch -M main

# Dodaj remote
git remote add origin https://github.com/wwasilewskii-tech/portfolio-ada.git

# Push do GitHub
git push -u origin main
```

**Podczas push będziesz musiał się zalogować:**
- **Username:** wwasilewskii-tech
- **Password:** Nie używaj hasła! Użyj **Personal Access Token** (PAT)

#### Opcja B: SSH (jeśli masz klucz SSH)

```bash
# Zmień główną gałąź na 'main'
git branch -M main

# Dodaj remote
git remote add origin git@github.com:wwasilewskii-tech/portfolio-ada.git

# Push do GitHub
git push -u origin main
```

---

## 🔑 Jak uzyskać Personal Access Token (PAT)

Jeśli używasz HTTPS, będziesz potrzebować PAT zamiast hasła:

1. **Przejdź do:** https://github.com/settings/tokens
2. **Kliknij:** "Generate new token" → "Generate new token (classic)"
3. **Wypełnij:**
   - **Note:** "Portfolio Ada - CLI access"
   - **Expiration:** 90 days (lub dłużej)
   - **Select scopes:** Zaznacz:
     - ✅ `repo` (pełny dostęp do prywatnych repozytoriów)
4. **Kliknij:** "Generate token"
5. **WAŻNE:** Skopiuj token natychmiast (nie będziesz mógł go zobaczyć ponownie!)

**Zapisz token w bezpiecznym miejscu!**

Podczas `git push` użyj tego tokenu jako hasła:
- Username: `wwasilewskii-tech`
- Password: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx` (Twój token)

---

## 🔄 Alternatywnie: Użyj Claude do wykonania tych kroków

Jeśli chcesz, mogę wykonać te komendy za Ciebie! Po utworzeniu repo na GitHub, po prostu:

1. Utwórz repo na GitHub (Krok 1)
2. Skopiuj URL repozytorium
3. Powiedz mi: "Połącz z GitHub używając [URL]"
4. Ja wykonam komendy `git remote add` i `git push`

**Przykład:**
```
Ty: "Połącz z GitHub używając https://github.com/wwasilewskii-tech/portfolio-ada.git"
Ja: [wykonam komendy git remote i git push]
```

⚠️ **Uwaga:** Przy pierwszym push będziesz musiał podać swoje credentials (username + PAT lub SSH)

---

## ✅ Weryfikacja po Push

Po pomyślnym push, sprawdź:

1. **Na GitHub:** https://github.com/wwasilewskii-tech/portfolio-ada
   - Powinny być widoczne wszystkie pliki
   - 73 pliki, initial commit

2. **Lokalnie:**
   ```bash
   git status
   # Powinno pokazać: "Your branch is up to date with 'origin/main'"
   ```

3. **Zdalne branche:**
   ```bash
   git remote -v
   # Powinno pokazać origin z URL do GitHub
   ```

---

## 🎯 Co dalej po push do GitHub?

1. ✅ **Repozytorium dostępne publicznie** (lub prywatnie, zależnie od ustawień)
2. ✅ **Gotowe do deployment** - możesz teraz wdrożyć na hostido.pl
3. ✅ **Łatwe aktualizacje** - w przyszłości:
   ```bash
   git add .
   git commit -m "Opis zmian"
   git push
   ```

---

## 🔧 Przydatne Komendy Git

```bash
# Sprawdź status
git status

# Zobacz ostatnie commity
git log --oneline -10

# Zobacz remote
git remote -v

# Pobierz zmiany z GitHub
git pull

# Push zmian do GitHub
git push

# Sprawdź różnice
git diff

# Zobacz wszystkie branche
git branch -a
```

---

## 🚨 Troubleshooting

### Problem: "remote origin already exists"
```bash
git remote remove origin
git remote add origin [URL]
```

### Problem: "failed to push some refs"
```bash
# Pobierz zmiany z GitHub najpierw
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Problem: "Authentication failed"
- Sprawdź czy używasz Personal Access Token zamiast hasła
- Token musi mieć scope `repo`
- Username musi być poprawny: `wwasilewskii-tech`

### Problem: "Permission denied (publickey)" (SSH)
- Musisz dodać klucz SSH do GitHub: https://github.com/settings/keys
- Lub użyj HTTPS zamiast SSH

---

## 📖 Dokumentacja

- **GitHub Docs:** https://docs.github.com/en/get-started
- **Git Basics:** https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
- **Personal Access Tokens:** https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

---

**Gotowy do push? Utwórz repo na GitHub i daj mi znać!** 🚀

Mogę pomóc z wykonaniem komend lub rozwiązywaniem problemów.
