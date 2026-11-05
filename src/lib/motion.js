import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis = null;

/**
 * Starts Lenis smooth scrolling and drives it from GSAP's ticker so
 * ScrollTrigger and Lenis share a single animation frame.
 * Returns a cleanup function. Skipped when the user prefers reduced motion.
 */
export function startSmoothScroll() {
  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
}

/** Scrolls to a selector or element, smoothly when Lenis is running. */
export function scrollToTarget(target) {
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.4 });
    return;
  }
  const behavior = prefersReducedMotion() ? "auto" : "smooth";
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior });
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
