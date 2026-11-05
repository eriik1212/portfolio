import { useRef } from "react";
import { gsap, useGSAP, scrollToTarget } from "../lib/motion";
import "./Nav.css";

const LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const progressRef = useRef(null);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });
  });

  const go = (event, href) => {
    event.preventDefault();
    scrollToTarget(href);
  };

  return (
    <header className="nav">
      <div
        className="nav-progress"
        ref={progressRef}
        aria-hidden="true"
      />
      <a
        href="#top"
        className="nav-logo"
        onClick={(e) => go(e, 0)}
        aria-label="Back to top"
      >
        EMG<span>.</span>
      </a>
      <nav aria-label="Main">
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => go(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
