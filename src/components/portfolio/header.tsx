"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/i18n/context";
import { LOCALES } from "@/lib/i18n/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Globe, Menu, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = ["about", "services", "experience", "projects", "publications", "education", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <path d="M7 23 L14 9 L18 9 L25 23 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground" strokeLinejoin="round" />
      <path d="M13 23 L16 16.5 L19 23 Z" className="fill-primary-foreground" />
      <line x1="5" y1="23" x2="27" y2="23" stroke="currentColor" strokeWidth="2" className="text-primary-foreground" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const { t, locale, setLocale, isRtl } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [active, setActive] = useState<SectionId | null>(null);
  const [open, setOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const navItems: { id: SectionId; label: string }[] = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "publications", label: t.nav.publications },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-ring" aria-label={t.meta.name}>
          <LogoMark className="h-9 w-9" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold tracking-tight">{t.meta.name}</span>
            <span className="text-[11px] text-muted-foreground">{t.meta.role}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-ring",
                active === item.id && "bg-accent text-accent-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          {/* Language switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 px-2.5" aria-label={t.misc.switchLanguage}>
                <Globe className="h-4 w-4" />
                <span className="hidden text-xs font-semibold sm:inline">
                  {locale === "en" ? "EN" : locale === "fa" ? "فا" : "ع"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-36">
              {LOCALES.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLocale(l.code)}
                  className={cn("justify-between", l.code === locale && "bg-accent")}
                >
                  <span>{l.label}</span>
                  {l.code === locale && <span aria-hidden="true">✓</span>}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            aria-label={t.misc.toggleTheme}
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            <Sun className="hidden h-4.5 w-4.5 dark:block" aria-hidden="true" />
            <Moon className="block h-4.5 w-4.5 dark:hidden" aria-hidden="true" />
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden" aria-label={t.misc.openMenu}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRtl ? "right" : "left"} className="w-72 overflow-y-auto">
              <SheetHeader className="border-b">
                <SheetTitle className="flex items-center gap-2 text-start">
                  <LogoMark className="h-8 w-8" />
                  <span className="text-sm font-bold">{t.meta.name}</span>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 p-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                      active === item.id && "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="border-t p-3">
                <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.misc.language}
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  {LOCALES.map((l) => (
                    <Button
                      key={l.code}
                      variant={l.code === locale ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLocale(l.code)}
                    >
                      {l.label}
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
