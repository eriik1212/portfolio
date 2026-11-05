import { useEffect } from "react";
import { startSmoothScroll } from "./lib/motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => startSmoothScroll(), []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Experience />
        <Stack />
        <Projects />
      </main>
      <Contact />
    </>
  );
}

export default App;
