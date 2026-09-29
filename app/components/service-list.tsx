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

export default function ServiceList({ limit }: { limit?: number }) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="service-list">
      {visibleServices.map((service, index) => {
        const Icon = serviceIcons[index];
        return (
          <article className="service-row" key={service.title} style={{ "--i": index } as CSSProperties}>
            <span className="service-number">0{index + 1}</span>
            <span className="service-icon"><Icon size={26} strokeWidth={1.7} /></span>
            <div className="service-copy"><h2>{service.title}</h2><p>{service.description}</p></div>
            <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <Link className="round-link" href="/contact" aria-label={`Discuss ${service.title}`}><ArrowUpRight size={18} /></Link>
          </article>
        );
      })}
    </div>
  );
}