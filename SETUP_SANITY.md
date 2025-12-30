# Konfiguracja Sanity CMS

## Krok 1: Utwórz projekt Sanity

1. Przejdź do https://sanity.io/manage
2. Zaloguj się lub utwórz konto
3. Kliknij "Create project"
4. Wybierz nazwę projektu: **"adrianna-portfolio"** (lub własną)
5. Wybierz dataset: **"production"**
6. Skopiuj **Project ID** - będzie potrzebny w następnym kroku

## Krok 2: Zaktualizuj zmienne środowiskowe

1. Otwórz plik `.env.local` w głównym katalogu projektu
2. Zamień `placeholder` na swój **Project ID**:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=twoj_project_id_tutaj
NEXT_PUBLIC_SANITY_DATASET=production
```

## Krok 3: Uruchom Sanity Studio

```bash
npm run dev
```

Następnie otwórz w przeglądarce: **http://localhost:3000/studio**

## Krok 4: Dodaj przykładowe projekty

W Sanity Studio:

1. Kliknij "Project" → "+"
2. Wypełnij pola:
   - **Title**: Nazwa projektu (np. "Wystawa Poetyckie rusałki")
   - **Slug**: auto-wygeneruje się z tytułu
   - **Short Description**: Krótki opis (max 120 znaków)
   - **Thumbnail Image**: Dodaj główne zdjęcie
   - **Categories**: Wybierz kategorie (Fotografia, Grafika, Video, etc.)
   - **Year**: Rok realizacji
   - Pozostałe pola opcjonalnie
3. Kliknij "Publish"

## Krok 5: (Opcjonalnie) Konfiguracja API Token

Jeśli chcesz używać webhooków lub API Sanity:

1. W Sanity Dashboard → API → Tokens
2. Utwórz nowy token z uprawnieniami "Editor"
3. Dodaj do `.env.local`:

```env
SANITY_API_TOKEN=twoj_api_token
```

## Gotowe!

Teraz możesz zarządzać treścią portfolio przez Sanity Studio i budować frontend.

---

**Następny krok**: Implementacja komponentów frontendowych (Faza 3-6 planu)
