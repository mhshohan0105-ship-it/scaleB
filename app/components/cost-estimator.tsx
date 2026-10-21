"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { estimator } from "../site-data";
import { sendForm } from "../send-form";

const roundTo = (value: number, step: number) => Math.round(value / step) * step;
const usd = (value: number) => `$${value.toLocaleString("en-US")}`;
const bdt = (value: number) => `৳${roundTo(value * estimator.usdToBdt, 500).toLocaleString("en-IN")}`;

export default function CostEstimator() {
  const [type, setType] = useState(1);
  const [features, setFeatures] = useState<number[]>([0, 2]);
  const [design, setDesign] = useState(1);
  const [timeline, setTimeline] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [started] = useState(() => String(Date.now()));

  const featureCost = features.reduce((sum, index) => sum + estimator.features[index].cost, 0);
  const total = (estimator.types[type].base + featureCost) * estimator.designs[design].factor * estimator.timelines[timeline].factor;
  const low = roundTo(total * 0.85, 10);
  const high = roundTo(total * 1.25, 10);
  const weeks = Math.max(2, Math.round((total / 88 + 1) * estimator.timelines[timeline].pace));

  function toggleFeature(index: number) {
    setFeatures((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const details = [
      `Project type: ${estimator.types[type].label}`,
      `Features: ${features.length ? features.map((index) => estimator.features[index].label).join(", ") : "None selected"}`,
      `Design level: ${estimator.designs[design].label}`,
      `Timeline: ${estimator.timelines[timeline].label}`,
      `Estimate shown: ${usd(low)} to ${usd(high)} (${bdt(low)} to ${bdt(high)}), about ${weeks} weeks`,
    ].join("\n");
    setStatus("sending");
    setError("");
    try {
      await sendForm({ ...data, form: "estimate", details, started });
      setStatus("sent");
    } catch (sendError) {
      setError((sendError as Error).message);
      setStatus("idle");
    }
  }

  return (
    <div className="estimator">
      <div className="estimator-steps">
        <fieldset>
          <legend><span>1</span> Project type</legend>
          <div className="choice-grid">
            {estimator.types.map((option, index) => (
              <button aria-pressed={type === index} className="choice" key={option.label} onClick={() => setType(index)} type="button">{option.label}</button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend><span>2</span> Features</legend>
          <div className="choice-grid">
            {estimator.features.map((option, index) => (
              <button aria-pressed={features.includes(index)} className="choice choice-check" key={option.label} onClick={() => toggleFeature(index)} type="button">
                <i>{features.includes(index) && <Check size={12} strokeWidth={3} />}</i>{option.label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend><span>3</span> Design level</legend>
          <div className="choice-grid choice-grid-3">
            {estimator.designs.map((option, index) => (
              <button aria-pressed={design === index} className="choice" key={option.label} onClick={() => setDesign(index)} type="button">{option.label}</button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend><span>4</span> Timeline</legend>
          <div className="choice-grid choice-grid-3">
            {estimator.timelines.map((option, index) => (
              <button aria-pressed={timeline === index} className="choice" key={option.label} onClick={() => setTimeline(index)} type="button">{option.label}</button>
            ))}
          </div>
        </fieldset>
      </div>

      <aside className="estimate-card" aria-live="polite">
        <p className="eyebrow">Estimated budget</p>
        <strong className="estimate-usd">{usd(low)} to {usd(high)}</strong>
        <span className="estimate-bdt">{bdt(low)} to {bdt(high)}</span>
        <span className="estimate-time">About {weeks} weeks</span>
        <p className="estimate-note">This is an indicative range. Get a detailed fixed scope proposal for free.</p>
        {status === "sent" ? (
          <div className="estimate-sent" role="status"><Check size={18} /> Thanks. We got your request and will send a detailed proposal within one business day.</div>
        ) : (
          <form className="estimate-form" onSubmit={handleSubmit}>
            <input aria-label="Full name" autoComplete="name" name="name" placeholder="Full name" required />
            <input aria-label="Email" autoComplete="email" name="email" placeholder="Email" required type="email" />
            <input aria-label="Phone" autoComplete="tel" name="phone" placeholder="Phone" type="tel" />
            <input aria-hidden="true" autoComplete="off" className="form-trap" name="website" tabIndex={-1} />
            {error && <p className="form-error" role="alert">{error}</p>}
            <button className="button button-accent" disabled={status === "sending"} type="submit">{status === "sending" ? <>Sending <LoaderCircle className="spin" size={17} /></> : <>Get my detailed proposal <ArrowUpRight size={17} /></>}</button>
          </form>
        )}
      </aside>
    </div>
  );
}
