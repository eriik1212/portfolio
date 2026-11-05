import { Fragment, useEffect } from "react";
import { ScrollTrigger, startSmoothScroll } from "./lib/motion";
import { useI18n } from "./i18n";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const { lang } = useI18n();

  useEffect(() => startSmoothScroll(), []);

  // Text length changes between languages, so pinned sections need fresh measurements.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [lang]);

  return (
    <>
      <Nav />
      <main>
        {/* Hero stays mounted (its name doesn't change) to keep the WebGL background alive. */}
        <Hero />
        {/* Remount the rest on language change so text-splitting animations
            (SplitText, ScrollReveal) and pinned sections rebuild from the new copy. */}
        <Fragment key={lang}>
          <Manifesto />
          <Experience />
          <Stack />
          <Projects />
        </Fragment>
      </main>
      <Contact key={lang} />
    </>
  );
}

export default App;
