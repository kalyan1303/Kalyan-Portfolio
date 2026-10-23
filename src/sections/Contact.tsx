import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export function Contact() {
  return (
    <>
      <section className="contact section-wrap section-space" id="contact" aria-labelledby="contact-title">
        <div className="contact-panel">
          <div className="contact-orbit" aria-hidden="true">
            <span className="contact-orbit__core" />
            <span className="contact-orbit__ring" />
            <span className="contact-orbit__ring contact-orbit__ring--two" />
          </div>
          <div className="contact-content">
            <p className="eyebrow">A good conversation starts here</p>
            <h2 id="contact-title">Let's build<br /><span>what's next.</span></h2>
            <p>
              Interested in thoughtful engineering, developer tooling, or intelligent automation?
              I would be glad to connect.
            </p>
            <a className="button button--primary contact-email" href={"mailto:" + profile.email}>
              <Mail size={17} aria-hidden="true" /> {profile.email}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-meta">
            <span className="eyebrow">Find me online</span>
            <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
              <Linkedin size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href={profile.resumePath} download="Kalyan-Bavisetti-Resume.pdf">
              <span className="resume-symbol" aria-hidden="true">PDF</span> Resume <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer section-wrap">
        <a className="brand brand--footer" href="#top">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>{profile.brand}</span>
        </a>
        <p>Designed for clarity. Built with curiosity.</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </>
  );
}
