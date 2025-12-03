# Simple Static Site for Derrick Mulwa Portfolio

This `simple_site` folder is a static copy of the React portfolio optimized for GitHub Pages.

How to preview locally

1. Open `simple_site/index.html` in your browser, or run a simple HTTP server in this folder:

```powershell
# Powershell (Python 3 must be installed)
python -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

What's included

- `index.html` - the static site
- `css/styles.css` - the site stylesheet (subset of Tailwind + custom animations)
- `js/data.js` - the portfolio data used to render the site dynamically
- `js/main.js` - renders the site and handles UI interactivity (menu, carousels, lazy-loading)

Notes

- Images are loaded from `/src/images/*` where possible (this site references images in the repo's `src/images` directory). For a self-contained build, copy `src/images` into `simple_site/images/` and update image references accordingly.
- The site includes Google Tag Manager (GTM-5W5V69ZD). Remove if you do not want tracking.
- This static version reproduces the content and functionality of the React/Vite site as closely as possible while staying dependency-free.

Deployment to GitHub Pages

- If you want to serve this site from the repository root on GitHub Pages, you can point your Pages settings to use the `main` branch and the root folder. If you prefer to serve only the `simple_site` folder, you should set up a build or move the contents into a `docs/` folder or another branch.

License

- This is a copy of your site content; follow your usual license for public hosting.
