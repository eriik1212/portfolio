import { useRef } from "react";
import { gsap, SplitText, useGSAP, scrollToTarget } from "../lib/motion";
import Grainient from "./bits/Grainient";
import RotatingText from "./bits/RotatingText";
import "./Hero.css";

const HERO_COLORS = ["#fff4e6", "#ffc83d", "#ff8a5c", "#ff8ad8", "#b9a6ff", "#8fd9ff"];

export default function Hero() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".hero-name-line", {
          type: "chars",
          mask: "chars",
        });

        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(split.chars, { yPercent: 110, duration: 1.2, stagger: 0.035 })
          .from(
            ".hero-reveal",
            { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.08 },
            "-=0.8",
          );

        // Content drifts up and fades as the hero scrolls away.
        gsap.to(".hero-content", {
          yPercent: -18,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        return () => split.revert();
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      className="hero"
      id="top"
      ref={rootRef}
    >
      <Grainient
        className="hero-bg"
        colors={HERO_COLORS}
        angle={35}
        flow={1.1}
        speed={0.9}
        silk={0.25}
        grainAmount={0.06}
      />

      <div className="hero-content">
        <p className="section-label hero-reveal">
          Software developer · Barcelona
        </p>

        <h1
          className="hero-name"
          aria-label="Erik Martín Garzón"
        >
          <span
            className="hero-name-line"
            aria-hidden="true"
          >
            Erik Martín
          </span>
          <span
            className="hero-name-line"
            aria-hidden="true"
          >
            Garzón
          </span>
        </h1>

        <div className="hero-rotator hero-reveal">
          <span>I build</span>
          <RotatingText
            texts={["interfaces", "mobile apps", "AI tools", "APIs"]}
            mainClassName="hero-rotator-word"
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="last"
            rotationInterval={2200}
          />
        </div>

        <div className="hero-bottom">
          <p className="hero-tagline hero-reveal">
            Front-end first, back-end when the feature needs it, and AI wherever
            it saves someone time.
          </p>

          <div className="hero-actions hero-reveal">
            <a
              href="#work"
              className="pill-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget("#work");
              }}
            >
              See my work <span className="arrow">→</span>
            </a>
            <span className="hero-status">
              <span
                className="hero-status-dot"
                aria-hidden="true"
              />
              Open to remote &amp; on-site roles
            </span>
          </div>
        </div>
      </div>

      <div
        className="hero-scroll hero-reveal"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
