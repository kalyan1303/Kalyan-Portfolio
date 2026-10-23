import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Selected work" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={profile.brand + " home"}>
        <span className="brand-mark" aria-hidden="true">
          K
        </span>
        <span>{profile.brand}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>
      <nav
        className={open ? "primary-nav is-open" : "primary-nav"}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Get in touch <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
