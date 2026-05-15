# Welterbe in Gefahr

Offizielle Webseite von **Prof. Dr. Bernd Freiherr von Droste zu Hülshoff** — Gründungsdirektor des UNESCO‑Welterbezentrums — anlässlich des Erscheinens seines Buchs *»Welterbe in Gefahr«*.

## 🌍 Über das Projekt

Die Webseite stellt das Lebenswerk eines der einflussreichsten Akteure im internationalen Kultur‑ und Naturerbeschutz vor und enthält eine **interaktive Weltkarte aller 53 derzeit auf der Roten Liste der UNESCO geführten Welterbestätten** (Stand: November 2025).

### Funktionen

- 📖 **Buchvorstellung** — Präsentation des neuen Buchs *»Welterbe in Gefahr«*
- 🗺️ **Interaktive Karte** — Alle 53 bedrohten Welterbestätten mit Filterung nach Kultur‑/Naturerbe und Volltextsuche (Leaflet + OpenStreetMap)
- 📜 **Biografie** — Lebenslauf mit illustrierter Zeitleiste
- 🏆 **Ehrungen** — Internationale Auszeichnungen und Ehrenbürgerschaften
- 📚 **Publikationen** — Auswahl aus über 200 wissenschaftlichen Beiträgen
- ✉️ **Kontaktformular** — Direkter Kontakt zum Sekretariat
- 📱 **Responsiv** — Optimiert für Desktop, Tablet und Mobile
- ♿ **Barrierefreundlich** — Semantisches HTML, `prefers-reduced-motion`‑Unterstützung

## 🛠️ Technologie

Reines HTML/CSS/JavaScript ohne Build-Schritt. Keine Frameworks, keine Abhängigkeiten — direkt deploybar.

- **Schriften:** Cormorant Garamond, Cardo, DM Mono (Google Fonts)
- **Karte:** [Leaflet 1.9.4](https://leafletjs.com/) mit OpenStreetMap‑Kacheln
- **Hosting:** Bereit für GitHub Pages, Netlify, Vercel oder jeden statischen Webhost

## 📁 Projektstruktur

```
.
├── index.html              # Hauptseite
├── css/
│   └── styles.css          # Sämtliche Stile
├── js/
│   ├── sites-data.js       # Datensatz der 53 Welterbestätten
│   └── main.js             # Navigation, Karte, Formular
├── assets/
│   └── favicon.svg         # Favicon
├── README.md               # Diese Datei
├── LICENSE                 # MIT-Lizenz
└── .gitignore
```

## 🚀 Lokale Vorschau

Da keine Build-Schritte erforderlich sind, genügt es, `index.html` im Browser zu öffnen. Für die volle Funktionalität (insbesondere Schriften und Karte) empfiehlt sich ein lokaler Webserver:

```bash
# Mit Python 3
python3 -m http.server 8000

# Mit Node.js (http-server)
npx http-server

# Mit PHP
php -S localhost:8000
```

Anschließend im Browser öffnen: <http://localhost:8000>

## 🌐 Deployment auf GitHub Pages

1. Repository auf GitHub anlegen und Dateien pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Welterbe in Gefahr"
   git branch -M main
   git remote add origin https://github.com/IHR-NUTZERNAME/welterbe-in-gefahr.git
   git push -u origin main
   ```
2. In den Repository‑Einstellungen unter **Settings → Pages**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` / `(root)`
3. Die Seite ist nach wenigen Minuten erreichbar unter:
   `https://IHR-NUTZERNAME.github.io/welterbe-in-gefahr/`

Für eine eigene Domain (z. B. `droste-huelshoff.de`) eine `CNAME`-Datei im Repo-Root anlegen, die nur den Domainnamen enthält, und beim Domain-Provider einen DNS-Eintrag setzen.

## ✏️ Anpassungen

### Porträt austauschen
In `index.html` den `<svg>`-Block innerhalb von `.hero-portrait` durch ein echtes Foto ersetzen:
```html
<div class="hero-portrait">
  <img src="assets/portrait.jpg" alt="Bernd von Droste zu Hülshoff" />
</div>
```

### Buchcover einbinden
Sobald das endgültige Cover vorliegt, kann das CSS‑Mock in `index.html` (Bereich `.book-cover`) durch ein `<img>` ersetzt werden.

### Kontaktformular aktivieren
Standardmäßig zeigt das Formular nur eine Bestätigungsanimation. Für echte E-Mail-Zustellung gibt es drei einfache Optionen:

**Option 1 — Formspree** *(empfohlen, kostenlos für niedrige Volumina)*
1. Bei <https://formspree.io> registrieren
2. Endpoint‑URL kopieren
3. In `index.html` das `<form>`‑Tag anpassen:
   ```html
   <form class="contact-form" id="contactForm"
         action="https://formspree.io/f/IHRE-ID"
         method="POST">
   ```
4. In `js/main.js` den Form‑Submit‑Handler entfernen oder anpassen (siehe Kommentar im Code).

**Option 2 — Netlify Forms** *(bei Hosting auf Netlify)*
Einfach `netlify` als Attribut zum `<form>`-Tag hinzufügen.

**Option 3 — Eigenes Backend**
Den `fetch()`‑Aufruf im Submit‑Handler an die eigene API anpassen.

### Daten der Welterbestätten aktualisieren
Die UNESCO aktualisiert die Rote Liste jährlich (gewöhnlich im Sommer). Änderungen in `js/sites-data.js` einpflegen. Aktuelle Liste:
<https://whc.unesco.org/en/danger/>

### Farben anpassen
Sämtliche Farben sind als CSS‑Variablen im `:root`‑Block von `css/styles.css` definiert.

## 📊 Datenquellen

- **Biografische Daten:** [Wikipedia — Bernd von Droste zu Hülshoff](https://de.wikipedia.org/wiki/Bernd_von_Droste_zu_Hülshoff)
- **Welterbe in Gefahr:** [UNESCO World Heritage Centre](https://whc.unesco.org/en/danger/)
- **Kartenkacheln:** © [OpenStreetMap](https://www.openstreetmap.org/copyright)-Mitwirkende

## 📄 Lizenz

Dieses Projekt ist in zwei Bestandteile geteilt:

### Quellcode (HTML, CSS, JavaScript)
Veröffentlicht unter der **MIT-Lizenz** — frei verwendbar, veränderbar und weiterverbreitbar, auch kommerziell. Lediglich der Copyright-Hinweis muss erhalten bleiben.

### Inhalte (Texte, Fotos, Biografie, redaktionelle Aufbereitung)
**© 2026 Bernd Freiherr von Droste zu Hülshoff. Alle Rechte vorbehalten.**

Die biografischen Texte, die deutschsprachige Aufbereitung und Beschreibung der Welterbestätten, Porträts, Fotos sowie der Buchtitel *»Welterbe in Gefahr«* sind urheberrechtlich geschützt. Jede Nutzung — insbesondere Kopieren, Verbreiten, Übersetzen oder Einbinden in andere Werke — bedarf der vorherigen schriftlichen Zustimmung.

Anfragen: **presse@droste-huelshoff.de**

Vollständiger Lizenztext und Hinweise zu Drittanbieter-Ressourcen: siehe [LICENSE](LICENSE).

---

**Diese Webseite begleitet das Erscheinen des Buchs *»Welterbe in Gefahr«*.**
