import type { Metadata } from "next";
import PageIntro from "../components/page-intro";
import BlogList from "./blog-list";
import { blogCategories, blogPosts } from "../blog-data";

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog/" },
  description: "Articles on website development, cyber security and how the internet works from the ScaleB team.",
};

export default function BlogPage() {
  return (
    <main className="module-page">
      <PageIntro eyebrow="Blog / 04" title="Build smarter. Stay secure." description="Practical articles on website development, cyber security and how the internet works. Written for business owners and teams building online." />
      <section className="section-wrap module-content blog-content">
        <BlogList posts={blogPosts} categories={blogCategories} />
      </section>
    </main>
  );
}
