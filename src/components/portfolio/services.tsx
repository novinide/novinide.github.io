"use client";

import { useLanguage } from "@/lib/i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Mountain, Waves, FlaskConical, Cpu, Check } from "lucide-react";

const ICONS = {
  mountain: Mountain,
  waves: Waves,
  flask: FlaskConical,
  cpu: Cpu,
} as const;

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.services.kicker} title={t.services.title} subtitle={t.services.subtitle} />

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Cpu;
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-7">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold leading-snug">{service.title}</h3>
                  </div>
                  <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-4 space-y-2.5 border-t border-border/60 pt-4">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
