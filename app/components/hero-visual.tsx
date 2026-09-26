import { Braces, Sparkles } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="ScaleB digital product dashboard concept">
      <div className="visual-topline"><span><i></i><i></i><i></i></span><span>SCALEB / PRODUCT SYSTEMS</span><span>↗</span></div>
      <div className="visual-heading"><div><span className="visual-label">LIVE / OVERVIEW</span><h2>Momentum<br />in motion.</h2></div><div className="orbit-mark" aria-hidden="true"><span></span><span></span><span></span><b>SB</b></div></div>
      <div className="visual-chart" aria-hidden="true">
        <div className="chart-grid"><span>100</span><span>75</span><span>50</span><span>25</span></div>
        <div className="chart-bars">{[30, 43, 38, 58, 49, 72, 63, 85, 78, 100, 91, 118].map((height, index) => <i key={index} style={{ height: `${height}px` }} />)}</div>
        <div className="chart-caption"><span>PRODUCT VELOCITY</span><strong>+38.6%</strong></div>
      </div>
      <div className="visual-footer"><span><Sparkles size={14} /> Built around your next move</span><span>SCALB.™</span></div>
      <div className="floating-tag"><span>BUILD / 2025</span><Braces size={18} /></div>
    </div>
  );
}