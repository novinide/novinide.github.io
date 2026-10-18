"use client";

/**
 * Decorative cross-section of a zoned embankment dam:
 * reservoir, riprap, filters, clay core, foundation rock, phreatic line & piezometers.
 * Colors are fixed earth tones that read well in both light & dark themes.
 */
import Image from 'next/image'

export function DamIllustration({ className }: { className?: string }) {

  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
