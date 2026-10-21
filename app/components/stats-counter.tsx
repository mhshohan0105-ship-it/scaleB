"use client";

import { useEffect, useRef, useState } from "react";
import { Clock3, Code2, Layers, Users } from "lucide-react";

type Stat = { value: string; label: string };

const icons = [Layers, Users, Code2, Clock3];

// Splits "100%" into 100 and "%", so only the number counts up.
function parse(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  return match ? { target: Number(match[1]), suffix: match[2] } : { target: 0, suffix: value };
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  const box = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = box.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (reduced) {
        setProgress(1);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1800, 1);
        setProgress(1 - Math.pow(1 - t, 3));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={progress === 1 ? "stats-card is-done" : "stats-card"} ref={box}>
      {stats.map((stat, index) => {
        const { target, suffix } = parse(stat.value);
        const Icon = icons[index % icons.length];
        return (
          <div className="home-stat" key={stat.label}>
            <span className="home-stat-icon"><Icon size={20} /></span>
            <strong aria-label={stat.value}><span aria-hidden="true">{Math.round(target * progress)}{suffix}</span></strong>
            <span>{stat.label}</span>
            <i className="home-stat-bar" style={{ transform: `scaleX(${progress})` }}></i>
          </div>
        );
      })}
    </div>
  );
}
