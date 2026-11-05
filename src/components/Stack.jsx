import ScrollVelocity from "./bits/ScrollVelocity";
import "./Stack.css";

const ROWS = [
  "React ✦ Vue.js ✦ TypeScript ✦ JavaScript ✦ ",
  "Node.js ✦ PHP ✦ PostgreSQL ✦ REST APIs ✦ Local AI ✦ ",
];

const GROUPS = [
  { name: "Front-end", items: ["React", "Vue.js", "TypeScript", "JavaScript", "Bootstrap"] },
  { name: "Back-end", items: ["Node.js", "PHP", "REST APIs"] },
  { name: "Data", items: ["PostgreSQL", "pgAdmin"] },
  { name: "AI", items: ["Local models", "Process automation"] },
];

export default function Stack() {
  return (
    <section
      className="stack"
      aria-labelledby="stack-title"
    >
      <div className="stack-head">
        <p className="section-label stack-label">Toolbox</p>
        <h2
          className="stack-title"
          id="stack-title"
        >
          The stack I reach for
        </h2>
      </div>

      <div
        className="stack-band"
        aria-hidden="true"
      >
        <ScrollVelocity
          texts={ROWS}
          velocity={60}
          numCopies={4}
          className="stack-marquee"
          skewWithVelocity={8}
          outlineAlternate
        />
      </div>

      <ul className="stack-groups">
        {GROUPS.map((group) => (
          <li
            key={group.name}
            className="stack-group"
          >
            <h3>{group.name}</h3>
            <p>{group.items.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
