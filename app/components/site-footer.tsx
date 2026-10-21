import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { navItems, office, services, socials } from "../site-data";

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
          <Link href="mailto:info@scalebbd.com">info@scalebbd.com</Link>
          <Link href={office.phoneHref}>{office.phone}</Link>
          <address className="footer-address">{office.name}<br />{office.address}</address>
          <div className="footer-socials">
            {socials.map((social) => (
              <a aria-label={`ScaleB on ${social.label}`} href={social.href} key={social.label} rel="noopener noreferrer" target="_blank">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" /></svg>
                {social.label}
              </a>
            ))}
          </div>
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
