import { getCollection } from 'astro:content';

export const prerender = true;

const SITE_URL = 'https://ethanreimann.com';

const staticPages = ['/', '/blog/', '/photography/', '/videos/', '/projects/', '/samling/'];

function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

function sitemapEntry(path: string, lastmod?: Date) {
  const url = new URL(path, SITE_URL);

  return `  <url>
    <loc>${url.href}</loc>${lastmod ? `
    <lastmod>${formatDate(lastmod)}</lastmod>` : ''}
  </url>`;
}

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const blogEntries = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => sitemapEntry(`/blog/${post.id}/`, post.data.date));

  const entries = [...staticPages.map((page) => sitemapEntry(page)), ...blogEntries];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
}
