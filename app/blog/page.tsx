import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blogs";
import BlogFilter from "./BlogFilter";
import styles from "./blog.module.css";

/* =========================================
   PAGE METADATA
========================================= */

export const metadata: Metadata = {
  title: "Blog | TekniX Elevators",
  description:
    "Insights, engineering perspectives, and design thinking from the TekniX team — covering elevator technology, architecture, safety, and vertical mobility.",
  alternates: {
    canonical: "https://teknixelevators.com/blog",
  },
  openGraph: {
    title: "Blog | TekniX Elevators",
    description:
      "Engineering perspectives and design insights on vertical mobility from TekniX.",
    url: "https://teknixelevators.com/blog",
    type: "website",
    images: [
      {
        url: "/Images/logo.png",
        width: 1200,
        height: 630,
        alt: "TekniX Elevators Blog",
      },
    ],
  },
};

/* =========================================
   BLOG LISTING PAGE (Server Component)
   Fetches all posts at build time and passes
   them to the interactive client component.
========================================= */

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <>
      {/* =====================================
          HERO
      ===================================== */}

      <header className={styles.hero}>
        <div className={styles.heroEyebrow}>
          <span />
          INSIGHTS &amp; PERSPECTIVES
        </div>

        <h1 className={styles.heroTitle} data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>THOUGHT.</span>
          </span>
          <span data-reveal-line-mask>
            <span data-reveal-line>IN WRITING.</span>
          </span>
        </h1>

        <p className={styles.heroMeta} data-reveal="up">
          {posts.length} {posts.length === 1 ? "Article" : "Articles"} Published
        </p>
      </header>


      {/* =====================================
          FILTER + GRID + PAGINATION
          (all handled client-side by BlogFilter)
      ===================================== */}

      <BlogFilter posts={posts} />
    </>
  );
}
