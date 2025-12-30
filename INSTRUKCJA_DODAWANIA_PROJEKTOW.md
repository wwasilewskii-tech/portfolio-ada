# Instrukcja dodawania projektów do portfolio

## 1. Wejście do panelu administracyjnego

1. Uruchom serwer projektu (jeśli nie jest uruchomiony):
   ```
   npm run dev
   ```

2. Otwórz w przeglądarce: **http://localhost:3000/studio**

3. Zaloguj się swoim kontem Sanity (jeśli to pierwszy raz)

---

## 2. Dodawanie nowego projektu

### Krok 1: Utwórz nowy projekt
1. W lewym menu kliknij **"Project"**
2. Kliknij przycisk **"+"** (plus) w prawym górnym rogu
3. Otworzy się formularz nowego projektu

### Krok 2: Wypełnij podstawowe informacje

**WYMAGANE POLA:**

- **Title** (Tytuł projektu)
  - Przykład: `Wystawa "Poetyckie rusałki"`
  - To główna nazwa projektu, która pojawi się na stronie

- **Slug** (Adres URL)
  - Kliknij "Generate" - utworzy się automatycznie z tytułu
  - Przykład: `poetyckie-rusalki`

- **Thumbnail Image** (Miniatura projektu)
  - Kliknij "Upload" i wybierz główne zdjęcie projektu
  - To zdjęcie pojawi się na kafelku w galerii
  - **Format:** najlepiej JPG lub PNG
  - **Rozmiar:** min. 1200x900px dla dobrej jakości

**ZALECANE POLA:**

- **Short Description** (Krótki opis)
  - Maksymalnie 120 znaków
  - Przykład: `Wystawa fotograficzno-poetycka prezentowana w Klubie Hormon, Szczecin (2016)`
  - Pojawi się na kafelku projektu

- **Categories** (Kategorie)
  - Wybierz jedną lub więcej kategorii:
    - ✓ Fotografia
    - ✓ Grafika
    - ✓ Projekty Video
    - ✓ Ilustracje Literackie
    - ✓ Design Okładek
    - ✓ Wystawy
  - Służą do filtrowania projektów na stronie

- **Year** (Rok)
  - Rok realizacji projektu
  - Przykład: `2016`

**OPCJONALNE POLA:**

- **Cover Image** (Zdjęcie główne)
  - Duże zdjęcie, które pojawi się po kliknięciu w projekt
  - Może być inne niż miniatura

- **Gallery Images** (Galeria zdjęć)
  - Kliknij "Add item" aby dodać więcej zdjęć z projektu
  - Możesz dodać dowolną ilość

- **Medium** (Wykorzystane narzędzia/sprzęt)
  - Kliknij "Add item" aby dodać pozycję
  - Przykłady:
    - `Canon 5D Mark IV`
    - `Adobe Photoshop`
    - `DaVinci Resolve`
    - `Ilustracja ręczna`

- **Client** (Klient)
  - Przykład: `Związek Literatów Polskich`

- **Role** (Twoja rola)
  - Przykład: `Fotografka` lub `Graficzka` lub `Operatorka kamery`

- **Location** (Lokalizacja)
  - Przykład: `Galeria Kapitańska, Szczecin`

- **Exhibition** (Nazwa wystawy)
  - Przykład: `Port malarski. Moja Łasztownia`

- **Collaboration** (Współpraca)
  - Przykład: `ZLP Oddział Szczecin`

- **Case Study** (Szczegółowy opis projektu)
  - Tutaj możesz dodać dłuższy opis, proces twórczy, inspiracje
  - Obsługuje formatowanie (pogrubienie, nagłówki, listy)
  - Możesz dodać dodatkowe zdjęcia

- **Awards** (Nagrody)
  - Kliknij "Add item" aby dodać nagrodę
  - Przykład: `II miejsce - Konkurs plastyczny "Młodych Bajanie przez Śpiew i Malowanie" (2010)`

- **Press Links** (Linki do prasy)
  - Dodaj linki do artykułów, recenzji
  - Każdy link ma pole "Title" i "URL"

- **External Link** (Link zewnętrzny)
  - Link do projektu (jeśli istnieje online)

- **Featured** (Wyróżniony)
  - Zaznacz jeśli projekt ma być wyróżniony na stronie

- **Order** (Kolejność)
  - Liczba określająca kolejność wyświetlania (niższe liczby = wyżej)
  - Przykład: `1`, `2`, `3`...

### Krok 3: Zapisz projekt
1. Kliknij przycisk **"Publish"** w prawym górnym rogu
2. Projekt pojawi się natychmiast na stronie głównej!

---

## 3. Przykładowe projekty do dodania

### Projekt 1: Wystawa "Poetyckie rusałki"
```
Title: Wystawa "Poetyckie rusałki"
Short Description: Wystawa fotograficzno-poetycka w Klubie Hormon
Categories: Fotografia, Wystawy
Year: 2016
Location: Klub Hormon, Szczecin
Exhibition: Poetyckie rusałki
```

### Projekt 2: Ilustracje "Roztańczony atrament"
```
Title: Ilustracje do tomiku "Roztańczony atrament"
Short Description: Ilustracje do tomiku poezji Edyty Rauhut
Categories: Ilustracje Literackie, Grafika
Year: [rok wydania]
Client: Edyta Rauhut
Role: Ilustratorka
Collaboration: Związek Literatów Polskich
```

### Projekt 3: Okładka audiobooka
```
Title: Okładka audiobooka "Zapiski z umierania"
Short Description: Projekt okładki audiobooka Marii Pawlikowskiej-Jasnorzewskiej
Categories: Design Okładek, Grafika
Year: 2024
Client: Maria Pawlikowska-Jasnorzewska
Role: Graficzka
```

### Projekt 4: Wystawa "Od miłości do nienawiści"
```
Title: Wystawa "Od miłości do nienawiści – jeden krok"
Short Description: Wystawa fotograficzna w Szczecin Meeting Point
Categories: Fotografia, Wystawy
Year: 2015
Location: Szczecin Meeting Point, Szczecin
Exhibition: Od miłości do nienawiści – jeden krok
```

### Projekt 5: Port malarski
```
Title: Port malarski. Moja Łasztownia
Short Description: Wystawa poplenerowa w Galerii Kapitańskiej
Categories: Fotografia, Wystawy
Year: [rok]
Location: Galeria Kapitańska, Szczecin
Exhibition: Port malarski. Moja Łasztownia
```

---

## 4. Edycja istniejącego projektu

1. W panelu Sanity Studio kliknij **"Project"** w menu
2. Znajdź projekt na liście i kliknij w niego
3. Edytuj pola
4. Kliknij **"Publish"** aby zapisać zmiany

---

## 5. Usuwanie projektu

1. Otwórz projekt do edycji
2. Kliknij trzy kropki (**...**) w prawym górnym rogu
3. Wybierz **"Delete"**
4. Potwierdź usunięcie

---

## 6. Wskazówki dotyczące zdjęć

### Jakość zdjęć:
- **Minimalna rozdzielczość:** 1200x900px
- **Format:** JPG (zdjęcia), PNG (grafiki z przezroczystością)
- **Rozmiar pliku:** staraj się nie przekraczać 2MB na zdjęcie
- **Proporcje:** 4:3 lub 3:2 dla najlepszego efektu

### Optymalizacja:
- Zdjęcia powyżej 2MB warto skompresować (np. przez TinyPNG.com)
- Strona automatycznie dostosuje rozmiary

---

## 7. Sprawdzanie efektów na stronie

Po dodaniu/edycji projektu:
1. Otwórz **http://localhost:3000** w nowej karcie
2. Projekt pojawi się automatycznie w sekcji "Moje Projekty"
3. Możesz filtrować projekty po kategoriach
4. Kliknij w projekt aby zobaczyć szczegóły (w przyszłości)

---

## 8. Pomoc i wsparcie

### Problemy?
- Sprawdź czy serwer jest uruchomiony (`npm run dev`)
- Odśwież stronę w przeglądarce
- Wyczyść cache przeglądarki (Ctrl+Shift+R)

### Pytania?
- Skontaktuj się z osobą, która przekazała Ci tę instrukcję
- Dokumentacja Sanity: https://www.sanity.io/docs

---

**Powodzenia! 🎨📸🎬**

Twoje portfolio jest gotowe do wypełnienia treścią. Dodawaj swoje najlepsze prace i ciesz się profesjonalną stroną internetową!
