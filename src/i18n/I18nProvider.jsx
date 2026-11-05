import { useCallback, useEffect, useMemo, useState } from "react";
import { DICTIONARIES, I18nContext, detectLang, langFromPath, storeLang } from "./index";

const pathFor = (lang) => `/${lang}${window.location.search}${window.location.hash}`;

export default function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectLang);
  const t = DICTIONARIES[lang];

  // Keep the URL (/es, /en, /ca) in sync so every language has a shareable link.
  useEffect(() => {
    if (langFromPath() !== lang) {
      window.history.replaceState(null, "", pathFor(lang));
    }
  }, [lang]);

  // Browser back/forward between language URLs.
  useEffect(() => {
    const onPop = () => {
      const fromPath = langFromPath();
      if (fromPath) setLangState(fromPath);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Document language, title and description follow the active language.
  useEffect(() => {
    document.documentElement.lang = lang;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [lang, t]);

  const setLang = useCallback(
    (next) => {
      if (next === lang || !DICTIONARIES[next]) return;
      storeLang(next);
      window.history.pushState(null, "", pathFor(next));
      setLangState(next);
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
