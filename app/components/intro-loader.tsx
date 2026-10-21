"use client";

import { useState, type AnimationEvent } from "react";
import Image from "next/image";

// Plays once per full page load. While it runs, <html> carries .intro-pending so the hero waits for it.
export default function IntroLoader() {
  const [done, setDone] = useState(false);

  function finish(event: AnimationEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    document.documentElement.classList.remove("intro-pending");
    setDone(true);
  }

  if (done) return null;

  return (
    <div className="intro-loader" aria-hidden="true" onAnimationEnd={finish}>
      <div className="intro-rings"><span></span><span></span><span></span></div>
      <Image className="intro-mark theme-dark-only" src="/scaleb-mark.png" alt="" width={464} height={371} sizes="80px" loading="eager" />
      <Image className="intro-mark theme-light-only" src="/scaleb-mark-dark.png" alt="" width={464} height={371} sizes="80px" loading="eager" />
    </div>
  );
}
