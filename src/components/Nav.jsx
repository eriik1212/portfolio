import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, scrollToTarget } from "../lib/motion";
import { LANGUAGES, useI18n } from "../i18n";
import "./Nav.css";

const SECTIONS = ["experience", "work", "contact"];

export default function Nav() {
  const progressRef = useRef(null);
  const { t } = useI18n();

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });
  });

  const go = (event, target) => {
    event.preventDefault();
    scrollToTarget(target);
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
        aria-label={t.nav.backToTop}
      >
        EMG<span>.</span>
      </a>
      <div className="nav-right">
        <nav aria-label={t.nav.main}>
          <ul className="nav-links">
            {SECTIONS.map((id) => (
              <li
                key={id}
                className={`nav-link-${id}`}
              >
                <a
                  href={`#${id}`}
                  onClick={(e) => go(e, `#${id}`)}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

function LanguageSwitcher() {
  const { lang, t, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const current = LANGUAGES.find((l) => l.code === lang);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        rootRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      className="lang"
      ref={rootRef}
    >
      <button
        type="button"
        className="lang-toggle"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${t.nav.language}: ${current.name}`}
        onClick={() => setOpen((o) => !o)}
      >
        {current.label}
        <span
          className="lang-caret"
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {open && (
        <ul className="lang-menu">
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <a
                href={`/${l.code}`}
                lang={l.code}
                hrefLang={l.code}
                aria-current={l.code === lang ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                <span className="lang-code">{l.label}</span>
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
