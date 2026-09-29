"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "../blog-data";

type BlogListProps = {
  posts: BlogPost[];
  categories: string[];
};

export default function BlogList({ posts, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("All articles");
  const filters = ["All articles", ...categories];
  const visiblePosts = activeCategory === "All articles" ? posts : posts.filter((post) => post.category === activeCategory);
  const [featured, ...rest] = visiblePosts;

  return (
    <>
      <div className="project-filters blog-filters" role="group" aria-label="Filter articles">
        {filters.map((filter) => (
          <button
            aria-pressed={activeCategory === filter}
            className={activeCategory === filter ? "filter-button active" : "filter-button"}
            key={filter}
            onClick={() => setActiveCategory(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <Link className="blog-featured" href={`/blog/${featured.slug}`} key={featured.slug}>
        <div className="blog-cover blog-cover-large" style={{ backgroundImage: `url("${featured.image}")` }} aria-hidden="true"><span>{featured.category}</span></div>
        <div className="blog-featured-copy">
          <span className="blog-meta">Featured · {featured.date} · {featured.readTime}</span>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <span className="text-link">Read the article <ArrowUpRight size={16} /></span>
        </div>
      </Link>
      <div className="blog-grid">
        {rest.map((post) => (
          <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
            <div className="blog-cover" style={{ backgroundImage: `url("${post.image}")` }} aria-hidden="true"><span>{post.category}</span></div>
            <span className="blog-meta">{post.date} · {post.readTime}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <ArrowUpRight className="blog-card-arrow" size={20} />
          </Link>
        ))}
      </div>
    </>
  );
}
