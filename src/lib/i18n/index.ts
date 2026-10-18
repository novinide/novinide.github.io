import { en, type Dictionary } from "./en";
import { fa } from "./fa";
import { ar } from "./ar";
import type { Locale } from "./types";

export * from "./types";
export type { Dictionary } from "./en";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  fa,
  ar,
};
