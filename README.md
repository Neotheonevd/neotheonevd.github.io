# Sichen Shao · 邵嗣琛

A bilingual academic homepage, with a starry-night and neon-city visual direction.

Live site: https://neotheonevd.github.io/

## Content

- `index.html`: biography, research interests, JESD-ReID, research experience, and education.
- `styles.css`: desktop and mobile layouts, colors, and typography.
- `site.js`: active section navigation and footer year.
- `assets/`: original banner artwork and a small vector star icon.

This is a static website with no build step, tracking, or third-party JavaScript.
GitHub Pages serves the `main` branch at its root; `.nojekyll` keeps the files unchanged.

## Local preview

```sh
python -m http.server 8765
```

Open http://localhost:8765/ in a browser.
