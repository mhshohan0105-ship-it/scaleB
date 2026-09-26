import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <Link className="wordmark wordmark-footer" href="/" aria-label="ScaleB home"><Image src="/scaleb-logo.jpeg" alt="ScaleB" width={768} height={768} /></Link>
        <p>Good technology, made<br />with good people.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/approach">Approach</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="back-top" href="/">Back to home ↑</Link>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {new Date().getFullYear()} ScaleB Studio</span>
        <span>Thoughtfully built for what&apos;s next.</span>
        <Link href="mailto:hello@scaleb.com">hello@scaleb.com</Link>
      </div>
    </footer>
  );
}