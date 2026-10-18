"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { DamIllustration } from "./dam-illustration";
import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  MapPin,
  ArrowDown,
  Github,
  Instagram,
  Linkedin,
  Send,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SOCIALS = [
  { key: "linkedin", href: "https://www.linkedin.com/in/fadaei", icon: Linkedin },
  { key: "scholar", href: "https://scholar.google.com/citations?user=uT3-iOUAAAAJ", icon: GraduationCap },
  { key: "researchgate", href: "https://www.researchgate.net/profile/Mansour-Fadaei", icon: BookOpen },
  { key: "github", href: "https://github.com/geo-eng", icon: Github },
  { key: "telegram", href: "https://t.me/mansour_fadaee", icon: Send },
  { key: "instagram", href: "https://www.instagram.com/fadaei.mansour", icon: Instagram },
] as const;

export const SOCIAL_LINKS = SOCIALS;

function Stat({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1100;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
      className="rounded-xl border border-border/70 bg-card/70 px-3 py-3.5 text-center backdrop-blur-sm sm:px-4"
    >
      <p className="text-2xl font-bold tabular-nums text-primary sm:text-3xl" dir="ltr">
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">{label}</p>
    </motion.div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="contour-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 end-[-8rem] h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pt-14">
        {/* Text column */}
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.p {...fadeUp(0.08)} className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {t.hero.intro}
          </motion.p>

          <motion.h1 {...fadeUp(0.16)} className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {t.meta.name}
          </motion.h1>

          <motion.p {...fadeUp(0.24)} className="mt-4 max-w-xl text-lg font-semibold text-primary sm:text-xl">
            {t.hero.headline}
          </motion.p>

          <motion.p {...fadeUp(0.32)} className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t.hero.description}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {t.hero.location}
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
            <span className="font-mono text-xs">{t.meta.tagline}</span>
          </motion.div>

          <motion.div {...fadeUp(0.48)} className="mt-7 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t.hero.ctaPrimary}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.geodam.ir/files/CV-fadaei.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" aria-hidden="true" />
                {t.hero.ctaSecondary}
              </a>
            </Button>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.56)} className="mt-6 flex flex-wrap items-center gap-1.5">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.socials[s.key]}
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-card/60 text-muted-foreground transition-all",
                  "hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                )}
              >
                <s.icon className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Illustration column */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative"
        >
          <div className="grid-pattern absolute inset-0 -m-4" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-3 shadow-xl shadow-primary/5 backdrop-blur-sm">
            <DamIllustration className="h-auto w-full" />
          </div>
          <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
            {t.hero.figureCaption}
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {t.hero.stats.map((s, i) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {t.hero.scrollHint}
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
