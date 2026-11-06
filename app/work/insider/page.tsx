import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpenCheck, Check, LayoutDashboard, MessageCircle, Plus, QrCode, ReceiptText, RotateCcw, UsersRound, X } from "lucide-react";
import SectionHeading from "../../components/section-heading";
import { office } from "../../site-data";
import DemoForm from "./demo-form";

const description = "ScaleB Insider is a management and accounting web app for travel agencies. One app and one set of books for tickets, visas, refunds and invoices.";

export const metadata: Metadata = {
  title: { absolute: "ScaleB Insider | Travel Agency Management and Accounting Software" },
  description,
  alternates: { canonical: "/work/insider/" },
};

const before = [
  "Sales in one Excel sheet and payments in another",
  "Refunds tracked on paper or from memory",
  "Dues you only find when you go looking",
  "Reports matched by hand at the end of the month",
];

const after = [
  "Tickets, visas, refunds and invoices in one set of books",
  "Refunds that follow clear steps",
  "A dashboard with sales, collection and dues",
  "Reports that come straight from your accounts",
];

const features = [
  { Icon: ReceiptText, title: "Invoices for every sale", text: "Air ticket, visa, reissue and item invoices. Add a new client or pick an existing one right on the invoice." },
  { Icon: QrCode, title: "PDF invoices in your name", text: "Every PDF carries your agency's logo and address, along with a QR code." },
  { Icon: RotateCcw, title: "Step by step refunds", text: "Refunds move through a guided flow, so nothing gets missed along the way." },
  { Icon: BookOpenCheck, title: "Accounting and reports", text: "Double entry accounting underneath, with a searchable reports home to find what you need." },
  { Icon: LayoutDashboard, title: "A clear dashboard", text: "See sales, collection and dues together as soon as you open the app." },
  { Icon: UsersRound, title: "Staff roles, any screen", text: "Roles and permissions decide who can see and do what. A phone layout keeps it usable on the move." },
];

const screens = [
  { src: "/work/insider/invoices.webp", title: "Invoices", text: "Every invoice with what was received and what is still due." },
  { src: "/work/insider/refund.webp", title: "Refunds", text: "Refunds move through three clear steps." },
  { src: "/work/insider/report.webp", title: "Reports", text: "Profit and loss with print and Excel export." },
  { src: "/work/insider/pdf.webp", title: "PDF invoice", text: "Your agency's details and a QR code on every PDF." },
];

const questions = [
  { question: "Who is ScaleB Insider for?", answer: "Travel agencies that sell air tickets and visas and want their sales, refunds, invoices and accounts in one place." },
  { question: "Do I need to install anything?", answer: "No. It is a web app that runs in your browser on a computer or a phone." },
  { question: "Can I see it before deciding?", answer: "Yes. We give each agency a personal demo. Send the form below and we will call you to set it up." },
  { question: "How much does it cost?", answer: "We do not publish prices yet. Ask us during your demo and we will talk through what fits your agency." },
  { question: "Can each staff member have their own access?", answer: "Yes. Roles and permissions let you decide what each person can see and do." },
  { question: "Will invoices show my agency's details?", answer: "Yes. PDF invoices carry your agency's logo and address." },
];

const whatsappLink = `${office.whatsappHref}?text=${encodeURIComponent("Hi ScaleB, I would like a demo of ScaleB Insider.")}`;

export default function InsiderPage() {
  return (
    <main className="module-page">
      <section className="module-hero section-wrap">
        <p className="eyebrow pill hero-intro">ScaleB Insider</p>
        <h1><span className="hero-line"><span>Run your travel agency from one place.</span></span></h1>
        <p className="module-description hero-intro">{description}</p>
        <div className="hero-actions insider-actions hero-intro">
          <a className="button button-accent" href="#demo">Request a demo <ArrowUpRight size={17} /></a>
          <a className="button button-ghost" href="#features">See what it does</a>
        </div>
      </section>

      <section className="section-wrap home-section">
        <SectionHeading center eyebrow="Why Insider" title="Your books should not live in" accent="five places." text="Most agencies split their work across Excel sheets and paper books. Insider brings it into one system." />
        <div className="model-grid insider-compare">
          <article className="model-card">
            <span className="model-label">Excel and paper</span>
            <h3>Today</h3>
            <ul>{before.map((item) => <li key={item}><X className="insider-x" size={15} /> {item}</li>)}</ul>
          </article>
          <article className="model-card model-card-featured">
            <span className="model-label">ScaleB Insider</span>
            <h3>One system</h3>
            <ul>{after.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="section-wrap home-section" id="features">
        <SectionHeading center eyebrow="What it does" title="Built for how agencies" accent="really work." />
        <div className="service-grid">
          {features.map(({ Icon, title, text }, index) => (
            <article className="service-card" key={title} style={{ "--i": index } as CSSProperties}>
              <div className="service-card-top">
                <span className="service-icon"><Icon size={26} strokeWidth={1.7} /></span>
                <span className="service-number">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap home-section">
        <SectionHeading center eyebrow="Screenshots" title="A look" accent="inside." text="These screens show sample data, not a real agency." />
        <div className="insider-shots insider-shots-lead">
          <figure className="insider-shot">
            <Image src="/work/insider/dashboard.webp" alt="ScaleB Insider dashboard with sales, collection and dues" width={1600} height={1000} sizes="(max-width: 720px) 100vw, 900px" />
            <figcaption><strong>Dashboard</strong> Sales, collection and dues as soon as you open the app.</figcaption>
          </figure>
          <figure className="insider-shot">
            <Image src="/work/insider/phone.webp" alt="ScaleB Insider dashboard on a phone" width={720} height={1558} sizes="(max-width: 720px) 70vw, 280px" />
            <figcaption><strong>On a phone</strong> The same app on a small screen.</figcaption>
          </figure>
        </div>
        <div className="insider-shots">
          {screens.map((screen) => (
            <figure className="insider-shot" key={screen.src}>
              <Image src={screen.src} alt={`ScaleB Insider: ${screen.title}`} width={1600} height={1000} sizes="(max-width: 720px) 100vw, 600px" />
              <figcaption><strong>{screen.title}</strong> {screen.text}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-wrap home-section faq-section">
        <SectionHeading center eyebrow="FAQ" title="Questions," accent="answered." />
        <div className="faq-list">
          {questions.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary>{item.question}<Plus size={18} /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact section-wrap home-section" id="demo">
        <div className="contact-copy">
          <p className="eyebrow">Request a demo</p>
          <h2>See it with <span>your own work.</span></h2>
          <p>Tell us a little about your agency. We will call you and walk you through ScaleB Insider in person.</p>
          <a className="button button-ghost" href={whatsappLink} rel="noopener noreferrer" target="_blank"><MessageCircle size={17} /> Chat on WhatsApp</a>
        </div>
        <DemoForm />
      </section>
    </main>
  );
}
