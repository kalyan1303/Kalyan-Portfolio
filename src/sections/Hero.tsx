import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, FileText, RotateCw, Volume2, VolumeX } from "lucide-react";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { profile } from "../data/portfolio";
import { StaticScene } from "./StaticScene";

const HeroScene = lazy(() => import("../scene/HeroScene"));

function supportsWebGL2(): boolean {
  try {
    return Boolean(document.createElement("canvas").getContext("webgl2"));
  } catch {
    return false;
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Hero() {
  const reducedMotion = prefersReducedMotion();
  const [sceneEnabled] = useState(() => !reducedMotion && supportsWebGL2());
  const [spinToken, setSpinToken] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [speechStatus, setSpeechStatus] = useState("Avatar ready");
  const fallback = <StaticScene reducedMotion={reducedMotion} spinToken={spinToken} />;

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  function toggleSpeech() {
    if (!("speechSynthesis" in window)) {
      setSpeechStatus("Speech playback is not available in this browser.");
      return;
    }
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      setSpeechStatus("Speech stopped");
      return;
    }

    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(profile.avatarSpeech);
    speech.lang = "en-US";
    speech.rate = 0.96;
    setSpeaking(true);
    setSpeechStatus("Starting Kalyan's introduction");
    speech.onstart = () => {
      setSpeaking(true);
      setSpeechStatus("Kalyan is speaking");
    };
    speech.onend = () => {
      setSpeaking(false);
      setSpeechStatus("About Kalyan finished");
    };
    speech.onerror = () => {
      setSpeaking(false);
      setSpeechStatus("Speech playback could not start");
    };
    window.speechSynthesis.speak(speech);
  }

  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">
            <span className="eyebrow-line" />
            Enterprise systems · Intelligent tools
          </p>
          <h1 id="hero-title">
            {profile.name}
            <span className="hero-tagline">{profile.tagline}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-experience">{profile.experience}</p>
          <p className="hero-intro">{profile.shortIntro}</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">
              Explore my work <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              className="button button--secondary"
              href={profile.resumePath}
              download="Kalyan-Bavisetti-Resume.pdf"
            >
              <FileText size={16} aria-hidden="true" /> View resume
            </a>
          </div>
          <div className="hero-caption">
            <span className="caption-index">01 / 04</span>
            <span>Building useful systems, one thoughtful decision at a time.</span>
          </div>
        </div>
        <div className="hero-art" role="group" aria-label="3D digital core visualization">
          <div className="hero-art__frame">
            <div className="hero-art__label hero-art__label--top">
              <span>ENGINEERING IN MOTION</span>
              <span>SCENE / 01</span>
            </div>
            <div className="hero-art__glow" />
            {sceneEnabled ? (
              <ErrorBoundary fallback={fallback}>
                <Suspense fallback={fallback}>
                  <HeroScene spinToken={spinToken} />
                </Suspense>
              </ErrorBoundary>
            ) : (
              fallback
            )}
            <div className="hero-float-card hero-float-card--identity" aria-hidden="true">
              <span className="hero-float-card__marker" />
              <span className="hero-float-card__eyebrow">ENGINEER / BUILDER</span>
              <strong>{profile.name}</strong>
              <small>{profile.role} · {profile.experience}</small>
            </div>
            <div className="hero-float-card hero-float-card--client" aria-hidden="true">
              <span className="hero-float-card__pulse" />
              <span className="hero-float-card__eyebrow">ENTERPRISE CLIENT</span>
              <strong>SCAQMD</strong>
              <small>South Coast AQMD</small>
            </div>
            <div className="hero-art__label hero-art__label--bottom">
              <span>ORIGINAL STYLIZED PLACEHOLDER</span>
              <span>NOT A LIKENESS</span>
            </div>
          </div>
          <div className="avatar-controls" role="group" aria-label="Avatar controls">
            <button className="avatar-control" type="button" aria-pressed={speaking} onClick={toggleSpeech}>
              {speaking ? <VolumeX size={15} aria-hidden="true" /> : <Volume2 size={15} aria-hidden="true" />}
              {speaking ? "Stop speaking" : "Tell me about Kalyan"}
            </button>
            <button
              className="avatar-control avatar-control--secondary"
              type="button"
              onClick={() => setSpinToken((token) => token + 1)}
            >
              <RotateCw size={15} aria-hidden="true" /> Rotate 360°
            </button>
            <span className="avatar-controls__status" aria-live="polite">{speechStatus}</span>
          </div>
          <div className="hero-art__orbit-note">
            <span className="orbit-note__symbol" aria-hidden="true">✳</span>
            <span>Systems thinking<br />in motion</span>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span>Scroll to explore</span>
        <ArrowDown size={15} aria-hidden="true" />
      </a>
      <a className="hero-corner-link" href="#contact">
        Have a challenge in mind? <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </section>
  );
}
