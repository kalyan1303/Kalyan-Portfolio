import { useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "../data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <article className="project-card">
        <div className="project-card__topline">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-status">{project.status}</span>
        </div>
        <ProjectVisual visual={project.visual} title={project.title} />
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="tag-list" aria-label="Related technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <button
          className="text-button"
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          aria-haspopup="dialog"
        >
          Read project details <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </article>
      <dialog className="project-dialog" ref={dialogRef} aria-labelledby={project.id + "-title"}>
        <div className="dialog-content">
          <div className="dialog-topline">
            <p className="eyebrow">{project.category}</p>
            <button
              className="icon-button"
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close project details"
            >
              <X size={18} />
            </button>
          </div>
          <h2 id={project.id + "-title"}>{project.title}</h2>
          <p className="dialog-status">{project.status}</p>
          <p className="dialog-lede">{project.summary}</p>
          <div className="dialog-meta">
            <div>
              <h3>Contribution</h3>
              <p>{project.contribution}</p>
            </div>
            <div>
              <h3>Context</h3>
              <p>{project.context}</p>
            </div>
          </div>
          <ul className="dialog-notes">
            {project.detail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="dialog-tech">
            <span>Related technologies</span> {project.technologies.join(" · ")}
          </p>
        </div>
      </dialog>
    </>
  );
}
