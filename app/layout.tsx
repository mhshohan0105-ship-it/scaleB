import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

export const metadata: Metadata = {
  title: "ScaleB | Digital products, custom software & engineering",
  description: "ScaleB is an independent digital technology and custom software studio building thoughtful products, platforms, and experiences for ambitious teams.",
  openGraph: {
    title: "ScaleB | Built for what's next",
    description: "Digital products, custom software, and thoughtful engineering for ambitious teams.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
