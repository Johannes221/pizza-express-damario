# Pizza Express Da Mario — Website

Statische Website (Demo) für Pizza Express Da Mario, Dossenheim.
Dunkel/editorial, Lenis + GSAP, komplette Speisekarte.

- Bestellung läuft weiter über [BestellEck](https://bestelleck.de/pizza-express) + Telefon.
- Speisekarte pflegbar in [`js/menu.js`](js/menu.js) — Preise/Gerichte dort ändern, die Seite rendert automatisch.
- Bilder in `assets/img/` (mit fal.ai / FLUX generiert).

## Lokal ansehen
```
python3 -m http.server 4399
```
→ http://localhost:4399

## Deploy
Statisch via Coolify (Dockerfile = nginx:alpine). Ziel: pizza-express.schartl.dev
