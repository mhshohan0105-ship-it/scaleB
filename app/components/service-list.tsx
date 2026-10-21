import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Clapperboard,
  Cloud,
  Code2,
  Cpu,
  Megaphone,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { services } from "../site-data";

const serviceIcons = [Code2, Blocks, Smartphone, Cloud, Cpu, ShieldCheck, Megaphone, Clapperboard];

export default function ServiceList({ limit, showTags = false }: { limit?: number; showTags?: boolean }) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="service-grid">
      {visibleServices.map((service, index) => {
        const Icon = serviceIcons[index];
        return (
          <article className="service-card" key={service.title} style={{ "--i": index } as CSSProperties}>
            <div className="service-card-top">
              <span className="service-icon"><Icon size={26} strokeWidth={1.7} /></span>
              <span className="service-number">0{index + 1}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {showTags && <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
            <Link className="service-more" href="/contact" aria-label={`Discuss ${service.title}`}>Learn more <ArrowUpRight size={16} /></Link>
          </article>
        );
      })}
    </div>
  );
}
