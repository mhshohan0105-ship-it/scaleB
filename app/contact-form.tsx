"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <div className="form-success" role="status"><span><Check size={21} /></span><h3>Thanks for reaching out.</h3><p>This demo form is validated, but it isn&apos;t connected to an inbox yet.</p><button className="text-link" onClick={() => setSubmitted(false)} type="button">Send another message <ArrowUpRight size={16} /></button></div>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your name<input autoComplete="name" name="name" placeholder="Alex Morgan" required /></label>
        <label>Work email<input autoComplete="email" name="email" placeholder="alex@company.com" required type="email" /></label>
      </div>
      <label>What are you looking to build?<select defaultValue="" name="service" required><option disabled value="">Choose a service</option><option>Custom software</option><option>Product design & strategy</option><option>Web or mobile app</option><option>Cloud, AI or automation</option><option>Something else</option></select></label>
      <label>A little about your project<textarea name="message" placeholder="The idea, the challenge, the opportunity..." required rows={3} /></label>
      <div className="form-submit-row"><p>We usually reply within two business days.</p><button className="button button-lime" type="submit">Send your note <ArrowUpRight size={17} /></button></div>
    </form>
  );
}