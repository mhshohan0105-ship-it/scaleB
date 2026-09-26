import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "../site-data";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="ScaleB home">
        <Image src="/scaleb-logo.jpeg" alt="ScaleB" width={768} height={768} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
      </nav>
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
    </header>
  );
}