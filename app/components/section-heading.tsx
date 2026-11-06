type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accent: string;
  text?: string;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, accent, text, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? "section-heading section-heading-center" : "section-heading"}>
      <div><p className="eyebrow pill">{eyebrow}</p><h2>{title} <span>{accent}</span></h2></div>
      {text && <p>{text}</p>}
    </div>
  );
}
