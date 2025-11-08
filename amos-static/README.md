# Amos Static Clone

A React-free static version of the Amos site.

## Structure
- `index.html`, `about.html`: Example pages. Add more pages for each former React route.
- `css/main.css`: Consolidated styles.
- `js/main.js`: Basic interactions (nav toggle, dynamic cards).
- `data/cards.json`: Optional data source for dynamic cards.
- `assets/`: Copy images, fonts, and favicons from the original project (`lux-site/assets` and `lux-site/public`).

## Local Preview
Open `index.html` directly, or serve from this folder:
```bash
python3 -m http.server -d amos-static 5173
# or
npx serve amos-static
```

## Deployment
- GitHub Pages: Move contents of `amos-static` to repo root OR rename `amos-static` to `docs` and set Pages source to `/docs`.
- Netlify/Vercel: Deploy `amos-static` folder directly.