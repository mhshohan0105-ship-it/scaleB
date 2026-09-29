import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroVisual from "./components/hero-visual";
import ServiceList from "./components/service-list";

export const metadata: Metadata = {
  title: "ScaleB | Digital products, custom software & engineering",
  description: "ScaleB builds thoughtful digital products, custom software and experiences for ambitious teams.",
};

export default function Home() {
  return (
    <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow hero-intro"><span className="status-dot"></span> Your one stop digital solution</p>
            <h1><span className="hero-line"><span>ScaleB builds</span></span><span className="hero-line"><span>what&apos;s <span className="hero-accent">next.</span></span></span></h1>
            <p className="hero-lede hero-intro">We turn ambitious ideas into thoughtful digital products, custom software and experiences that move businesses forward.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/contact">Start a project <ArrowUpRight size={17} /></Link>
              <Link className="text-link" href="/work">Explore our work <ArrowDown size={16} /></Link>
            </div>
            <div className="hero-note"><span>01</span><span>Strategy, design & technology<br />working as one.</span></div>
          </div>
          <HeroVisual />
          <div className="hero-side-note">INDEPENDENT BY DESIGN <span>·</span> BUILT TO SCALE</div>
        </section>

        <section className="trust-band" aria-label="ScaleB capabilities">
          <div className="trust-marquee">
            <div className="trust-track">
              {[0, 1].map((group) => (
                <div className="trust-group" key={group}>
                  {[0, 1, 2].map((repeat) => (
                    <div className="trust-set" aria-hidden={group > 0 || repeat > 0} key={repeat}><span className="trust-label">ONE PARTNER, END TO END</span><i></i><span>Strategy</span><i></i><span>Design</span><i></i><span>Engineering</span><i></i><span>Growth</span><i></i></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-services section-wrap">
          <div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Good ideas deserve<br />great <span>execution.</span></h2></div><p>Strategy, design, engineering and growth working together from the first question to launch and beyond.</p></div>
          <ServiceList limit={3} />
          <Link className="button button-dark home-more-link" href="/services">Explore all services <ArrowUpRight size={17} /></Link>
        </section>

        <section className="home-modules">
          <div className="section-wrap">
            <div className="section-heading"><div><p className="eyebrow">Explore ScaleB</p><h2>Built around<br />your <span>next move.</span></h2></div><p>Get to know the work, people, process and expertise behind every product we build.</p></div>
            <div className="module-links">
              <Link className="module-link" href="/work"><span>01 / SELECTED WORK</span><strong>See what we build</strong><ArrowUpRight size={20} /></Link>
              <Link className="module-link" href="/about"><span>02 / ABOUT SCALEB</span><strong>Meet your partner</strong><ArrowUpRight size={20} /></Link>
              <Link className="module-link" href="/blog"><span>03 / THE BLOG</span><strong>Read our latest thinking</strong><ArrowUpRight size={20} /></Link>
            </div>
          </div>
        </section>
      </main>
  );
}
