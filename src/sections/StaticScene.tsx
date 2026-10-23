import { useEffect, useState } from "react";

export function StaticScene({ reducedMotion = false, spinToken = 0 }: { reducedMotion?: boolean; spinToken?: number }) {
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (spinToken === 0) return;
    setSpinning(true);
    const timeout = window.setTimeout(() => setSpinning(false), 2400);
    return () => window.clearTimeout(timeout);
  }, [spinToken]);

  return (
    <div className="scene-static" role="img" aria-label="Stylized holographic avatar illustration">
      <div className={spinning ? "fallback-avatar is-spinning" : "fallback-avatar"} aria-hidden="true">
        <div className="fallback-avatar__halo" />
        <div className="fallback-avatar__head"><i /><i /></div>
        <div className="fallback-avatar__hair" />
        <div className="fallback-avatar__body" />
        <div className="fallback-avatar__arm fallback-avatar__arm--left" />
        <div className="fallback-avatar__arm fallback-avatar__arm--right" />
        <div className="fallback-avatar__leg fallback-avatar__leg--left" />
        <div className="fallback-avatar__leg fallback-avatar__leg--right" />
        <div className="fallback-avatar__base" />
      </div>
      <div className="scene-static__note">
        <span className="scene-static__note-dot" />
        {reducedMotion ? "Static visual · reduced motion" : "3D preview unavailable"}
      </div>
    </div>
  );
}
