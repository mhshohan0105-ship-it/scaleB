"use client";

import { useRef, type PointerEvent } from "react";
import Image from "next/image";
import { Cloud, Code2, Cpu, Smartphone } from "lucide-react";

const chips = [
  { label: "Software", Icon: Code2 },
  { label: "Mobile", Icon: Smartphone },
  { label: "Cloud", Icon: Cloud },
  { label: "AI", Icon: Cpu },
];

export default function HeroVisual() {
  const stage = useRef<HTMLDivElement>(null);

  function tilt(event: PointerEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    stage.current?.style.setProperty("--rx", `${(-y * 14).toFixed(2)}deg`);
    stage.current?.style.setProperty("--ry", `${(x * 18).toFixed(2)}deg`);
  }

  function reset() {
    stage.current?.style.setProperty("--rx", "0deg");
    stage.current?.style.setProperty("--ry", "0deg");
  }

  return (
    <div className="hero-visual" onPointerMove={tilt} onPointerLeave={reset} aria-hidden="true">
      <div className="hero-stage" ref={stage}>
        <div className="hero-glow"></div>
        <div className="hero-rings">{[0, 1, 2, 3].map((ring) => <span key={ring}></span>)}</div>
        <div className="hero-orbit">
          {chips.map(({ label, Icon }) => <span className="hero-chip" key={label}><Icon size={15} /> {label}</span>)}
        </div>
        <Image className="hero-mark theme-dark-only" src="/scaleb-mark.png" alt="" width={464} height={371} sizes="200px" loading="eager" fetchPriority="high" />
        <Image className="hero-mark theme-light-only" src="/scaleb-mark-dark.png" alt="" width={464} height={371} sizes="200px" loading="eager" />
        <div className="hero-code">
          <span>&lt;ScaleB /&gt;</span>
          <span>build()</span>
          <span>{"{ scale: true }"}</span>
        </div>
      </div>
    </div>
  );
}
