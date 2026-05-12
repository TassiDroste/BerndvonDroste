# 🚀 Deployment auf GitHub Pages — Schritt für Schritt

## ⚠️ WICHTIG: Die Ordnerstruktur muss erhalten bleiben!

Die `index.html` erwartet folgende **Ordnerstruktur** im Repository:

```
IHR-REPOSITORY/
├── .nojekyll              ← WICHTIG: verhindert, dass GitHub die Dateien verfälscht
├── index.html
├── README.md
├── LICENSE
├── css/
│   └── styles.css         ← muss im Unterordner "css" liegen
├── js/
│   ├── main.js            ← müssen im Unterordner "js" liegen
│   └── sites-data.js
└── assets/
    └── favicon.svg        ← muss im Unterordner "assets" liegen
```

Wenn die Dateien stattdessen alle flach nebeneinander liegen
(`styles.css`, `main.js`, `sites-data.js` direkt im Root),
**funktioniert die Seite nicht** — kein Layout, kein Bild, keine Karte.

---

## Option 1 — Über GitHub-Website hochladen (empfohlen für Anfänger)

1. Auf der Startseite Ihres Repositories auf **„Add file"** → **„Upload files"** klicken.
2. **WICHTIG:** Sie können nicht nur Dateien, sondern auch **ganze Ordner** per Drag-and-Drop hochladen!
   - Entpacken Sie das ZIP auf Ihrem Computer.
   - Ziehen Sie **den Inhalt** des entpackten `repo/`-Ordners in den GitHub-Upload-Bereich
     (also `index.html`, plus die Ordner `css/`, `js/`, `assets/` mitsamt deren Inhalt).
   - **Nicht den Ordner `repo` selbst hochladen!**
3. Achten Sie darauf, dass die `.nojekyll`-Datei mit dabei ist
   (versteckte Dateien können je nach Betriebssystem ausgeblendet sein —
   in macOS Finder mit `Cmd+Shift+.` einblenden, in Windows Explorer
   unter "Ansicht → Versteckte Elemente").
4. Unten auf **„Commit changes"** klicken.
5. Unter **Settings → Pages** als Source `main` / `(root)` auswählen.
6. Nach 1–2 Minuten ist die Seite online.

---

## Option 2 — Per Git-Kommandozeile (für Fortgeschrittene)

```bash
# In den entpackten Ordner wechseln
cd welterbe-in-gefahr

# Git-Repository initialisieren
git init
git add .
git commit -m "Initial commit: Welterbe in Gefahr"
git branch -M main

# Mit GitHub-Repository verbinden (Ihr Repo statt 'tassidroste/BerndvDroste')
git remote add origin https://github.com/tassidroste/BerndvDroste.git
git push -u origin main --force
```

---

## ❌ Problem: Seite ist online, sieht aber kaputt aus (nackter Text)

**Ursache:** Browser findet die CSS- und JavaScript-Dateien nicht.

**So prüfen Sie es schnell:**
1. Im Browser auf Ihrer Live-Seite die Entwicklertools öffnen
   (rechtsklick → „Untersuchen" oder `F12`)
2. Reiter **„Console"** anschauen — dort stehen rote Fehlermeldungen wie:
   `Failed to load resource: css/styles.css (404)`

**Lösung:**
- Schauen Sie ins GitHub-Repo: liegen `css/styles.css`, `js/main.js`,
  `js/sites-data.js` und `assets/favicon.svg` **wirklich in Unterordnern**?
- Wenn nein: Über den GitHub-Webeditor jede Datei einzeln umbenennen
  und einen Schrägstrich einbauen (`styles.css` → `css/styles.css`).
  GitHub erstellt den Ordner automatisch.
- `.nojekyll`-Datei nicht vergessen!

---

## 🔄 Daten aktualisieren

Die UNESCO aktualisiert die Rote Liste jährlich (gewöhnlich im Sommer).
Änderungen einfach in `js/sites-data.js` einpflegen und neu committen.
Aktuelle Liste: <https://whc.unesco.org/en/danger/>
