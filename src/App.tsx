import { SiteHeader } from "./components/SiteHeader";
import { AboutExperience } from "./sections/AboutExperience";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <AboutExperience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
