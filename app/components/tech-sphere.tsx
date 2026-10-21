"use client";

import { useEffect, useRef } from "react";

export default function TechSphere({ items }: { items: string[] }) {
  const box = useRef<HTMLDivElement>(null);
  const tags = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const element = box.current;
    if (!element) return;

    // Spread the tags evenly over a sphere (Fibonacci lattice).
    const points = items.map((_, index) => {
      const y = 1 - (index / (items.length - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * index;
      return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
    });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let angleX = 0.3;
    let angleY = 0;
    let speedX = 0;
    let speedY = reduced ? 0 : 0.004;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let frame = 0;

    const render = () => {
      const size = element.clientWidth / 2.6;
      const [cosX, sinX, cosY, sinY] = [Math.cos(angleX), Math.sin(angleX), Math.cos(angleY), Math.sin(angleY)];
      points.forEach((point, index) => {
        const x1 = point.x * cosY - point.z * sinY;
        const z1 = point.x * sinY + point.z * cosY;
        const y2 = point.y * cosX - z1 * sinX;
        const z2 = point.y * sinX + z1 * cosX;
        const depth = (z2 + 1.4) / 2.4;
        const tag = tags.current[index];
        if (!tag) return;
        tag.style.transform = `translate(-50%, -50%) translate3d(${(x1 * size).toFixed(1)}px, ${(y2 * size).toFixed(1)}px, 0) scale(${(0.6 + depth * 0.55).toFixed(3)})`;
        tag.style.opacity = (0.25 + depth * 0.75).toFixed(3);
        tag.style.zIndex = String(Math.round(depth * 100));
      });
    };

    const tick = () => {
      angleY += speedY;
      angleX += speedX;
      if (!dragging) {
        speedY += ((reduced ? 0 : 0.004) - speedY) * 0.03;
        speedX *= 0.95;
      }
      render();
      frame = requestAnimationFrame(tick);
    };

    const down = (event: PointerEvent) => {
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      element.setPointerCapture(event.pointerId);
    };
    const move = (event: PointerEvent) => {
      if (!dragging) return;
      speedY = (event.clientX - lastX) * 0.004;
      speedX = (event.clientY - lastY) * -0.004;
      lastX = event.clientX;
      lastY = event.clientY;
    };
    const up = () => { dragging = false; };

    element.addEventListener("pointerdown", down);
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerup", up);
    element.addEventListener("pointercancel", up);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointerdown", down);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerup", up);
      element.removeEventListener("pointercancel", up);
    };
  }, [items]);

  return (
    <div className="tech-sphere" ref={box} role="img" aria-label={`Technologies we use: ${items.join(", ")}`}>
      {items.map((item, index) => (
        <span aria-hidden="true" key={item} ref={(node) => { tags.current[index] = node; }}>{item}</span>
      ))}
    </div>
  );
}
