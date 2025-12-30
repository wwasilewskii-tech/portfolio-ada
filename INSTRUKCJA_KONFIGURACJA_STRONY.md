# Instrukcja konfiguracji sekcji "O mnie" i ustawień strony

## 1. Konfiguracja sekcji "O mnie" (About Page)

### Jak dodać treść do sekcji O mnie:

1. Otwórz Sanity Studio: **http://localhost:3000/studio**
2. W lewym menu kliknij **"About Page"**
3. Jeśli nie ma jeszcze dokumentu, kliknij **"Create new About Page"**

### Pola do wypełnienia:

**Hero Title** (Tytuł sekcji)
- Przykład: `O mnie` lub `Kim jestem?`
- Opcjonalne - jeśli puste, użyty będzie domyślny

**Biography** (Biografia)
- Tutaj możesz napisać dłuższy tekst o sobie
- Obsługuje formatowanie (pogrubienie, listy, nagłówki)
- Przykładowa treść:

```
**Adrianna Rauhut** – szczecinianka, fotografka, graficzka, operatorka kamery.

Tworzę w obszarach fotografii, grafiki i wideo. Współpracuję ze Związkiem
Literatów Polskich oraz Uniwizją (Telewizja Uniwersytetu Szczecińskiego).

Moje prace były prezentowane na wystawach w Szczecinie. Zdobyłam II miejsce
w konkursie plastycznym podczas Ogólnopolskiego Festiwalu Wokalno-Plastycznego
"Młodych Bajanie przez Śpiew i Malowanie" (2010).
```

**Skills** (Umiejętności)
- Kliknij "Add item" aby dodać grupę umiejętności
- Każda grupa ma:
  - **Category** (Kategoria) - np. "Fotografia", "Grafika", "Video"
  - **Items** (Elementy) - lista konkretnych umiejętności

Przykład:
```
Category: Fotografia
Items:
  - Fotografia portretowa
  - Reportaż społeczny
  - Fotografia artystyczna
  - Fotografia wystaw

Category: Grafika
Items:
  - Ilustracje do poezji
  - Design okładek książek
  - Branding
  - Identyfikacja wizualna

Category: Video
Items:
  - Operatorka kamery
  - Animacja filmowa
  - Montaż video
```

**Career Timeline** (Ścieżka kariery)
- Dodaj kluczowe momenty swojej kariery
- Każdy element ma:
  - **Year** (Rok) - np. "2010", "2015-2018"
  - **Title** (Tytuł) - np. "Grafik w Związku Literatów Polskich"
  - **Description** (Opis) - szczegóły

Przykład:
```
Year: 2024
Title: Projekt okładki audiobooka
Description: Okładka audiobooka "Zapiski z umierania" Marii Pawlikowskiej-Jasnorzewskiej

Year: 2018
Title: Warsztaty filmowe
Description: Udział w warsztatach "Z klatki schodowej do klatki filmowej"

Year: 2015
Title: Współpraca z ZLP
Description: Rozpoczęcie współpracy jako grafik ze Związkiem Literatów Polskich
Oddział w Szczecinie
```

**Exhibitions** (Wystawy)
- Lista Twoich wystaw
- Każda wystawa ma:
  - **Year** (Rok)
  - **Title** (Tytuł wystawy)
  - **Location** (Miejsce)
  - **Description** (Opis)

Przykład:
```
Year: 2016
Title: Poetyckie rusałki
Location: Klub Hormon, Szczecin
Description: Wystawa łącząca fotografię z poezją

Year: 2015
Title: Od miłości do nienawiści – jeden krok
Location: Szczecin Meeting Point
Description: Wystawa fotograficzna eksplorująca emocje międzyludzkie
```

**Awards** (Nagrody)
- Twoje osiągnięcia i nagrody
- Każda nagroda ma:
  - **Year** (Rok)
  - **Title** (Nazwa nagrody)
  - **Description** (Opis)

Przykład:
```
Year: 2010
Title: II miejsce w konkursie plastycznym
Description: Ogólnopolski Festiwal Wokalno-Plastyczny "Młodych Bajanie
przez Śpiew i Malowanie"
```

**Po wypełnieniu kliknij "Publish"**

---

## 2. Ustawienia strony (Site Settings)

### Jak skonfigurować dane kontaktowe i social media:

1. W Sanity Studio kliknij **"Site Settings"**
2. Jeśli nie ma dokumentu, kliknij **"Create new Site Settings"**

### Pola do wypełnienia:

**Email**
- Twój adres email do kontaktu
- Przykład: `adrianna.rauhut@gmail.com`
- Pojawi się w sekcji kontakt i w formularzu

**LinkedIn URL**
- Link do Twojego profilu LinkedIn
- Przykład: `https://www.linkedin.com/in/adrianna-rauhut`
- Zostaw puste jeśli nie masz

**Behance URL**
- Link do Twojego profilu Behance
- Przykład: `https://www.behance.net/adriannarauhut`
- Zostaw puste jeśli nie masz

**Instagram URL**
- Link do Twojego profilu Instagram
- Przykład: `https://www.instagram.com/adrianna.rauhut`
- Zostaw puste jeśli nie masz

**Other Social Media** (Inne media społecznościowe)
- Kliknij "Add item" aby dodać inne platformy
- Każda platforma ma:
  - **Platform** (Nazwa) - np. "Facebook", "TikTok", "Vimeo"
  - **URL** (Link) - pełny adres URL

Przykład:
```
Platform: Vimeo
URL: https://vimeo.com/adriannarauhut

Platform: Facebook
URL: https://www.facebook.com/adrianna.rauhut
```

**Po wypełnieniu kliknij "Publish"**

---

## 3. Jak zmiany wpływają na stronę

### Sekcja "O mnie":
- Pojawia się jako trzecia sekcja na stronie głównej
- Wyświetla Twoją biografię, umiejętności i zdjęcie
- Automatycznie formatuje treść

### Site Settings:
- Email i linki social media pojawiają się w:
  - Sekcji kontakt (na dole strony)
  - Stopce strony
  - Ikony social media są klilkalne

### Sprawdzanie zmian:
1. Po zapisaniu w Sanity Studio
2. Przejdź do **http://localhost:3000**
3. Przewiń do sekcji "O mnie" lub "Kontakt"
4. Zmiany pojawiają się automatycznie (może zająć kilka sekund)

---

## 4. Porady dotyczące treści

### Biografia:
- **Długość:** 2-4 akapity
- **Ton:** Profesjonalny ale przyjazny
- **Zawartość:**
  - Kim jesteś
  - Czym się zajmujesz
  - Kluczowe osiągnięcia
  - Aktualne projekty/współprace

### Umiejętności:
- Ogranicz do 3-4 kategorii
- W każdej kategorii 3-5 umiejętności
- Używaj konkretnych nazw (zamiast "fotografia" → "fotografia portretowa")

### Timeline:
- Dodaj 4-8 kluczowych momentów
- Od najnowszych do najstarszych
- Konkretne, mierzalne osiągnięcia

---

## 5. Opcjonalne: Zmiana zdjęcia w sekcji "O mnie"

Obecnie sekcja "O mnie" używa logo jako zdjęcia profilowego. Aby dodać własne zdjęcie:

1. Przygotuj zdjęcie:
   - **Format:** JPG lub PNG
   - **Proporcje:** 3:4 (pionowe)
   - **Rozmiar:** min. 900x1200px
   - **Zawartość:** Profesjonalne zdjęcie portretowe

2. Umieść zdjęcie w folderze projektu:
   - Skopiuj zdjęcie do: `public/profile.jpg`

3. Poinformuj programistę, aby zaktualizował komponent AboutSection

---

## 6. Testowanie formularza kontaktowego

### Wysyłanie testowej wiadomości:

1. Przejdź do sekcji "Kontakt" na stronie
2. Wypełnij formularz:
   - Imię: Twoje imię
   - Email: Twój email
   - Wiadomość: Testowa wiadomość
3. Kliknij "Wyślij wiadomość"

### Uwaga:
- Formularz działa, ale email **nie będzie wysyłany** dopóki nie skonfigurujemy Resend API
- Po konfiguracji Resend, wiadomości będą przychodzić na adres z Site Settings

---

## 7. Najczęstsze pytania

**Q: Czy mogę dodać wiele dokumentów About Page?**
A: Nie, powinien być tylko jeden. System automatycznie użyje pierwszego znalezionego.

**Q: Jak długo zajmuje pojawienie się zmian na stronie?**
A: Zmiany pojawiają się natychmiast lub maksymalnie w ciągu 1 godziny (ISR cache).

**Q: Czy mogę formatować tekst w biografii?**
A: Tak! Możesz używać pogrubienia, kursywy, list i nagłówków.

**Q: Co się stanie jeśli nie wypełnię wszystkich pól?**
A: Nic - wszystkie pola są opcjonalne. Strona pokaże tylko wypełnione informacje.

---

**Gotowe!** Twoja strona "O mnie" i dane kontaktowe są skonfigurowane. 🎉
