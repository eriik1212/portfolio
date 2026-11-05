import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "../lib/motion";
import "./Contact.css";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/erikmartingarzon/", variant: "pill-btn--sun" },
  { label: "GitHub", href: "https://github.com/eriik1212", variant: "pill-btn--light" },
];

export default function Contact() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".contact-title", {
          type: "words,chars",
          mask: "words",
        });

        gsap.from(split.chars, {
          yPercent: 120,
          rotate: 8,
          stagger: 0.02,
          ease: "back.out(1.6)",
          duration: 0.9,
          scrollTrigger: { trigger: ".contact-title", start: "top 80%" },
        });

        gsap.from(".about-card", {
          rotate: -8,
          y: 80,
          autoAlpha: 0,
          ease: "back.out(1.4)",
          duration: 1,
          scrollTrigger: { trigger: ".about-card", start: "top 85%" },
        });

        return () => split.revert();
      });

      // Magnetic buttons, only for fine pointers (mouse / trackpad).
      mm.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const cleanups = gsap.utils.toArray(".magnetic").map((el) => {
            const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
            const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
            const move = (e) => {
              const r = el.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
              yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
            };
            const leave = () => {
              xTo(0);
              yTo(0);
            };
            el.addEventListener("pointermove", move);
            el.addEventListener("pointerleave", leave);
            return () => {
              el.removeEventListener("pointermove", move);
              el.removeEventListener("pointerleave", leave);
            };
          });
          return () => cleanups.forEach((fn) => fn());
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <footer
      className="contact"
      id="contact"
      ref={rootRef}
    >
      <div className="contact-inner">
        <aside className="about-card">
          <p className="section-label">Off the clock</p>
          <p className="about-text">
            When I'm not shipping features, I'm probably trying a new AI model
            on my own machine or wandering around Barcelona in search of the
            next good coffee.
          </p>
        </aside>

        <p className="section-label contact-label">Contact</p>
        <h2 className="contact-title">Let's build something people remember.</h2>

        <div className="contact-actions">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`pill-btn magnetic ${link.variant}`}
            >
              {link.label} <span className="arrow">→</span>
            </a>
          ))}
        </div>

        <div className="contact-bottom">
          <span>© {new Date().getFullYear()} Erik Martín Garzón</span>
          <span>Barcelona · Remote &amp; on-site</span>
        </div>
      </div>
    </footer>
  );
}
