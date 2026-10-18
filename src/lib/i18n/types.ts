export type Locale = "en" | "ar" | "fa";

export type Dir = "ltr" | "rtl";

export interface LocaleMeta {
  code: Locale;
  /** Native label shown in the language switcher */
  label: string;
  dir: Dir;
}

export const LOCALES: LocaleMeta[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "fa", label: "فارسی", dir: "rtl" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: LOCALES[0],
  fa: LOCALES[1],
  ar: LOCALES[2],
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "fa" || value === "ar";
}
