import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import NavLinks from "./nav-links";
import ThemeToggle from "./theme-toggle";
import { navItems } from "../site-data";

export default function SiteHeader() {
  return (
    <div className="header-shell">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="ScaleB home">
          <Image className="theme-dark-only" src="/scaleb-logo-light.png" alt="ScaleB" width={1599} height={371} sizes="150px" loading="eager" fetchPriority="high" />
          <Image className="theme-light-only" src="/scaleb-logo-dark.png" alt="ScaleB" width={1599} height={371} sizes="150px" loading="eager" />
        </Link>
        <NavLinks />
        <div className="header-actions">
          <ThemeToggle />
          <Link className="header-cta" href="/contact">
            Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <details className="mobile-nav">
            <summary aria-label="Open navigation menu"><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
              <Link href="/contact">Let&apos;s talk <ArrowUpRight size={16} /></Link>
            </nav>
          </details>
        </div>
      </header>
    </div>
  );
}
