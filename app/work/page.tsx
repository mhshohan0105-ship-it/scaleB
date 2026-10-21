import type { Metadata } from "next";
import PageIntro from "../components/page-intro";
import Projects from "../projects";
import { projects } from "../site-data";

export const metadata: Metadata = {
  title: "Work | ScaleB",
  description: "Explore live launches and in house products from ScaleB.",
};

export default function WorkPage() {
  return (
    <main className="module-page">
      <PageIntro eyebrow="Work / 02" title="Digital products made for real life." description="Live launches for our clients and the products we are building in house. Each one starts with a real world challenge and a clear point of view." />
      <section className="section-wrap module-content work-page-content">
        <Projects projects={projects} />
      </section>
    </main>
  );
}