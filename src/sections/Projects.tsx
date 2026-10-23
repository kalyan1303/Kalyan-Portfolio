import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section className="work section-wrap section-space" id="work" aria-labelledby="work-title">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">04 — Enterprise delivery & independent work</p>
          <h2 id="work-title">
            The work behind
            <br />
            <span>the thinking.</span>
          </h2>
        </div>
        <p className="section-heading__aside">
            Enterprise work delivered for South Coast AQMD (SCAQMD), alongside an independent
            browser-testing workbench direction.
        </p>
      </div>
      <div className="work-legend" aria-label="Project categories">
        <span><i className="legend-dot legend-dot--professional" /> Enterprise projects · SCAQMD</span>
        <span><i className="legend-dot legend-dot--independent" /> Independent project · ENFTestHub</span>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
