import Image from "next/image";

// Branded cover for projects that do not have a screenshot yet.
export default function ProjectCover({ title, status }: { title: string; status?: string }) {
  return (
    <div className="project-cover" aria-hidden="true">
      <div className="project-cover-rings"><span></span><span></span><span></span></div>
      <Image className="project-cover-mark theme-dark-only" src="/scaleb-mark.png" alt="" width={464} height={371} sizes="120px" />
      <Image className="project-cover-mark theme-light-only" src="/scaleb-mark-dark.png" alt="" width={464} height={371} sizes="120px" />
      <strong>{title}</strong>
      {status && <span className="project-cover-status"><i></i>{status}</span>}
    </div>
  );
}
