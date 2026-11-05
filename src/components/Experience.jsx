import { useRef } from "react";
import { gsap, useGSAP } from "../lib/motion";
import useExperience from "../hooks/useExperience";
import { useI18n } from "../i18n";
import "./Experience.css";

// Text for each role lives in the i18n dictionaries (experience.roles).
const ROLE_COLORS = ["var(--sun)", "var(--pink)", "var(--mint)"];

const pad = (n) => String(n).padStart(2, "0");

export default function Experience() {
  const rootRef = useRef(null);
  const xp = useExperience();
  const { t } = useI18n();
  const tx = t.experience;

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
          <p className="section-label experience-label">{tx.label}</p>
          <h2 className="experience-title">
            {tx.title[0]}
            <br />
            {tx.title[1]}
          </h2>

          <div
            className="experience-counter"
            aria-live="off"
          >
            <p className="counter-big">
              <span>{tx.years(xp.years)}</span>
              <span>{tx.months(xp.months)}</span>
            </p>
            <p className="counter-small">
              + {tx.days(xp.days)} · {pad(xp.hours)}:{pad(xp.minutes)}:
              {pad(xp.seconds)} {tx.counting}
            </p>
          </div>
        </div>

        <ol className="role-stack">
          {tx.roles.map((role, i) => (
            <li
              key={role.title}
              className="role-card"
              style={{ "--card-color": ROLE_COLORS[i] }}
            >
              <span className="role-tag">0{i + 1}</span>
              <h3 className="role-title">{role.title}</h3>
              <p className="role-text">{role.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
