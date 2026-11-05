import { createContext, useContext } from "react";
import en from "./en";
import es from "./es";
import ca from "./ca";

export const DICTIONARIES = { es, en, ca };

// Order shown in the language selector.
export const LANGUAGES = [
  { code: "es", label: "ES", name: "Español" },
  { code: "ca", label: "CA", name: "Català" },
  { code: "en", label: "EN", name: "English" },
];

const CODES = LANGUAGES.map((l) => l.code);
const STORAGE_KEY = "lang";
const FALLBACK = "en";

const isLang = (value) => CODES.includes(value);

/** Language in the URL path (/es, /en, /ca), if any. */
export function langFromPath(pathname = window.location.pathname) {
  const segment = pathname.split("/")[1];
  return isLang(segment) ? segment : null;
}

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLang(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function storeLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage can be unavailable (private mode); the URL still keeps the language.
  }
}

function langFromBrowser() {
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferred) {
    const base = tag?.toLowerCase().split("-")[0];
    if (isLang(base)) return base;
  }
  return null;
}

/** URL first, then the visitor's previous choice, then the browser language. */
export function detectLang() {
  return langFromPath() ?? readStoredLang() ?? langFromBrowser() ?? FALLBACK;
}

export const I18nContext = createContext({ lang: FALLBACK, t: DICTIONARIES[FALLBACK], setLang: () => {} });

export const useI18n = () => useContext(I18nContext);
