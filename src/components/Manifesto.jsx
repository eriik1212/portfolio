import ScrollReveal from "./bits/ScrollReveal";
import "./Manifesto.css";

export default function Manifesto() {
  return (
    <section
      className="manifesto"
      aria-label="About my work"
    >
      <p className="section-label manifesto-label">What I do</p>
      <ScrollReveal
        baseOpacity={0.12}
        enableBlur
        blurStrength={6}
        baseRotation={2}
        highlightColor="#ff4d2e"
        containerClassName="manifesto-reveal"
        textClassName="manifesto-text"
        rotationEnd="bottom center"
        wordAnimationEnd="bottom 70%"
      >
        I care about the part of software people actually touch. I turn ideas
        into fast, friendly interfaces, jump into the back-end when a feature
        needs it, and use AI to make the way my team works a little smarter
        every week.
      </ScrollReveal>
    </section>
  );
}
