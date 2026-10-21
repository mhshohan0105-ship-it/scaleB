"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectCover from "./components/project-cover";

type Project = {
  title: string;
  category: string;
  type: string;
  description: string;
  image?: string;
  accent: string;
  url?: string;
  status?: string;
};

export default function Projects({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("All work");
  const filters = ["All work", ...new Set(projects.map((project) => project.category))];
  const visibleProjects = activeFilter === "All work"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={activeFilter === filter ? "filter-button active" : "filter-button"}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <article className={`project-card project-${project.accent}`} key={project.title}>
            <div className="project-image" role="img" aria-label={`${project.category} project preview`} style={project.image ? { backgroundImage: `url("${project.image}")` } : undefined}>
              {!project.image && <ProjectCover title={project.title} status={project.status} />}
              <span className="project-index">0{index + 1} / 0{projects.length}</span>
              <span className="project-image-tag">{project.category}</span>
              {project.url && <a className="project-open" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}><ArrowUpRight size={18} /></a>}
            </div>
            <div className="project-info"><div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p></div><ArrowUpRight className="project-arrow" size={20} /></div>
          </article>
        ))}
      </div>
    </>
  );
}
