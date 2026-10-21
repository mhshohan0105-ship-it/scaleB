import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import ScrollReveal from "./components/scroll-reveal";
import IntroLoader from "./components/intro-loader";

export const metadata: Metadata = {
  title: "ScaleB | Digital products, custom software & engineering",
  description: "ScaleB is an independent digital technology and custom software studio building thoughtful products, platforms and experiences for ambitious teams.",
  openGraph: {
    title: "ScaleB | Built for what's next",
    description: "Digital products, custom software and thoughtful engineering for ambitious teams.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="intro-pending" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body id="top">
        {/* Applies the saved theme before first paint so light mode never flashes dark. */}
        <Script id="theme-init" strategy="beforeInteractive">{`try{if(localStorage.getItem("scaleb-theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`}</Script>
        <IntroLoader />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
