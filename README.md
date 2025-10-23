Personal Blog template using Bootstrap 5.3.8 (CDN)

This repository now includes a minimal Eleventy starter that builds the Bootstrap-based layout in `src/` and outputs the site to `_site/`.

Files added/updated

- `package.json` — dev script and Eleventy dependency
- `.eleventy.js` — Eleventy config (passthrough for `css/`)
- `src/_layouts/base.njk` — base HTML layout using Bootstrap and your styles
- `src/index.njk` — home list mapped to `collections.posts`
- `src/_layouts/post.njk` — single-post layout
- `src/posts/2025-10-23-building-fast-sites.md` — example post
- `css/style.css` — passthrough custom styles (existing)

Quick start (Eleventy)

1. Install dependencies:

```bash
npm install
```

2. Run the dev server with live reloading:

```bash
npm start
# opens a local dev server (usually http://localhost:8080)
```

3. Build for production (output goes to `_site/`):

```bash
npm run build
```

Notes

- The Eleventy starter uses CDN-hosted Bootstrap in the layouts. If you prefer SRI, add the correct hashes in the layout files.
- `css/style.css` is passthrough-copied to the output so your custom styles are preserved.
- Images in the example use `picsum.photos`. For production, replace these with optimized images or add `eleventy-img` for responsive image generation.

Next steps (suggested)

- Add pagination and tag/category pages.
- Add an RSS feed and SEO metadata.
- Add `eleventy-img` to generate responsive images at build time.
- Create a simple GitHub Actions or Netlify workflow to build and publish `_site/` on push.

If you want, I can add any of the above (pagination, RSS, image optimization, CI) next and wire up a sample GitHub Actions workflow.
