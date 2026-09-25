"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";
import styles from "./blog.module.css";

/* =========================================
   INLINE DATE FORMATTER (avoids importing fs via lib/blogs)
========================================= */

function formatBlogDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* =========================================
   CONSTANTS
========================================= */

const POSTS_PER_PAGE = 9;

/* =========================================
   PROPS
========================================= */

interface Props {
  posts: Omit<BlogPost, "content">[];
}

/* =========================================
   BLOG FILTER + PAGINATION COMPONENT
========================================= */

export default function BlogFilter({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  /* ---- Derive unique category list from posts ---- */
  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p.category))).sort();
    return ["ALL", ...cats];
  }, [posts]);

  /* ---- Filter posts by active category ---- */
  const filteredPosts = useMemo(() => {
    if (activeCategory === "ALL") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  /* ---- Pagination ---- */
  const isAllPage1 = activeCategory === "ALL" && currentPage === 1;

  // On ALL page 1: first post is "featured", rest go into the grid
  const featuredPost = isAllPage1 ? filteredPosts[0] : null;
  const gridSource = isAllPage1 ? filteredPosts.slice(1) : filteredPosts;

  const totalPages = Math.ceil(gridSource.length / POSTS_PER_PAGE);
  const pageOffset = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = gridSource.slice(pageOffset, pageOffset + POSTS_PER_PAGE);

  /* ---- Handlers ---- */
  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePage(page: number) {
    setCurrentPage(page);
    // Scroll to the top of the filter section
    const el = document.getElementById("blog-filter-anchor");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---- Pagination range helper ---- */
  function getPageRange(total: number, current: number): (number | "…")[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const range: (number | "…")[] = [];
    if (current <= 4) {
      range.push(1, 2, 3, 4, 5, "…", total);
    } else if (current >= total - 3) {
      range.push(1, "…", total - 4, total - 3, total - 2, total - 1, total);
    } else {
      range.push(1, "…", current - 1, current, current + 1, "…", total);
    }
    return range;
  }

  /* =========================================
     RENDER
  ========================================= */

  return (
    <div className={styles.main}>

      {/* =====================================
          CATEGORY TABS
      ===================================== */}

      <div id="blog-filter-anchor" className={styles.filterBar}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterTab} ${
              activeCategory === cat ? styles.filterTabActive : ""
            }`}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </button>
        ))}

        {/* Post count badge */}
        <span className={styles.filterCount}>
          {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
        </span>
      </div>


      {/* =====================================
          EMPTY STATE
      ===================================== */}

      {filteredPosts.length === 0 && (
        <div className={styles.emptyState}>
          <p>No articles in this category yet.</p>
        </div>
      )}


      {/* =====================================
          FEATURED — only on ALL page 1
      ===================================== */}

      {featuredPost && (
        <section className={styles.featuredSection}>
          <div className={styles.featuredLabel}>
            <span />
            LATEST ARTICLE
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className={styles.featuredCard}
          >
            <div className={styles.featuredImageWrapper}>
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </div>

            <div className={styles.featuredContent}>
              <div className={styles.featuredContentTop}>
                <span className={styles.categoryBadge}>
                  {featuredPost.category}
                </span>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              </div>

              <div>
                <div className={styles.featuredMeta}>
                  <span className={styles.metaDate}>
                    {formatBlogDate(featuredPost.date)}
                  </span>
                  <span className={styles.metaDot} />
                  <span className={styles.metaRead}>{featuredPost.readTime}</span>
                </div>
                <div className={styles.featuredArrow} style={{ marginTop: 28 }}>
                  READ ARTICLE <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}


      {/* =====================================
          GRID
      ===================================== */}

      {pagePosts.length > 0 && (
        <>
          {featuredPost && <hr className={styles.divider} />}

          <section className={styles.gridSection}>
            {pagePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.postCard}
              >
                <div className={styles.postImageWrapper}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>

                <span className={styles.postCategory}>{post.category}</span>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>

                <div className={styles.postFooter}>
                  <div className={styles.postMeta}>
                    <span className={styles.metaDate}>
                      {formatBlogDate(post.date)}
                    </span>
                    <span className={styles.metaDot} />
                    <span className={styles.metaRead}>{post.readTime}</span>
                  </div>
                  <span className={styles.postArrow}>→</span>
                </div>
              </Link>
            ))}
          </section>
        </>
      )}


      {/* =====================================
          PAGINATION
      ===================================== */}

      {totalPages > 1 && (
        <nav className={styles.pagination} aria-label="Blog pagination">
          {/* Prev */}
          <button
            className={`${styles.pageBtn} ${styles.pageBtnArrow}`}
            onClick={() => handlePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ←
          </button>

          {/* Page numbers */}
          {getPageRange(totalPages, currentPage).map((item, i) =>
            item === "…" ? (
              <span key={`ellipsis-${i}`} className={styles.pageEllipsis}>
                …
              </span>
            ) : (
              <button
                key={item}
                className={`${styles.pageBtn} ${
                  item === currentPage ? styles.pageBtnActive : ""
                }`}
                onClick={() => handlePage(item as number)}
                aria-label={`Page ${item}`}
                aria-current={item === currentPage ? "page" : undefined}
              >
                {item}
              </button>
            )
          )}

          {/* Next */}
          <button
            className={`${styles.pageBtn} ${styles.pageBtnArrow}`}
            onClick={() => handlePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            →
          </button>
        </nav>
      )}
    </div>
  );
}
