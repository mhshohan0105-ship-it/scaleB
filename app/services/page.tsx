import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";
import ServiceList from "../components/service-list";

export const metadata: Metadata = {
  title: "Services | ScaleB",
  description: "Custom software, product strategy, web and mobile apps, cloud, applied AI, quality engineering, digital marketing and content creation from ScaleB.",
};

export default function ServicesPage() {
  return (
    <main className="module-page">
      <PageIntro eyebrow="Services / 01" title="Good ideas deserve great execution." description="One senior, collaborative team for strategy, design, software engineering, marketing and the content that helps you grow after launch." />
      <section className="section-wrap module-content">
        <ServiceList />
      </section>
      <section className="module-cta section-wrap"><div><p className="eyebrow">Have a challenge in mind?</p><h2>Let&apos;s find the right way forward.</h2></div><Link className="button button-dark" href="/contact">Talk with our team <ArrowUpRight size={17} /></Link></section>
    </main>
  );
}