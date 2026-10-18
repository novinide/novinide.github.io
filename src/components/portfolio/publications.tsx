"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Filter = "all" | "journal" | "conference";

export function Publications() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(() => {
    if (filter === "all") return t.publications.items;
    return t.publications.items.filter((p) => p.type === filter);
  }, [filter, t]);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.publications.filters.all },
    { key: "conference", label: t.publications.filters.conference },
    { key: "journal", label: t.publications.filters.journal },
  ];

  return (
    <section id="publications" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          kicker={t.publications.kicker}
          title={t.publications.title}
          subtitle={t.publications.subtitle}
        />

        {/* Filters */}
        <Reveal className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <Button
              key={f.key}
              size="sm"
              variant={filter === f.key ? "default" : "outline"}
              onClick={() => setFilter(f.key)}
              className="rounded-full"
              aria-pressed={filter === f.key}
            >
              {f.label}
              <span
                className={cn(
                  "ms-1.5 rounded-full px-1.5 font-mono text-[10px] leading-4",
                  filter === f.key ? "bg-primary-foreground/20" : "bg-muted"
                )}
                dir="ltr"
              >
                {f.key === "all"
                  ? t.publications.items.length
                  : t.publications.items.filter((p) => p.type === f.key).length}
              </span>
            </Button>
          ))}
        </Reveal>

        {/* List */}
        <ol className="space-y-3.5">
          <AnimatePresence initial={false} mode="popLayout">
            {items.map((pub, i) => (
              <motion.li
                key={pub.title}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.25) }}
              >
                <article className="group flex gap-4 rounded-xl border border-border/70 bg-card p-4.5 transition-colors hover:border-primary/40 sm:p-5">
                  {/* Year rail */}
                  <div className="flex w-12 shrink-0 flex-col items-center gap-1.5 border-e border-border/60 pe-3 text-center">
                    <span className="font-mono text-sm font-bold tabular-nums text-primary" dir="ltr">
                      {pub.year}
                    </span>
                    {pub.type === "journal" ? (
                      <BookOpen className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    ) : (
                      <FileText className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold leading-snug transition-colors group-hover:text-primary">
                      {pub.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{pub.venue}</p>
                    {pub.note ? <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground/85">{pub.note}</p> : null}
                    <span className="mt-2.5 inline-block rounded-md bg-secondary/70 px-2 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                      {t.publications.typeLabels[pub.type as keyof typeof t.publications.typeLabels]}
                    </span>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>

        {/* CTA */}
        <Reveal className="mt-8 flex justify-center">
          <a
            href="https://scholar.google.com/citations?user=uT3-iOUAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {t.publications.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
