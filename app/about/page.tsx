import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";
import { stats } from "../site-data";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about/" },
  description: "Meet ScaleB, an independent digital technology and custom software partner for ambitious teams.",
};

export default function AboutPage() {
  return (
    <main className="module-page">
      <PageIntro eyebrow="About / 03" title="Small enough to care. Built to deliver big." description="ScaleB is an independent digital technology company partnering with teams ready to make a meaningful leap." />
      <section className="about-band about-page-band">
        <div className="section-wrap about-content">
          <div className="about-top"><p className="eyebrow eyebrow-light">A little about us</p><span>INDEPENDENT BY DESIGN</span></div>
          <h2>Thoughtful people.<br /><span>Useful technology.</span></h2>
          <div className="about-bottom"><p>We pair senior level thinking with hands-on making, keeping the work focused, transparent and human. Our teams stay close to the problem, communicate clearly and take responsibility for what ships.</p><Link className="button button-light" href="/contact">Meet your next team <ArrowUpRight size={17} /></Link></div>
          <div className="stats-grid">{stats.map((stat) => <div className="stat" key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        </div>
      </section>
      <section className="section-wrap about-principles">
        <div><p className="eyebrow">What matters to us</p><h2>Good work is a team sport.</h2></div>
        <p>Open collaboration, careful craft and a steady focus on outcomes shape every partnership. We bring curiosity to the hard questions and care to the details people use every day.</p>
      </section>
    </main>
  );
}