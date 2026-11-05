import ScrollVelocity from "./bits/ScrollVelocity";
import { useI18n } from "../i18n";
import "./Stack.css";

export default function Stack() {
  const { t } = useI18n();

  return (
    <section
      className="stack"
      aria-labelledby="stack-title"
    >
      <div className="stack-head">
        <p className="section-label stack-label">{t.stack.label}</p>
        <h2
          className="stack-title"
          id="stack-title"
        >
          {t.stack.title}
        </h2>
      </div>

      <div
        className="stack-band"
        aria-hidden="true"
      >
        <ScrollVelocity
          texts={t.stack.rows}
          velocity={60}
          numCopies={4}
          className="stack-marquee"
          skewWithVelocity={8}
          outlineAlternate
        />
      </div>

      <ul className="stack-groups">
        {t.stack.groups.map((group) => (
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
