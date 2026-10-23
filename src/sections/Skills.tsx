import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "../data/portfolio";

export function Skills() {
  return (
    <section
      className="capabilities section-wrap section-space"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">03 — Engineering toolkit</p>
          <h2 id="capabilities-title">
            Skills that connect
            <br />
            <span>the whole stack.</span>
          </h2>
        </div>
        <p className="section-heading__aside">
          A working toolkit across backend development, data, integration, delivery, and testing.
        </p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card__head">
              <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </div>
            <h3>{group.title}</h3>
            <p>{group.summary}</p>
            <ul className="skill-chip-list">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
