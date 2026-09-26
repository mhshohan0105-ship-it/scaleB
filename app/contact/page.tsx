import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import ContactForm from "../contact-form";
import PageIntro from "../components/page-intro";

export const metadata: Metadata = {
  title: "Contact | ScaleB",
  description: "Tell ScaleB about your digital product or custom software project.",
};

export default function ContactPage() {
  return (
    <main className="module-page">
      <PageIntro eyebrow="Contact / 05" title="Let’s make it happen." description="Tell us a little about what you’re building. We’ll get back to you with the right next step." />
      <section className="contact section-wrap contact-page-content">
        <div className="contact-copy"><p className="eyebrow">Start a conversation</p><h2>Have a good one in mind?</h2><p>Share the idea, the challenge, or the opportunity. We&apos;ll start from there.</p><a className="contact-email" href="mailto:hello@scaleb.com">hello@scaleb.com <ArrowUpRight size={17} /></a></div>
        <ContactForm />
      </section>
    </main>
  );
}