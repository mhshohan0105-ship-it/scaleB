type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="module-hero section-wrap">
      <p className="eyebrow hero-intro">{eyebrow}</p>
      <h1><span className="hero-line"><span>{title}</span></span></h1>
      <p className="module-description hero-intro">{description}</p>
    </section>
  );
}