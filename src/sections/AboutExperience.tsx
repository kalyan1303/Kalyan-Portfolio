import { BriefcaseBusiness, ScanSearch } from "lucide-react";
import { experience, profile } from "../data/portfolio";

export function AboutExperience() {
  return (
    <>
      <section className="about section-wrap section-space" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">01 — The approach</p>
          <h2 id="about-title">
            Understand the system.
            <br />
            <span>Then make it better.</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-lede">{profile.introduction}</p>
            <div className="about-signoff">
              <span className="signoff-rule" />
              <span>{profile.name}</span>
              <span className="signoff-role">{profile.role} · {profile.experience}</span>
            </div>
          </div>
          <aside className="portrait-card" aria-label={`Portrait of ${profile.fullName}`}>
            <img src={profile.portraitPath} alt={`${profile.fullName}, shown in profile`} loading="lazy" />
            <div className="portrait-card__caption">
              <span>ENGINEER AT HEART</span>
              <span>PROFILE PORTRAIT</span>
            </div>
            <div className="portrait-card__index" aria-hidden="true">KB.</div>
          </aside>
        </div>
      </section>

      <section
        className="experience section-wrap section-space"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">02 — Professional context</p>
            <h2 id="experience-title">Built for the<br /><span>real world.</span></h2>
          </div>
          <p className="section-heading__aside">
            Practical engineering across the application, data, and integration layers.
          </p>
        </div>
        <article className="experience-card">
          <div className="experience-card__identity">
            <div className="experience-icon"><BriefcaseBusiness size={20} /></div>
            <p className="eyebrow">Professional experience</p>
            <h3>{experience.company}</h3>
            <p className="experience-client">Enterprise client · {experience.client}</p>
            <p className="experience-date">{experience.dateLabel}</p>
          </div>
          <div className="experience-card__detail">
            <h4>{experience.title}</h4>
            <p>{experience.summary}</p>
            <ul className="responsibility-list">
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility}>
                  <span aria-hidden="true">↗</span> {responsibility}
                </li>
              ))}
            </ul>
            <div className="confirmation-note">
              <ScanSearch size={16} aria-hidden="true" />
              <span>{experience.note}</span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
