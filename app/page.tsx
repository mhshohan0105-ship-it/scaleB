import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import CostEstimator from "./components/cost-estimator";
import HeroVisual from "./components/hero-visual";
import ProjectCover from "./components/project-cover";
import ServiceList from "./components/service-list";
import StatsCounter from "./components/stats-counter";
import TechSphere from "./components/tech-sphere";
import { engagementModels, faqs, homeStats, processSteps, projects, technologies, values } from "./site-data";

export const metadata: Metadata = {
  title: { absolute: "ScaleB | Software, Web & App Development Company in Dhaka" },
  alternates: { canonical: "/" },
};

function SectionHeading({ eyebrow, title, accent, text, center = false }: { eyebrow: string; title: string; accent: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "section-heading section-heading-center" : "section-heading"}>
      <div><p className="eyebrow pill">{eyebrow}</p><h2>{title} <span>{accent}</span></h2></div>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow pill hero-intro"><span className="status-dot"></span> Welcome to ScaleB</p>
          <h1><span className="hero-line"><span>Your One Stop</span></span><span className="hero-line"><span><span className="hero-accent">Solutions.</span></span></span></h1>
          <p className="hero-lede hero-intro">We design, build and grow software, web and mobile apps and AI solutions for ambitious teams everywhere.</p>
          <div className="hero-actions hero-intro">
            <Link className="button button-accent" href="/contact">Start a project <ArrowUpRight size={17} /></Link>
            <Link className="button button-ghost" href="/services">Explore services</Link>
          </div>
        </div>
        <HeroVisual />
        <a className="scroll-cue" href="#stats" aria-label="Scroll to content"><span>Scroll</span><i></i></a>
      </section>

      <section className="section-wrap stats-band" id="stats" aria-label="ScaleB at a glance">
        <p className="eyebrow">Trusted by teams who ship</p>
        <StatsCounter stats={homeStats} />
      </section>

      <section className="section-wrap home-section">
        <SectionHeading center eyebrow="What we do" title="Services built for" accent="growth." text="End to end engineering, from the first idea to millions of users." />
        <ServiceList limit={6} />
        <div className="section-more"><Link className="button button-ghost" href="/services">View all services <ArrowRight size={17} /></Link></div>
      </section>

      <section className="section-wrap home-section">
        <SectionHeading center eyebrow="Ways to work" title="A model that fits" accent="your team." text="Start with a fixed project, add a dedicated team or keep us close for steady growth." />
        <div className="model-grid">
          {engagementModels.map((model, index) => (
            <article className={index === 1 ? "model-card model-card-featured" : "model-card"} key={model.title}>
              <span className="model-label">{model.label}</span>
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              <ul>{model.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul>
              <Link className={index === 1 ? "button button-accent" : "button button-ghost"} href="/contact">Book a call <ArrowUpRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section showcase">
        <div className="section-wrap">
          <SectionHeading eyebrow="Showcase" title="Work we are" accent="proud of." text="Live launches for our clients and the products we are building in house." />
        </div>
        <div className="showcase-track" tabIndex={0} aria-label="Project showcase, scroll sideways">
          {projects.map((project, index) => (
            <Link className="showcase-card" href={project.url ?? "/work"} key={project.title} {...(project.url && { target: "_blank", rel: "noopener noreferrer" })}>
              {project.image
                ? <div className="showcase-image" style={{ backgroundImage: `url("${project.image}")` }}></div>
                : <div className="showcase-image"><ProjectCover title={project.title} status={project.status} /></div>}
              <div className="showcase-info">
                <span>0{index + 1} · {project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ArrowUpRight className="showcase-arrow" size={22} />
            </Link>
          ))}
          <Link className="showcase-card showcase-all" href="/work"><span>See all work</span><ArrowUpRight size={30} /></Link>
        </div>
      </section>

      <section className="section-wrap home-section">
        <SectionHeading center eyebrow="How we work" title="A process designed for" accent="clarity." />
        <ol className="process-grid">
          {processSteps.map((step, index) => (
            <li className="process-step" key={step.title} style={{ "--i": index } as CSSProperties}>
              <span>Step 0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-wrap home-section tech-section">
        <div>
          <p className="eyebrow pill">Tech stack</p>
          <h2>Modern tools, <span>proven at scale.</span></h2>
          <p>Drag the sphere to explore the technologies our engineers use every day.</p>
        </div>
        <TechSphere items={technologies} />
      </section>

      <section className="section-wrap home-section">
        <SectionHeading center eyebrow="Our values" title="What drives every" accent="line of code." />
        <div className="value-grid">
          {values.map((value, index) => (
            <article className="value-card" key={value.title}>
              <span>0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap home-section" id="estimate">
        <SectionHeading center eyebrow="Project cost estimator" title="Estimate your project in" accent="60 seconds." />
        <CostEstimator />
      </section>

      <section className="section-wrap home-section faq-section">
        <SectionHeading center eyebrow="FAQ" title="Questions," accent="answered." />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} open={index === 0}>
              <summary>{faq.question}<Plus size={18} /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-wrap cta-band">
        <div className="cta-card">
          <h2>Ready to build <span>what&apos;s next?</span></h2>
          <p>Tell us about your idea. We will reply within one business day with a clear plan, timeline and estimate.</p>
          <div className="hero-actions">
            <Link className="button button-accent" href="/contact">Get started <ArrowUpRight size={17} /></Link>
            <Link className="button button-ghost" href="mailto:info@scalebbd.com">info@scalebbd.com</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
