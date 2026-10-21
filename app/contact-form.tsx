"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { sendForm } from "./send-form";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [started] = useState(() => String(Date.now()));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      await sendForm({ ...data, form: "contact", started });
      form.reset();
      setStatus("sent");
    } catch (sendError) {
      setError((sendError as Error).message);
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return <div className="form-success" role="status"><span><Check size={21} /></span><h3>Thanks for reaching out.</h3><p>Your message is in our inbox. We will get back to you within one business day.</p><button className="text-link" onClick={() => setStatus("idle")} type="button">Send another message <ArrowUpRight size={16} /></button></div>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your name<input autoComplete="name" name="name" placeholder="Alex Morgan" required /></label>
        <label>Work email<input autoComplete="email" name="email" placeholder="alex@company.com" required type="email" /></label>
      </div>
      <label>Phone (optional)<input autoComplete="tel" name="phone" placeholder="+880 1XXX XXXXXX" type="tel" /></label>
      <label>What are you looking to build?<select defaultValue="" name="service" required><option disabled value="">Choose a service</option><option>Custom software</option><option>Product design & strategy</option><option>Web or mobile app</option><option>Cloud, AI or automation</option><option>Something else</option></select></label>
      <label>A little about your project<textarea name="message" placeholder="The idea, the challenge, the opportunity..." required rows={3} /></label>
      {/* Hidden from people; bots that fill it are ignored by the mailer. */}
      <input aria-hidden="true" autoComplete="off" className="form-trap" name="website" tabIndex={-1} />
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="form-submit-row"><p>We usually reply within one business day.</p><button className="button button-accent" disabled={status === "sending"} type="submit">{status === "sending" ? <>Sending <LoaderCircle className="spin" size={17} /></> : <>Send your note <ArrowUpRight size={17} /></>}</button></div>
    </form>
  );
}
