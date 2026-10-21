"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../site-data";

const links = [...navItems, { label: "Contact", href: "/contact" }];

export default function NavLinks() {
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="desktop-nav" aria-label="Main navigation">
      {links.map((item, index) => (
        <Link
          aria-current={isActive(item.href) ? "page" : undefined}
          className={isActive(item.href) ? "nav-link is-active" : "nav-link"}
          href={item.href}
          key={item.href}
          style={{ "--i": index } as CSSProperties}
        >
          <span className="nav-label"><span data-text={item.label}>{item.label}</span></span>
        </Link>
      ))}
    </nav>
  );
}
