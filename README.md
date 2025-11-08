# Pixillap

Static (no React) luxury videography & photography site served from `docs/`.

## Structure
```
docs/
  index.html
  about.html
  css/
    main.css
  js/
    main.js
  data/
    cards.json
  assets/
    logo.svg
    favicon.ico
    (images, fonts, etc.)
```

## Local Preview
```bash
git clone https://github.com/enstie/pixillab.git
cd pixillab
python3 -m http.server -d docs 5173
# or
npx serve docs
```
Open: http://localhost:5173/index.html

## Deployment (GitHub Pages)
Settings → Pages → Source: Deploy from branch → Branch: main → Folder: /docs

## Adding Pages
Duplicate about.html inside `docs/`, adjust navigation `<ul class="nav-links">`.

## Data
`cards.json` supplies feature cards. Extend or replace with real service offerings.

## Assets
Place `logo.svg`, images, favicon in `docs/assets/`. Update `<link rel="icon">` as needed.

## Theme
Accent colors can be refined in `css/main.css` (`--accent`, `--accent-alt`).

## License
Internal/private usage.