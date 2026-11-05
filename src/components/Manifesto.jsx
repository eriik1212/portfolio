import ScrollReveal from "./bits/ScrollReveal";
import { useI18n } from "../i18n";
import "./Manifesto.css";

export default function Manifesto() {
  const { t } = useI18n();

  return (
    <section
      className="manifesto"
      aria-label={t.manifesto.aria}
    >
      <p className="section-label manifesto-label">{t.manifesto.label}</p>
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
        {t.manifesto.text}
      </ScrollReveal>
    </section>
  );
}
