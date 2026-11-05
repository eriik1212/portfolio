import { useRef } from "react";
import { gsap, useGSAP } from "../lib/motion";
import "./Projects.css";

const PROJECTS = [
  {
    id: "vibra",
    name: "ViBra",
    kicker: "Running club platform",
    summary:
      "Everything a social running club needs in one place: members, events, bookings and a blog where coaches share their training tips.",
    features: [
      "Desktop admin panel to run the club",
      "Mobile app for runners and quick coach tasks",
      "Events, bookings and member management",
    ],
    tags: ["Desktop app", "Mobile app", "Full stack"],
    color: "var(--mint)",
    Visual: VibraVisual,
  },
  {
    id: "ai-studio",
    name: "AI Content Studio",
    kicker: "One sentence → one video",
    summary:
      "A desktop app that takes an idea summed up in a single sentence and turns it into a script, dialogue and a fully rendered video, ready to publish on YouTube.",
    features: [
      "End-to-end automated pipeline",
      "Runs entirely on local AI models",
      "Export framed and ready for YouTube",
    ],
    tags: ["Desktop app", "Local AI", "Automation"],
    color: "var(--lilac)",
    Visual: StudioVisual,
  },
  {
    id: "consolat",
    name: "Consolat de Mar",
    kicker: "Google Form → pirate game",
    summary:
      "A long Google Form that measures how ready an entrepreneurial project is, turned into an interactive pirate game: get your ship ready to set sail, just like your business. Built in Unity for the Xarxa d'Emprenedoria Universitària de Barcelona. I built the API behind it and integrated it into the Unity game.",
    features: [
      "API endpoints for answers, progress and stats",
      "API integration with the Unity project",
      "User account management",
      "PostgreSQL database designed with pgAdmin",
    ],
    tags: ["REST API", "PostgreSQL", "Unity"],
    color: "var(--sun)",
    Visual: ConsolatVisual,
  },
];

export default function Projects() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = rootRef.current.querySelector(".work-track");
          const distance = () => track.scrollWidth - window.innerWidth;

          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: ".work-pin",
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <section
      className="work"
      id="work"
      ref={rootRef}
      aria-labelledby="work-title"
    >
      <div className="work-pin">
        <div className="work-track">
          <header className="work-intro">
            <p className="section-label work-label">Selected work</p>
            <h2
              className="work-title"
              id="work-title"
            >
              Three projects,
              <br />
              <em>coming out soon.</em>
            </h2>
            <p className="work-note">
              They're not public yet, so here's what they do and how I built
              them. Keep scrolling →
            </p>
          </header>

          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className="project-card"
              style={{ "--card-color": project.color }}
            >
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-index">0{i + 1}</span>
                  <span className="project-status">Private · coming soon</span>
                </div>
                <p className="project-kicker">{project.kicker}</p>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-features">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <ul className="project-tags">
                  {project.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div
                className="project-visual"
                aria-hidden="true"
              >
                <project.Visual />
              </div>
            </article>
          ))}

          <a
            className="work-more"
            href="https://github.com/eriik1212"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>More on GitHub</span>
            <span className="work-more-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* Illustrative mock-ups: the projects are private, so no screenshots yet. */

function VibraVisual() {
  return (
    <div className="vis-vibra">
      <div className="vis-window">
        <div className="vis-window-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="vis-window-body">
          <div className="vis-side" />
          <div className="vis-rows">
            <i style={{ width: "70%" }} />
            <i style={{ width: "90%" }} />
            <i style={{ width: "55%" }} />
            <i style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <div className="vis-phone">
        <div className="vis-phone-notch" />
        <p className="vis-phone-title">Next runs</p>
        <div className="vis-event">
          <b>Long run</b>
          <span className="vis-chip">Booked ✓</span>
        </div>
        <div className="vis-event">
          <b>Intervals</b>
          <span className="vis-chip vis-chip--ghost">Join</span>
        </div>
        <div className="vis-event">
          <b>Coach blog</b>
          <span className="vis-chip vis-chip--ghost">Read</span>
        </div>
      </div>
    </div>
  );
}

function StudioVisual() {
  const steps = ["Idea", "Script", "Dialogue", "Video", "Render"];
  return (
    <div className="vis-studio">
      <p className="vis-prompt">“A sentence is all it takes…”</p>
      <ol className="vis-pipeline">
        {steps.map((s, i) => (
          <li
            key={s}
            style={{ "--i": i }}
          >
            {s}
          </li>
        ))}
      </ol>
      <span className="vis-badge">● local models</span>
    </div>
  );
}

const SHIP_LINE = {
  stroke: "var(--ink)",
  strokeWidth: 2.5,
  strokeLinejoin: "round",
  strokeLinecap: "round",
};

// Three-masted pirate ship. Elements with .vis-sail unfurl as the voyage progresses.
function PirateShip() {
  return (
    <svg
      className="vis-ship"
      viewBox="0 0 224 150"
    >
      <g className="vis-ship-bob">
        {/* rigging */}
        <g
          stroke="var(--ink)"
          strokeWidth="1"
          opacity="0.45"
        >
          <path d="M120 14 L62 92 M120 14 L196 96 M166 34 L186 46 M72 36 L24 84" />
        </g>

        {/* masts */}
        <g fill="var(--ink)">
          <rect x="118" y="12" width="4.5" height="86" rx="2" />
          <rect x="164" y="32" width="4" height="66" rx="2" />
          <rect x="70" y="34" width="4" height="52" rx="2" />
          {/* crow's nest */}
          <rect x="112" y="28" width="17" height="6" rx="2" />
        </g>

        {/* jolly roger */}
        <g className="vis-flag">
          <path
            d="M122 13 Q130 9 138 13 Q146 17 153 13 V27 Q146 31 138 27 Q130 23 122 27 Z"
            fill="var(--ink)"
          />
          <circle cx="137" cy="19" r="3" fill="var(--cream)" />
          <path d="M132 24 L142 24" stroke="var(--cream)" strokeWidth="1.6" strokeLinecap="round" />
        </g>

        {/* sails */}
        <path
          className="vis-sail"
          d="M104 38 Q120 34 136 38 Q140 50 136 61 Q120 57 104 61 Q100 50 104 38 Z"
          fill="var(--paper)"
          {...SHIP_LINE}
        />
        <g className="vis-sail">
          <path
            d="M99 65 Q120 61 141 65 Q146 77 141 90 Q120 86 99 90 Q94 77 99 65 Z"
            fill="var(--paper)"
            {...SHIP_LINE}
          />
          {/* skull */}
          <circle cx="120" cy="74" r="5" fill="var(--ink)" />
          <rect x="117" y="77" width="6" height="4" rx="1" fill="var(--ink)" />
          <circle cx="118.2" cy="73.6" r="1.3" fill="var(--paper)" />
          <circle cx="121.8" cy="73.6" r="1.3" fill="var(--paper)" />
          <path d="M112 84 L128 80 M112 80 L128 84" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path
          className="vis-sail"
          d="M154 44 Q166 41 178 44 Q181 54 178 63 Q166 60 154 63 Q151 54 154 44 Z"
          fill="var(--paper)"
          {...SHIP_LINE}
        />
        <path
          className="vis-sail"
          d="M151 67 Q166 64 181 67 Q185 77 181 88 Q166 85 151 88 Q147 77 151 67 Z"
          fill="var(--paper)"
          {...SHIP_LINE}
        />
        <path
          className="vis-sail"
          d="M75 40 Q100 58 75 80 Z"
          fill="var(--sun)"
          {...SHIP_LINE}
        />
        <path
          className="vis-sail"
          d="M186 46 Q204 64 215 83 L188 86 Z"
          fill="var(--sun)"
          {...SHIP_LINE}
        />

        {/* bowsprit */}
        <path d="M190 96 L218 82" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />

        {/* hull: raised stern castle on the left, bow on the right */}
        <path
          d="M18 82 H58 L61 96 H200 Q194 114 174 126 H54 Q30 118 18 82 Z"
          fill="var(--tomato)"
          {...SHIP_LINE}
        />
        {/* gun-deck stripe */}
        <path
          d="M24 102 Q110 106 196 102 L193 110 Q110 114 28 110 Z"
          fill="var(--sun)"
          {...SHIP_LINE}
          strokeWidth="2"
        />
        {/* cannon ports */}
        <g fill="var(--ink)">
          {[70, 94, 118, 142, 166].map((x) => (
            <rect key={x} x={x} y="104" width="8" height="5" rx="1.5" />
          ))}
        </g>
        {/* stern windows */}
        <g fill="var(--sun)" stroke="var(--ink)" strokeWidth="1.5">
          <rect x="28" y="87" width="7" height="7" rx="1.5" />
          <rect x="40" y="87" width="7" height="7" rx="1.5" />
        </g>
        {/* railing */}
        <path d="M60 91 H198 M18 77 H58" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        <path d="M64 91 V96 M80 91 V96 M96 91 V96 M144 91 V96 M160 91 V96 M176 91 V96 M192 91 V96 M24 77 V82 M38 77 V82 M52 77 V82" stroke="var(--ink)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

// Each API call gets the ship one step closer to setting sail.
const VOYAGE_STEPS = [
  { method: "POST", path: "/accounts", effect: "crew aboard" },
  { method: "POST", path: "/answers", effect: "cargo loaded" },
  { method: "PUT", path: "/progress", effect: "sails raised" },
  { method: "GET", path: "/stats", effect: "course plotted" },
];

function ConsolatVisual() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const lines = gsap.utils.toArray(".vis-log-line");
        const reset = () => {
          gsap.set(lines, { autoAlpha: 0, x: -10 });
          gsap.set(".vis-bar-fill", { scaleX: 0 });
          gsap.set(".vis-percent", { textContent: "0%" });
          gsap.set(".vis-sail", { scaleY: 0.12 });
          gsap.set(".vis-ship", { x: 0, autoAlpha: 1 });
          gsap.set(".vis-ready-done", { autoAlpha: 0, scale: 0.8 });
        };

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4, onRepeat: reset });
        reset();
        tl.to({}, { duration: 0.6 });

        lines.forEach((line, i) => {
          const progress = (i + 1) / lines.length;
          tl.to(line, { autoAlpha: 1, x: 0, duration: 0.35, ease: "power2.out" })
            .to(".vis-bar-fill", { scaleX: progress, duration: 0.5, ease: "power2.out" }, "<")
            .to(".vis-percent", { textContent: `${Math.round(progress * 100)}%`, snap: { textContent: 1 }, duration: 0.5 }, "<")
            .to(".vis-sail", { scaleY: 0.12 + 0.88 * progress, duration: 0.6, ease: "back.out(2)" }, "<")
            .to({}, { duration: 0.55 });
        });

        tl.to(".vis-ready-done", { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(2)" })
          .to(".vis-ship", { x: 90, duration: 1.8, ease: "power1.in" }, "+=0.3")
          .to(".vis-ship", { autoAlpha: 0, duration: 0.4 }, "-=0.4")
          .to({}, { duration: 0.6 });
      });
    },
    { scope: rootRef },
  );

  return (
    <div
      className="vis-voyage"
      ref={rootRef}
    >
      <div className="vis-sea">
        <PirateShip />
        <div className="vis-waves" />
      </div>

      <div className="vis-ready">
        <div className="vis-ready-head">
          <span>Ready to set sail</span>
          <span className="vis-percent">100%</span>
        </div>
        <div className="vis-bar">
          <span className="vis-bar-fill" />
        </div>
      </div>

      <ul className="vis-log">
        {VOYAGE_STEPS.map((step) => (
          <li
            key={step.path}
            className="vis-log-line"
          >
            <span className="vis-ok">200</span>
            <span className="vis-method">{step.method}</span>
            <span className="vis-path">{step.path}</span>
            <span className="vis-effect">→ {step.effect}</span>
          </li>
        ))}
      </ul>

      <span className="vis-ready-done">⚓ Anchors up!</span>
    </div>
  );
}
