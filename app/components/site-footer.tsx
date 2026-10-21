import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { navItems, office, services } from "../site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <Link className="wordmark wordmark-footer" href="/" aria-label="ScaleB home"><Image className="theme-dark-only" src="/scaleb-logo-light.png" alt="ScaleB" width={1599} height={371} sizes="150px" /><Image className="theme-light-only" src="/scaleb-logo-dark.png" alt="ScaleB" width={1599} height={371} sizes="150px" /></Link>
          <p>Good technology, made with good people. Strategy, design, engineering and growth for ambitious teams.</p>
          <Link className="button button-accent" href="/contact">Start a project <ArrowUpRight size={17} /></Link>
        </div>
        <nav className="footer-col" aria-label="Footer navigation">
          <h2>Company</h2>
          {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-col">
          <h2>Services</h2>
          {services.slice(0, 6).map((service) => <Link href="/services" key={service.title}>{service.title}</Link>)}
        </div>
        <div className="footer-col">
          <h2>Say hello</h2>
          <Link href="mailto:hello@scaleb.com">hello@scaleb.com</Link>
          <Link href={office.phoneHref}>{office.phone}</Link>
          <address className="footer-address">{office.name}<br />{office.address}</address>
        </div>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {new Date().getFullYear()} ScaleB Studio</span>
        <span>Thoughtfully built for what&apos;s next.</span>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
