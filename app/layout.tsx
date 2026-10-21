import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import ScrollReveal from "./components/scroll-reveal";
import IntroLoader from "./components/intro-loader";
import { office, services, siteUrl } from "./site-data";

const description = "ScaleB is a software, web and mobile app development company in Banani, Dhaka. We design, build and grow custom software, websites, apps and AI solutions for ambitious teams.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ScaleB | Software, Web & App Development Company in Dhaka",
    template: "%s | ScaleB",
  },
  description,
  applicationName: "ScaleB",
  keywords: ["ScaleB", "Scale B", "ScaleB BD", "scalebbd", "software company in Dhaka", "web development Bangladesh", "app development Bangladesh", "custom software", "digital agency Banani"],
  authors: [{ name: "ScaleB", url: siteUrl }],
  creator: "ScaleB",
  publisher: "ScaleB",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    siteName: "ScaleB",
    locale: "en_US",
    title: "ScaleB | Your One Stop Digital Solutions",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleB | Your One Stop Digital Solutions",
    description,
  },
};

// Tells Google the brand name, logo, website and the Banani office, so "ScaleB" searches resolve to this site.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "ScaleB",
      alternateName: ["Scale B", "ScaleB BD", "scalebbd"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "ScaleB",
      alternateName: ["Scale B", "ScaleB BD"],
      url: `${siteUrl}/`,
      logo: `${siteUrl}/scaleb-logo.jpeg`,
      image: `${siteUrl}/opengraph-image.png`,
      description,
      telephone: office.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Huda Apartment (3rd Floor), House 59, Road 4, Block C",
        addressLocality: "Banani, Dhaka",
        postalCode: "1213",
        addressCountry: "BD",
      },
      areaServed: "Worldwide",
      knowsAbout: services.map((service) => service.title),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="intro-pending" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body id="top">
        {/* Applies the saved theme before first paint so light mode never flashes dark. */}
        <Script id="theme-init" strategy="beforeInteractive">{`try{if(localStorage.getItem("scaleb-theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <IntroLoader />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
