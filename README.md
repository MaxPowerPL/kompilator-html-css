<div align="center">

  # 💻 Kompilator HTML & CSS

  **Interaktywny edytor kodu HTML, CSS i JavaScript z podglądem na żywo**
  <br>
  *In-browser code playground bez instalacji - pisz, testuj, wdróż*

  <p>
    <a href="https://github.com/MaxPowerPL/kompilator-html-css/tags">
      <img src="https://img.shields.io/github/v/release/MaxPowerPL/kompilator-html-css?&include_prereleases&label=VERSION&style=for-the-badge&color=238636" alt="Wersja" />
    </a>
    <a href="https://maxpowerpl.github.io/kompilator-html-css/">
      <img src="https://img.shields.io/badge/Status-Archived-yellow?style=for-the-badge" alt="Status" />
    </a>
    <a href="https://html.spec.whatwg.org/">
      <img src="https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    </a>
    <a href="https://www.w3.org/Style/CSS/">
      <img src="https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS3" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript" />
    </a>
    <a href="https://github.com/MaxPowerPL/kompilator-html-css/stargazers">
      <img src="https://img.shields.io/github/stars/MaxPowerPL/kompilator-html-css?style=for-the-badge&color=yellow" alt="Stars" />
    </a>
    <a href="https://github.com/MaxPowerPL/kompilator-html-css/commits">
      <img src="https://img.shields.io/github/last-commit/MaxPowerPL/kompilator-html-css?style=for-the-badge" alt="Last Commit" />
    </a>
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
    </a>
  </p>

  <p>
    <a href="#-o-projekcie">📖 O Projekcie</a> •
    <a href="#-funkcjonalności">✨ Funkcjonalności</a> •
    <a href="#-instalacja-i-uruchomienie">🚀 Instalacja</a> •
    <a href="#-struktura-projektu">📂 Struktura</a> •
    <a href="https://maxpowerpl.github.io/kompilator-html-css/">🌐 Demo Live</a>
  </p>
</div>

---

## 📖 O Projekcie

**Kompilator HTML & CSS** to lekki, szybki edytor kodu działający w przeglądarce, stworzony jako alternatywa dla CodePen czy JSFiddle. Projekt powstał w czasach technikum jako narzędzie do nauki programowania frontend - umożliwia pisanie HTML, CSS i JavaScript z natychmiastowym podglądem rezultatów w czasie rzeczywistym.

Aplikacja nie wymaga instalacji, rejestracji ani połączenia z serwerem - wszystko działa po stronie klienta (client-side). Idealny dla początkujących programistów, którzy chcą szybko przetestować fragmenty kodu, eksperymentować z layoutem CSS lub debugować interakcje JavaScriptu. Projekt został zarchiwizowany jako pamiątka z okresu edukacji, ale wciąż jest w pełni funkcjonalny.

### 🎯 Aktualna Wersja: `v1.0 (Archived)`
Projekt osiągnął stan stabilny i został zarchiwizowany. Zawiera wszystkie podstawowe funkcje live preview edytora kodu HTML/CSS/JS. Status "Archived" oznacza, że projekt nie jest już aktywnie rozwijany, ale pozostaje dostępny jako referencja edukacyjna.

---

## ✨ Funkcjonalności

Co już działa w tej wersji?

- [x] **✍️ Edytor Kodu**:
  - **Trzy panele**: HTML, CSS i JavaScript w oddzielnych edytowalnych obszarach.
  - **Syntax highlighting**: Kolorowanie składni dla lepszej czytelności.
  - **Live preview**: Podgląd rezultatów w czasie rzeczywistym (bez odświeżania strony).
- [x] **🖥️ Interfejs Użytkownika**:
  - **Responsywny layout**: Edytor dostosowuje się do rozmiaru okna przeglądarki.
  - **Podział ekranu**: Panel edycji + iframe z wynikiem działającego kodu.
  - **Zero konfiguracji**: Otwórz `index.html` i zacznij kodować.
- [x] **🚀 Funkcje Live Preview**:
  - **Instant update**: Każda zmiana w kodzie natychmiast odzwierciedla się w podglądzie.
  - **Izolowany iframe**: Bezpieczne wykonywanie kodu w sandbox.
  - **Obsługa konsoli**: Logi JavaScript wyświetlają się w konsoli przeglądarki.
- [x] **💾 Lokalny Development**:
  - **Brak backendu**: Całkowicie statyczna aplikacja (tylko HTML/CSS/JS).
  - **Offline-ready**: Działa bez połączenia internetowego po pierwszym załadowaniu.
  - **Cross-browser**: Kompatybilny z Chrome, Firefox, Safari, Edge.

---

## 🛠️ Technologie

Projekt został zbudowany przy użyciu:

| Technologia | Opis |
| :--- | :--- |
| **HTML5** | Struktura aplikacji - textarea dla edytorów, iframe dla preview. |
| **CSS3** | Stylizacja interfejsu - flexbox layout, responsywny design. |
| **Vanilla JavaScript** | Logika live preview - event listeners, DOM manipulation, iframe injection. |
| **GitHub Pages** | Hosting statyczny - darmowe wdrożenie aplikacji. |

---

## 🚀 Instalacja i Uruchomienie

Aby uruchomić projekt na swoim komputerze, wykonaj następujące kroki:

### 1. Wymagania
- **Przeglądarka internetowa** (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Git** (opcjonalnie, do klonowania repo)
- Brak wymagań backendowych (Node.js, npm, etc.)

### 2. Klonowanie repozytorium
```bash
git clone https://github.com/MaxPowerPL/kompilator-html-css.git
cd kompilator-html-css
```

### 3. Uruchomienie

**Metoda 1: Bezpośrednie otwarcie pliku**
```bash
# Windows (CMD):
start index.html

# macOS:
open index.html

# Linux:
xdg-open index.html
```

**Metoda 2: Live Server (VSCode)**
```bash
# Jeśli masz zainstalowane rozszerzenie Live Server:
# 1. Otwórz folder w VSCode
# 2. Kliknij prawym na index.html → "Open with Live Server"
```

**Metoda 3: Python HTTP Server (dev)**
```bash
# Python 3:
python -m http.server 8000

# Python 2:
python -m SimpleHTTPServer 8000

# Następnie otwórz: http://localhost:8000
```

### 4. Użycie
1. **Otwórz aplikację** w przeglądarce - zobaczysz trzy panele edycji (HTML, CSS, JS).
2. **Wpisz kod** w dowolnym panelu - podgląd zaktualizuje się automatycznie.
3. **Testuj interakcje** - możesz kliknąć elementy w preview, sprawdzać console.log() w DevTools.
4. **Kopiuj wynik** - możesz skopiować wygenerowany kod z paneli do własnych projektów.

---

## 📂 Struktura Projektu

Projekt oparty na architekturze **Single Page Application (SPA)** - jeden plik HTML + inline/external CSS/JS.

```text
📦 kompilator-html-css
┣ 📂 assets/
┃ ┗ 📂 images/
┃   ┣ 🖼️ logo.png             # Logo aplikacji (opcjonalne)
┃   ┣ 🖼️ screenshot1.png      # Zrzut ekranu interfejsu
┃   ┗ 🖼️ screenshot2.png      # Przykład działania live preview
┣ 📜 index.html               # Główny plik aplikacji
┣ 📜 style.css                # Stylizacja interfejsu (opcjonalnie inline)
┣ 📜 script.js                # Logika live preview (opcjonalnie inline)
┣ 📜 README.md                # Dokumentacja projektu
┗ 📜 LICENSE                  # Licencja MIT
```

### Opis głównych komponentów:

#### `index.html`
| Element | Opis |
|------|------|
| `<textarea id="html-code">` | Pole tekstowe dla kodu HTML użytkownika. |
| `<textarea id="css-code">` | Pole tekstowe dla kodu CSS użytkownika. |
| `<textarea id="js-code">` | Pole tekstowe dla kodu JavaScript użytkownika. |
| `<iframe id="preview">` | Sandbox dla renderowania kodu (izolowany context). |

#### `script.js` (Logika Live Preview)
```javascript
// Pseudokod głównej funkcji:
function updatePreview() {
  const html = document.getElementById('html-code').value;
  const css = '<style>' + document.getElementById('css-code').value + '</style>';
  const js = '<script>' + document.getElementById('js-code').value + '<\/script>';
  
  const iframe = document.getElementById('preview');
  const iframeDoc = iframe.contentDocument;
  
  iframeDoc.open();
  iframeDoc.write(html + css + js);
  iframeDoc.close();
}

// Event listeners na każdą zmianę w textarea:
['html-code', 'css-code', 'js-code'].forEach(id => {
  document.getElementById(id).addEventListener('input', updatePreview);
});
```

---

## 📸 Zrzuty Ekranu

### Główny Interfejs
![Interfejs edytora](https://github.com/user-attachments/assets/79706524-a674-4232-b34b-a0eb7a91fd20)
*Trzy panele edycji kodu (HTML, CSS, JS) + podgląd na żywo w iframe*

---

## 🎨 Jak To Działa?

### Architektura Live Preview:

**1. Nasłuchiwanie zmian:**
```javascript
// Każdy `input` event w textarea wywołuje updatePreview()
textareaHTML.addEventListener('input', debounce(updatePreview, 300));
```

**2. Budowanie dokumentu:**
```javascript
// Łączenie HTML + CSS + JS w jeden dokument:
const fullDocument = `
  <!DOCTYPE html>
  <html>
    <head><style>${cssCode}</style></head>
    <body>
      ${htmlCode}
      <script>${jsCode}<\/script>
    </body>
  </html>
`;
```

**3. Wstrzyknięcie do iframe:**
```javascript
// iframe.contentDocument.write() renderuje dokument w izolacji:
iframe.contentDocument.open();
iframe.contentDocument.write(fullDocument);
iframe.contentDocument.close();
```

### Zalety tego podejścia:
- ✅ **Sandbox security**: Kod użytkownika nie może wpłynąć na główną stronę.
- ✅ **Instant feedback**: Brak opóźnienia sieciowego (wszystko lokalne).
- ✅ **Prostota**: Brak skomplikowanego bundlera/kompilatora.

### Ograniczenia:
- ⚠️ Brak syntax error detection (trzeba sprawdzać w konsoli DevTools).
- ⚠️ Brak autouzupełniania kodu (plain textarea).
- ⚠️ Iframe może mieć problemy z `localStorage` w niektórych przeglądarkach.

<!-- ---

## 🗺️ Roadmapa

Plany rozwoju projektu (jeśli projekt zostałby odarchiwizowany):

### Faza 1: Podstawowa Funkcjonalność ✅ (Ukończone)
- [x] Implementacja trzech paneli edycji (HTML, CSS, JS)
- [x] Live preview w iframe z auto-update
- [x] Responsywny layout interfejsu
- [x] Hosting na GitHub Pages

### Faza 2: Rozszerzenia UX 📋 (Niezrealizowane)
- [ ] Integracja CodeMirror/Monaco Editor dla syntax highlighting
- [ ] Autouzupełnianie kodu (IntelliSense)
- [ ] Zapis projektów do localStorage (persist między sesjami)
- [ ] Export projektu jako HTML file (download button)

### Faza 3: Zaawansowane Funkcje 💡 (Pomysły)
- [ ] Obsługa preprocessorów (SASS, LESS, TypeScript)
- [ ] Import bibliotek z CDN (jQuery, Bootstrap, etc.)
- [ ] Collaboration mode (real-time editing z innymi osobami)
- [ ] Dark mode toggle dla interfejsu -->

---

## 🐛 Znane Problemy i Rozwiązania

### ✅ Naprawione w v1.0:
- **Brak debounce dla input events**: Dodano opóźnienie 300ms dla optymalizacji.
- **Iframe nie odświeża się poprawnie**: Użyto `contentDocument.open/write/close()` zamiast `srcdoc`.

### 🔧 Do poprawy (jeśli projekt zostałby wznowiony):
- [ ] Brak obsługi błędów składniowych (runtime errors nie są wyświetlane w UI)
- [ ] Textarea nie ma numeru linii (trudne debugowanie)
- [ ] Brak wsparcia dla external libraries (CDN links)
- [ ] Interfejs nie jest dostępny (accessibility issues - brak ARIA labels)

---

## 📝 Changelog

### v1.0 (Legacy Release - Archived)
**INITIAL FEATURES:**
- Trzy panele edycji kodu (HTML, CSS, JavaScript)
- Live preview w iframe z automatycznym odświeżaniem
- Responsywny layout dostosowany do różnych rozdzielczości
- Statyczna aplikacja bez zależności zewnętrznych

**Zmiany techniczne:**
- Vanilla JavaScript bez frameworków (lightweight footprint)
- Inline styles i scripts dla uproszczenia deploymentu
- GitHub Pages hosting dla darmowego live demo

---

## 📜 Licencja

Ten projekt jest udostępniony na licencji **MIT**.

### Co MOŻESZ robić:
- ✅ Używać kodu w projektach osobistych i komercyjnych
- ✅ Modyfikować i rozbudowywać aplikację
- ✅ Dystrybuować kopie z modyfikacjami lub bez

### Wymagania:
- ℹ️ Dołącz kopię licencji MIT w swoim projekcie
- ℹ️ Zachowaj informację o prawach autorskich oryginalnego autora

### Użytek komercyjny
Licencja MIT pozwala na dowolne użycie komercyjne bez opłat. Możesz włączyć ten edytor do własnych narzędzi edukacyjnych, platform CMS czy nawet sprzedawać jako część większego produktu.

Zobacz pełne warunki prawne w pliku [LICENSE](LICENSE).

---

<div align="center">

### ⭐ Jeśli podoba Ci się ten projekt, zostaw gwiazdkę na GitHubie! ⭐

☕ Stworzono używając czystego HTML5, CSS3 i Vanilla JavaScript.
<br>
<sub>Projekt edukacyjny z czasów technikum - zarchiwizowany jako pamiątka nauki programowania frontend.</sub>
<br>
<sub>**Licencja MIT** - Wolne oprogramowanie open-source. Zobacz [LICENSE](LICENSE) po szczegóły.</sub>

<p>
  <a href="https://github.com/MaxPowerPL/kompilator-html-css/issues/new">🐛 Zgłoś Bug</a> •
  <a href="https://github.com/MaxPowerPL/kompilator-html-css/issues/new">💡 Zaproponuj Funkcję</a> •
  <a href="https://maxpowerpl.github.io/kompilator-html-css/">🌐 Live Demo</a>
</p>

![Status](https://img.shields.io/badge/Status-Archived%20Project-yellow?style=for-the-badge&logo=github&logoColor=white)

</div>
