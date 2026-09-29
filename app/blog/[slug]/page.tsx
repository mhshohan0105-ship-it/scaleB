import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPosts } from "../../blog-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | ScaleB Blog`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((item) => item.slug !== post.slug);
  const morePosts = [...otherPosts.filter((item) => item.category === post.category), ...otherPosts.filter((item) => item.category !== post.category)].slice(0, 3);

  return (
    <main className="module-page">
      <article className="section-wrap blog-article">
        <Link className="text-link blog-back" href="/blog"><ArrowLeft size={16} /> All articles</Link>
        <p className="eyebrow hero-intro">{post.category} · {post.date} · {post.readTime}</p>
        <h1><span className="hero-line"><span>{post.title}</span></span></h1>
        <p className="blog-lede hero-intro">{post.excerpt}</p>
        <div className="blog-cover blog-cover-article" style={{ backgroundImage: `url("${post.image}")` }} role="img" aria-label={post.title}><span>{post.category}</span></div>
        <div className="blog-body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>
          ))}
        </div>
      </article>
      <section className="section-wrap blog-more">
        <p className="eyebrow">More from the blog</p>
        <div className="blog-grid">
          {morePosts.map((item) => (
            <Link className="blog-card" href={`/blog/${item.slug}`} key={item.slug}>
              <div className="blog-cover" style={{ backgroundImage: `url("${item.image}")` }} aria-hidden="true"><span>{item.category}</span></div>
              <span className="blog-meta">{item.date} · {item.readTime}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <ArrowUpRight className="blog-card-arrow" size={20} />
            </Link>
          ))}
        </div>
      </section>
      <section className="module-cta section-wrap"><div><p className="eyebrow">Have a challenge in mind?</p><h2>Let&apos;s talk about what you&apos;re building.</h2></div><Link className="button button-dark" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link></section>
    </main>
  );
}
