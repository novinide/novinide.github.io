"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary, LOCALE_META, isLocale, type Locale, type Dir } from "./index";

const STORAGE_KEY = "mf-locale";

/* ------------------------------------------------------------------ */
/* External locale store (localStorage + in-memory cache + listeners)  */
/* ------------------------------------------------------------------ */

let cachedLocale: Locale | null = null;
const listeners = new Set<() => void>();

function detectLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
    const nav = window.navigator.language?.toLowerCase() ?? "";
    if (nav.startsWith("fa")) return "fa";
    if (nav.startsWith("ar")) return "ar";
  } catch {
    /* storage unavailable */
  }
  return "en";
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Client snapshot — lazily detects the saved / browser locale once. */
function getSnapshot(): Locale {
  if (cachedLocale === null) {
    cachedLocale = detectLocale();
  }
  return cachedLocale;
}

/** Server snapshot — matches the static <html lang="en"> shell. */
function getServerSnapshot(): Locale {
  return "en";
}

export function setStoredLocale(next: Locale): void {
  cachedLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  for (const listener of listeners) listener();
}

/* ------------------------------------------------------------------ */
/* Context                                                             */
/* ------------------------------------------------------------------ */

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  dir: Dir;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Keep <html lang dir> in sync with the selected locale (external system)
  useEffect(() => {
    const meta = LOCALE_META[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = meta.dir;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setStoredLocale(next);
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const dir: Dir = LOCALE_META[locale].dir;
    return {
      locale,
      setLocale,
      t: dictionaries[locale],
      dir,
      isRtl: dir === "rtl",
    };
  }, [locale, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within <LanguageProvider>");
  return ctx;
}
