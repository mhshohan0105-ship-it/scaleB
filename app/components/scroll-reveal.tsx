"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const targets = [
  "main h1", "main h2", "main h3", "main p", "main .eyebrow",
  ".service-row", ".project-grid", ".blog-featured", ".blog-card", ".blog-cover-article",
  ".module-link", ".stat", ".button", ".text-link", ".contact-form > *", ".blog-filters", ".project-filters",
  ".footer-main > *", ".footer-bottom",
].join(", ");

// Elements that already animate on load, or live in the first screen, are left alone.
const skipped = ".hero, .module-hero, .blog-back, .hero-intro, .hero-line, .module-content .service-list";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const candidates = Array.from(document.querySelectorAll<HTMLElement>(targets)).filter((element) => !element.closest(skipped));
    // Only animate the outermost match so nested text does not animate twice.
    const elements = candidates.filter((element) => !candidates.some((other) => other !== element && other.contains(element)));
    const hidden = elements.filter((element) => element.getBoundingClientRect().top > window.innerHeight * 0.92);

    const finish = (event: TransitionEvent) => {
      const element = event.currentTarget as HTMLElement;
      if (event.target !== element || event.propertyName !== "transform") return;
      element.classList.remove("reveal", "is-visible");
      element.style.removeProperty("--reveal-delay");
      element.removeEventListener("transitionend", finish);
    };

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      visible.forEach((entry, index) => {
        const element = entry.target as HTMLElement;
        element.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 90}ms`);
        element.addEventListener("transitionend", finish);
        element.classList.add("is-visible");
        observer.unobserve(element);
      });
    }, { rootMargin: "0px 0px -8% 0px" });

    hidden.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      hidden.forEach((element) => {
        element.classList.remove("reveal", "is-visible");
        element.removeEventListener("transitionend", finish);
      });
    };
  }, [pathname]);

  return null;
}
