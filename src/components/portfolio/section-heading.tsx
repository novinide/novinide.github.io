"use client";

import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
}

export function SectionHeading({ kicker, title, subtitle, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn("mb-10 max-w-2xl sm:mb-12", centered && "mx-auto text-center")}>
      <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary" dir="ltr">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </Reveal>
  );
}
