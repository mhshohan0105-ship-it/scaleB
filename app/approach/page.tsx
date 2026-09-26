import type { Metadata } from "next";
import PageIntro from "../components/page-intro";
import { technologies } from "../site-data";

export const metadata: Metadata = {
  title: "Approach | ScaleB",
  description: "A clear, collaborative product process from discovery and design to engineering and continuous improvement.",
};

const steps = [
  { name: "Discover", title: "Find the signal.", text: "We get close to your goals, users, and constraints before shaping a direction." },
  { name: "Design", title: "Make it make sense.", text: "We turn complexity into a clear product experience and a plan the whole team can rally around." },
  { name: "Build", title: "Craft it to last.", text: "Senior engineers build with care, quality, and room for your product to grow." },
  { name: "Grow", title: "Keep getting better.", text: "Launch is a beginning. We learn from real use and keep improving what matters." },
];

export default function ApproachPage() {
  return (
    <main className="module-page">
      <PageIntro eyebrow="Approach / 04" title="Clear thinking. Good momentum." description="Better outcomes come from close partnership, honest conversations, and a process with room for the right ideas." />
      <section className="section-wrap module-content approach-page-content">
        <div className="approach-grid">{steps.map((step, index) => <article key={step.name}><span>0{index + 1} / {step.name.toUpperCase()}</span><h2>{step.title}</h2><p>{step.text}</p></article>)}</div>
      </section>
      <section className="technology-band"><div className="section-wrap technology-content"><div><p className="eyebrow">Our toolkit</p><h2>The right tech.<br />For the right reasons.</h2></div><div className="tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section>
    </main>
  );
}