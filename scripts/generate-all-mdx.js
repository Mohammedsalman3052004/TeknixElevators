const fs = require('fs');
const path = require('path');

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function tableToMarkdown(tableHtml) {
  const rows = [];
  const trMatches = tableHtml.match(/<tr[^>]*>([\s\S]*?)<\/tr>/gi) || [];
  
  for (const tr of trMatches) {
    const cells = [];
    const cellMatches = tr.match(/<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi) || [];
    for (const cell of cellMatches) {
      const content = cell.replace(/<(th|td)[^>]*>([\s\S]*?)<\/\1>/i, '$2')
        .replace(/<[^>]+>/g, '')
        .replace(/\|/g, '\\|')
        .replace(/\r?\n/g, ' ')
        .trim();
      cells.push(decodeEntities(content));
    }
    if (cells.length > 0) rows.push(cells);
  }

  if (rows.length === 0) return '';

  const colCount = Math.max(...rows.map(r => r.length));
  for (const r of rows) {
    while (r.length < colCount) r.push('');
  }

  let md = '\n\n| ' + rows[0].join(' | ') + ' |\n';
  md += '| ' + Array(colCount).fill('---').join(' | ') + ' |\n';
  for (let i = 1; i < rows.length; i++) {
    md += '| ' + rows[i].join(' | ') + ' |\n';
  }
  return md + '\n\n';
}

function htmlToMarkdown(html) {
  if (!html) return '';

  let md = html;

  // Handle tables
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match) => tableToMarkdown(match));

  // Headings
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n\n# $1\n\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n## $1\n\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n### $1\n\n');
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n\n#### $1\n\n');

  // Bold & Italic
  md = md.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, '**$2**');
  md = md.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, '*$2*');

  // Links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Unordered Lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, inner) => {
    const items = inner.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    const listMd = items.map(li => {
      const text = li.replace(/<li[^>]*>([\s\S]*?)<\/li>/i, '$1').trim();
      return `- ${text}`;
    }).join('\n');
    return '\n\n' + listMd + '\n\n';
  });

  // Ordered Lists
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, inner) => {
    const items = inner.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    let idx = 1;
    const listMd = items.map(li => {
      const text = li.replace(/<li[^>]*>([\s\S]*?)<\/li>/i, '$1').trim();
      return `${idx++}. ${text}`;
    }).join('\n');
    return '\n\n' + listMd + '\n\n';
  });

  // Line breaks & Paragraphs & Divs
  md = md.replace(/<br\s*\/?>/gi, '\n\n');
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n\n$1\n\n');
  md = md.replace(/<div[^>]*>/gi, '\n');
  md = md.replace(/<\/div>/gi, '\n');

  // Strip any remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');

  // Decode entities
  md = decodeEntities(md);

  // Clean extra spaces / newlines
  md = md.replace(/\r\n/g, '\n');
  md = md.replace(/\n{3,}/g, '\n\n');
  return md.trim();
}

function categorize(title, slug) {
  const text = (title + ' ' + slug).toLowerCase();
  if (text.includes('safety') || text.includes('trapped') || text.includes('safe') || text.includes('etiquette')) {
    return 'Safety';
  }
  if (text.includes('maintenance') || text.includes('service')) {
    return 'Maintenance';
  }
  if (text.includes('smart') || text.includes('modernization') || text.includes('eco-friendly') || text.includes('advancements') || text.includes('future') || text.includes('technology')) {
    return 'Technology';
  }
  if (text.includes('villa') || text.includes('luxury') || text.includes('architecture') || text.includes('design') || text.includes('designs')) {
    return 'Architecture';
  }
  if (text.includes('4-passenger') || text.includes('dimension') || text.includes('dimensions') || text.includes('size') || text.includes('hydraulic') || text.includes('traction') || text.includes('pneumatic') || text.includes('engineering')) {
    return 'Engineering';
  }
  if (text.includes('home') || text.includes('residential') || text.includes('duplex') || text.includes('house')) {
    return 'Residential';
  }
  if (text.includes('commercial') || text.includes('dubai')) {
    return 'Commercial';
  }
  return 'Engineering';
}

function parseDate(dateStr) {
  if (!dateStr) return '2026-01-01';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '2026-01-01';
  return d.toISOString().split('T')[0];
}

const blogsDir = path.join(process.cwd(), 'blog', 'blog');
const outDir = path.join(process.cwd(), 'content', 'blogs');
const blogsImageDir = path.join(process.cwd(), 'public', 'img', 'blogs_image');

const fallbackImages = {
  Architecture: '/img/blogs_image/grand-hall-circular-glass-villa-lift.webp',
  Residential: '/img/blogs_image/best-home-elevators-bangalore.webp',
  Engineering: '/img/blogs_image/hydraulic-vs-traction-home-elevators-comparison.webp',
  Safety: '/img/blogs_image/dark-glass-home-elevator.webp',
  Technology: '/img/blogs_image/premium-glass-elevator-cabin-interior.webp',
  Maintenance: '/img/blogs_image/top-elevator-companies-in-bangalore.webp',
  Commercial: '/img/blogs_image/elevators-in-bangalore.webp',
};

const dirs = fs.readdirSync(blogsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log(`Processing ${dirs.length} blogs from ${blogsDir}...`);

let createdCount = 0;
const categoryCounts = {};

for (const dir of dirs) {
  const htmlPath = path.join(blogsDir, dir, 'index.html');
  if (!fs.existsSync(htmlPath)) continue;

  const html = fs.readFileSync(htmlPath, 'utf8');
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) continue;

  const post = JSON.parse(match[1]).props.pageProps.post;
  if (!post) continue;

  const slug = post.slug || dir;
  const title = (post.title || dir).replace(/"/g, '\\"');
  const category = categorize(post.title || '', slug);
  categoryCounts[category] = (categoryCounts[category] || 0) + 1;

  const date = parseDate(post.date);
  const author = (post.author && post.author !== 'Author Name') ? post.author : 'TekniX Elevators';

  // Resolve cover image
  let coverImage = '';
  if (post.image) {
    const baseImg = path.basename(post.image);
    if (fs.existsSync(path.join(blogsImageDir, baseImg))) {
      coverImage = `/img/blogs_image/${baseImg}`;
    }
  }
  if (!coverImage) {
    coverImage = fallbackImages[category] || fallbackImages.Engineering;
  }

  // Markdown conversion
  const markdownBody = htmlToMarkdown(post.content || '');

  // Excerpt
  let excerpt = post.excerpt ? post.excerpt.trim() : '';
  if (!excerpt && post.description) {
    excerpt = post.description.trim();
  }
  if (!excerpt) {
    // Take first 160 characters from markdownBody
    const firstP = markdownBody.split('\n\n')[0] || '';
    excerpt = firstP.replace(/[\*#_\[\]\(\)]/g, '').slice(0, 160) + '...';
  }
  excerpt = excerpt.replace(/"/g, '\\"').replace(/\n/g, ' ');

  // Read time calculation
  const wordCount = markdownBody.split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(3, Math.ceil(wordCount / 200));
  const readTime = `${readTimeMinutes} min read`;

  // Tags
  const tags = [category];
  const lowerTitle = (post.title || '').toLowerCase();
  if (lowerTitle.includes('bangalore') || lowerTitle.includes('bengaluru')) tags.push('Bangalore');
  if (lowerTitle.includes('hyderabad')) tags.push('Hyderabad');
  if (lowerTitle.includes('dubai')) tags.push('Dubai');
  if (lowerTitle.includes('india')) tags.push('India');
  if (lowerTitle.includes('villa')) tags.push('Villas');
  if (lowerTitle.includes('home')) tags.push('Home Lifts');

  // SEO fields
  const metaTitle = (post.meta_title || post.title || title).replace(/"/g, '\\"');
  const metaDescription = (post.description || excerpt).replace(/"/g, '\\"').replace(/\n/g, ' ');
  const keywordsList = post.keywords
    ? post.keywords.split(',').map(k => `"${k.trim().replace(/"/g, '')}"`).filter(k => k.length > 2)
    : [];

  const mdxContent = `---
title: "${title}"
date: "${date}"
author: "${author}"
category: "${category}"
tags: [${tags.map(t => `"${t}"`).join(', ')}]
readTime: "${readTime}"
coverImage: "${coverImage}"
excerpt: "${excerpt}"
isPublished: true

seo:
  metaTitle: "${metaTitle}"
  metaDescription: "${metaDescription}"
  keywords: [${keywordsList.join(', ')}]
  canonical: "https://teknixelevators.com/blog/${slug}"
  noIndex: false
  ogTitle: "${metaTitle}"
  ogDescription: "${metaDescription}"
  ogImage: "${coverImage}"
---

${markdownBody}
`;

  const targetFile = path.join(outDir, `${slug}.mdx`);
  fs.writeFileSync(targetFile, mdxContent, 'utf8');
  createdCount++;
}

console.log(`\nSuccessfully created ${createdCount} MDX blog posts!`);
console.log('Category distribution:', JSON.stringify(categoryCounts, null, 2));
