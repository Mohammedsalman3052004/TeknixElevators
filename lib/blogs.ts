import fs from "fs";
import path from "path";
import matter from "gray-matter";

/* =========================================
   CONTENT DIRECTORY
========================================= */

const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

/* =========================================
   TYPE DEFINITIONS
========================================= */

export interface BlogSEO {
  /** Custom Google search title (different from the H1). */
  metaTitle?: string;

  /** Custom meta description for Google snippet. */
  metaDescription?: string;

  /** Focus keywords provided by SEO team. */
  keywords?: string[];

  /** Canonical URL override (e.g. when cross-posting). */
  canonical?: string;

  /** Set true to prevent Google from indexing this post. */
  noIndex?: boolean;

  /** Custom Open Graph title for social shares. */
  ogTitle?: string;

  /** Custom Open Graph description for social shares. */
  ogDescription?: string;

  /** Custom social share banner image (1200x630px recommended). */
  ogImage?: string;

  /** FAQ items for Google FAQ rich snippet schema. */
  faqs?: { question: string; answer: string }[];
}

export interface BlogPost {
  /* File metadata */
  slug: string;

  /* Display fields */
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  coverImage: string;
  excerpt: string;
  isPublished: boolean;

  /* SEO team fields */
  seo: BlogSEO;

  /* Raw MDX content string */
  content: string;
}

/* =========================================
   READ ALL PUBLISHED BLOGS
   Returns newest first.
========================================= */

export function getAllBlogs(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];

  const files = fs.readdirSync(BLOGS_DIR).filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOGS_DIR, filename), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? "1970-01-01",
        author: data.author ?? "TekniX",
        category: data.category ?? "General",
        tags: data.tags ?? [],
        readTime: data.readTime ?? "3 min read",
        coverImage: data.coverImage ?? "/Images/logo.png",
        excerpt: data.excerpt ?? "",
        isPublished: data.isPublished ?? false,
        seo: data.seo ?? {},
      } as Omit<BlogPost, "content">;
    })
    .filter((p) => p.isPublished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/* =========================================
   READ SINGLE BLOG POST (with content)
========================================= */

export function getBlogBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!data.isPublished) return null;

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "1970-01-01",
    author: data.author ?? "TekniX",
    category: data.category ?? "General",
    tags: data.tags ?? [],
    readTime: data.readTime ?? "3 min read",
    coverImage: data.coverImage ?? "/Images/logo.png",
    excerpt: data.excerpt ?? "",
    isPublished: data.isPublished ?? false,
    seo: data.seo ?? {},
    content,
  };
}

/* =========================================
   GET ALL SLUGS (for generateStaticParams)
========================================= */

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];

  return fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/* =========================================
   FORMAT DATE
========================================= */

export function formatBlogDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
