"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  accent: string;
};

const filters = ["All work", "Digital health", "Commerce", "SaaS platform"];

export default function Projects({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("All work");
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
            <div className="project-image" role="img" aria-label={`${project.category} project preview`} style={{ backgroundImage: `url("${project.image}")` }}>
              <span className="project-index">0{index + 1} / 0{projects.length}</span>
              <span className="project-image-tag">{project.category}</span>
              <a className="project-open" href="#contact" aria-label={`Discuss a project like ${project.title}`}><ArrowUpRight size={18} /></a>
            </div>
            <div className="project-info"><div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p></div><ArrowUpRight className="project-arrow" size={20} /></div>
          </article>
        ))}
      </div>
    </>
  );
}