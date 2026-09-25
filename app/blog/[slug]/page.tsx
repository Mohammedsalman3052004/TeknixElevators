import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getBlogBySlug,
  getAllBlogSlugs,
  getAllBlogs,
  formatBlogDate,
  type BlogPost,
} from "@/lib/blogs";
import styles from "./post.module.css";

/* =========================================
   STATIC PARAMS (for output: 'export')
========================================= */

export async function generateStaticParams() {
  const slugs = await Promise.resolve(getAllBlogSlugs());
  return slugs.map((slug) => ({ slug }));
}

/* =========================================
   DYNAMIC METADATA
   SEO team can override any field via the
   `seo:` block in the MDX frontmatter.
========================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) return {};

  const { title, excerpt, date, author, seo, coverImage } = post;

  const resolvedTitle = seo.metaTitle ?? `${title} | TekniX Elevators`;
  const resolvedDescription = seo.metaDescription ?? excerpt;
  const resolvedImage = seo.ogImage ?? coverImage;
  const resolvedCanonical =
    seo.canonical ?? `https://teknixelevators.com/blog/${slug}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,

    ...(seo.keywords && { keywords: seo.keywords.join(", ") }),

    robots: {
      index: !seo.noIndex,
      follow: !seo.noIndex,
    },

    alternates: {
      canonical: resolvedCanonical,
    },

    openGraph: {
      title: seo.ogTitle ?? resolvedTitle,
      description: seo.ogDescription ?? resolvedDescription,
      url: resolvedCanonical,
      type: "article",
      publishedTime: date,
      authors: [author],
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle ?? resolvedTitle,
      description: seo.ogDescription ?? resolvedDescription,
      images: [resolvedImage],
    },
  };
}

/* =========================================
   FAQ RICH SNIPPET (JSON-LD)
   Injected only when the SEO team provides faqs.
========================================= */

function FaqJsonLd({ post }: { post: BlogPost }) {
  if (!post.seo.faqs?.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.seo.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* =========================================
   ARTICLE JSON-LD
========================================= */

function ArticleJsonLd({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TekniX Elevators",
      logo: {
        "@type": "ImageObject",
        url: "https://teknixelevators.com/Images/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* =========================================
   BLOG POST PAGE
========================================= */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const authorInitial = post.author
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  // Sidebar — latest 4 posts excluding the current one
  const sidebarPosts = getAllBlogs()
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  return (
    <>
      {/* Rich Snippets */}
      <ArticleJsonLd post={post} />
      <FaqJsonLd post={post} />

      {/* ===================================
          HERO
      =================================== */}

      <header className={styles.hero}>
        <Link href="/blog" className={styles.heroBackLink}>
          ← BACK TO BLOG
        </Link>

        <div className={styles.heroMeta}>
          <span className={styles.heroCategoryBadge}>{post.category}</span>
          <span className={styles.heroDot} />
          <span className={styles.heroReadTime}>{post.readTime}</span>
        </div>

        <h1 className={styles.heroTitle}>{post.title}</h1>

        <div className={styles.heroFooter}>
          <div className={styles.heroAuthorRow}>
            <div className={styles.heroAuthorAvatar}>{authorInitial}</div>
            <div>
              <div className={styles.heroAuthorName}>{post.author}</div>
              <div className={styles.heroDate}>
                {formatBlogDate(post.date)}
              </div>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className={styles.heroTags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.heroTag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>


      {/* ===================================
          COVER IMAGE
      =================================== */}

      <div className={styles.coverImageWrapper}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="100vw"
          priority
        />
      </div>


      {/* ===================================
          CONTENT
      =================================== */}

      <div className={styles.contentLayout}>
        {/* Article */}
        <article className={`${styles.contentColumn} ${styles.prose}`}>
          <MDXRemote source={post.content} />
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <div className={styles.sidebarLabel}>
              <span />
              LATEST ARTICLES
            </div>

            <div className={styles.sidebarPosts}>
              {sidebarPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className={styles.sidebarCard}
                >
                  <div className={styles.sidebarCardImage}>
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="120px"
                    />
                  </div>
                  <div className={styles.sidebarCardBody}>
                    <span className={styles.sidebarCardCategory}>
                      {p.category}
                    </span>
                    <p className={styles.sidebarCardTitle}>{p.title}</p>
                    <span className={styles.sidebarCardDate}>
                      {formatBlogDate(p.date)}
                    </span>
                  </div>
                </Link>
              ))}

              {sidebarPosts.length === 0 && (
                <p className={styles.sidebarEmpty}>No other articles yet.</p>
              )}
            </div>

            <Link href="/blog" className={styles.sidebarAllLink}>
              VIEW ALL ARTICLES →
            </Link>
          </div>
        </aside>
      </div>

      {/* ===================================
          BOTTOM CTA — full width
      =================================== */}

      <div className={styles.cta}>
        <div className={styles.ctaEyebrow}>
          <span /> TEKNIX ELEVATORS <span />
        </div>

        <h2 className={styles.ctaTitle}>
          DISCUSS YOUR PROJECT
        </h2>

        <div className={styles.ctaActions}>
          <Link href="/contact" className={styles.ctaBtnPrimary}>
            CONTACT US →
          </Link>
          <Link href="/blog" className={styles.ctaBtnSecondary}>
            ← ALL ARTICLES
          </Link>
        </div>
      </div>
    </>
  );
}
