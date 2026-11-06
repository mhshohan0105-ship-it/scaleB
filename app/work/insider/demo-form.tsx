"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { sendForm } from "../../send-form";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [started] = useState(() => String(Date.now()));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      await sendForm({ ...data, form: "demo", started });
      setStatus("sent");
    } catch (sendError) {
      setError((sendError as Error).message);
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return <div className="form-success" role="status"><span><Check size={21} /></span><h3>Thanks. We got your request.</h3><p>We will call you within one business day to set up your personal demo.</p></div>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your name<input autoComplete="name" name="name" required /></label>
        <label>Agency name<input autoComplete="organization" name="agency" required /></label>
      </div>
      <div className="form-row">
        <label>Mobile or WhatsApp<input autoComplete="tel" name="phone" placeholder="+880 1XXX XXXXXX" required type="tel" /></label>
        <label>City<input autoComplete="address-level2" name="city" required /></label>
      </div>
      <div className="form-row">
        <label>Email (optional)<input autoComplete="email" name="email" type="email" /></label>
        <label>Number of staff (optional)<select defaultValue="" name="staff"><option value="">Choose one</option><option>1 to 5</option><option>6 to 15</option><option>16 or more</option></select></label>
      </div>
      <label>What do you use now? (optional)<input name="current_tool" placeholder="Excel, paper books, other software..." /></label>
      <label>Message (optional)<textarea name="message" rows={3} /></label>
      {/* Hidden from people; bots that fill it are ignored by the mailer. */}
      <input aria-hidden="true" autoComplete="off" className="form-trap" name="website" tabIndex={-1} />
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="form-submit-row"><p>We will never ask for passwords or payment details here.</p><button className="button button-accent" disabled={status === "sending"} type="submit">{status === "sending" ? <>Sending <LoaderCircle className="spin" size={17} /></> : <>Request a demo <ArrowUpRight size={17} /></>}</button></div>
    </form>
  );
}
