"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { estimator } from "../site-data";

const roundTo = (value: number, step: number) => Math.round(value / step) * step;
const usd = (value: number) => `$${value.toLocaleString("en-US")}`;
const bdt = (value: number) => `৳${roundTo(value * estimator.usdToBdt, 500).toLocaleString("en-IN")}`;

export default function CostEstimator() {
  const [type, setType] = useState(1);
  const [features, setFeatures] = useState<number[]>([0, 2]);
  const [design, setDesign] = useState(1);
  const [timeline, setTimeline] = useState(1);
  const [sent, setSent] = useState(false);

  const featureCost = features.reduce((sum, index) => sum + estimator.features[index].cost, 0);
  const total = (estimator.types[type].base + featureCost) * estimator.designs[design].factor * estimator.timelines[timeline].factor;
  const low = roundTo(total * 0.85, 10);
  const high = roundTo(total * 1.25, 10);
  const weeks = Math.max(2, Math.round((total / 88 + 1) * estimator.timelines[timeline].pace));

  function toggleFeature(index: number) {
    setFeatures((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
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
        {sent ? (
          <div className="estimate-sent" role="status"><Check size={18} /> Thanks. This demo form is not connected to an inbox yet.</div>
        ) : (
          <form className="estimate-form" onSubmit={handleSubmit}>
            <input aria-label="Full name" autoComplete="name" name="name" placeholder="Full name" required />
            <input aria-label="Email" autoComplete="email" name="email" placeholder="Email" required type="email" />
            <input aria-label="Phone" autoComplete="tel" name="phone" placeholder="Phone" type="tel" />
            <button className="button button-accent" type="submit">Get my detailed proposal <ArrowUpRight size={17} /></button>
          </form>
        )}
      </aside>
    </div>
  );
}
