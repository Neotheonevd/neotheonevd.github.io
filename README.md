# Sichen Shao · 邵嗣琛

A personal academic homepage with a site-wide starry-night and neon-city background.

Live site: https://neotheonevd.github.io/

## Content

- `index.html`: English edition.
- `zh/index.html`: Chinese edition.
- `styles.css`: desktop and mobile layouts, colors, and typography.
- `site.js`: active section navigation and footer year.
- `assets/`: original site background artwork and a small vector star icon.

The top-right language selector switches between independent pages.
The illustration is a background, not a portrait or hero banner.
The personal introductions state the owner's university, degree subject, previous research, and current interests in each page's language.
Edit the paragraphs inside `.about-copy` in each HTML page; the HTML comments mark other optional descriptions.

This is a static website with no build step, tracking, or third-party JavaScript.
GitHub Pages serves the `main` branch at its root; `.nojekyll` keeps the files unchanged.

## Local preview

```sh
python -m http.server 8765
```

Open http://localhost:8765/ in a browser.

Current background: `assets/rain-city-david-lucy-v3.png` — a restrained, starless rainy city with exactly two advertising screens, one for David and one for Lucy.
