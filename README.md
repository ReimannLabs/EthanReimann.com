Personal Blog template using Bootstrap 5.3.8 (CDN)

Files added:

- index.html — Blog home with cards, sidebar, and header
- post.html — Sample single post layout
- css/style.css — Minimal custom styles

How to preview

Open `index.html` in your browser (double-click or serve with a static server). Example using Python:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Notes

- Bootstrap links use version 5.3.8 via jsDelivr CDN. Replace the integrity attributes with real SRI hashes if you want stricter security.
- Images use `picsum.photos` placeholder images.

Next steps (suggested)

- Replace placeholder images and content with your real posts
- Add templating or a static site generator (Hugo, Jekyll, Eleventy) if desired
- Add analytics, RSS, and SEO meta tags
