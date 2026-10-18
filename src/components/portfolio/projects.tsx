"use client";

import { useLanguage } from "@/lib/i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Wrench, Code2, Landmark, Layers, Gauge, Microscope, ArrowUpRight } from "lucide-react";

const ICONS = {
  wrench: Wrench,
  code: Code2,
  dam: Landmark,
  layers: Layers,
  gauge: Gauge,
  microscope: Microscope,
} as const;

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.projects.kicker} title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {t.projects.items.map((project, i) => {
            const Icon = ICONS[project.icon as keyof typeof ICONS] ?? Wrench;
            return (
              <Reveal key={project.title} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  {/* Decorative header band */}
                  <div className="contour-pattern relative flex h-24 items-center justify-center border-b border-border/60 bg-gradient-to-br from-primary/12 via-primary/5 to-transparent">
                    <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-card shadow-sm ring-1 ring-border transition-transform group-hover:scale-105">
                      <Icon className="h-6.5 w-6.5 text-primary" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="absolute end-4 top-4 h-4 w-4 text-muted-foreground/50 transition-all group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-base font-bold leading-snug">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-border/60 bg-secondary/50 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
