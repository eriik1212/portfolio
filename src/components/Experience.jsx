import { useRef } from "react";
import { gsap, useGSAP } from "../lib/motion";
import useExperience from "../hooks/useExperience";
import "./Experience.css";

const ROLES = [
  {
    tag: "01",
    title: "Front-end development",
    text: "My main job: building the interfaces of our products, from the first component to the last pixel, and jumping into back-end work whenever a feature needs it.",
    color: "var(--sun)",
  },
  {
    tag: "02",
    title: "AI-powered processes",
    text: "I help the team work better with AI: spotting repetitive steps, automating them and bringing new tools into our day-to-day.",
    color: "var(--pink)",
  },
  {
    tag: "03",
    title: "Project management",
    text: "I also lead some projects: planning, keeping everyone aligned and making sure what we build is what was actually needed.",
    color: "var(--mint)",
  },
];

const pad = (n) => String(n).padStart(2, "0");
const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

export default function Experience() {
  const rootRef = useRef(null);
  const xp = useExperience();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards = gsap.utils.toArray(".role-card");
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".experience-panel",
              start: "top top",
              end: () => `+=${window.innerHeight * (cards.length - 0.5)}`,
              pin: true,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });

          cards.forEach((card, i) => {
            if (i === 0) return;
            tl.from(card, {
              yPercent: 130,
              rotate: i % 2 ? 6 : -6,
              ease: "power2.out",
              duration: 1,
            }).to(
              cards[i - 1],
              { scale: 0.92, yPercent: -6, filter: "brightness(0.8)", duration: 1 },
              "<",
            );
          });
          tl.to({}, { duration: 0.4 });
        },
      );

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".experience-intro > *", {
          y: 40,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: ".experience-panel", start: "top 70%" },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      className="experience"
      id="experience"
      ref={rootRef}
    >
      <div className="experience-panel">
        <div className="experience-intro">
          <p className="section-label experience-label">Experience</p>
          <h2 className="experience-title">
            Software developer,
            <br />
            shipping since March 2025.
          </h2>

          <div
            className="experience-counter"
            aria-live="off"
          >
            <p className="counter-big">
              <span>{plural(xp.years, "year")}</span>
              <span>{plural(xp.months, "month")}</span>
            </p>
            <p className="counter-small">
              + {plural(xp.days, "day")} · {pad(xp.hours)}:{pad(xp.minutes)}:
              {pad(xp.seconds)} and counting
            </p>
          </div>
        </div>

        <ol className="role-stack">
          {ROLES.map((role) => (
            <li
              key={role.tag}
              className="role-card"
              style={{ "--card-color": role.color }}
            >
              <span className="role-tag">{role.tag}</span>
              <h3 className="role-title">{role.title}</h3>
              <p className="role-text">{role.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
