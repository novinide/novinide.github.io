"use client";

/**
 * Decorative cross-section of a zoned embankment dam:
 * reservoir, riprap, filters, clay core, foundation rock, phreatic line & piezometers.
 * Colors are fixed earth tones that read well in both light & dark themes.
 */
export function DamIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 400"
      role="img"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.965 0.02 78)" />
          <stop offset="100%" stopColor="oklch(0.93 0.03 72)" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.075 190)" />
          <stop offset="100%" stopColor="oklch(0.58 0.08 205)" />
        </linearGradient>
        <linearGradient id="shell" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.66 0.09 66)" />
          <stop offset="100%" stopColor="oklch(0.55 0.085 62)" />
        </linearGradient>
        <linearGradient id="core" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.47 0.105 45)" />
          <stop offset="100%" stopColor="oklch(0.4 0.09 42)" />
        </linearGradient>
        <linearGradient id="rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.42 0.03 60)" />
          <stop offset="100%" stopColor="oklch(0.34 0.025 60)" />
        </linearGradient>
        <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="oklch(0.3 0.02 60)" strokeOpacity="0.35" strokeWidth="1.4" />
        </pattern>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="560" height="400" rx="18" fill="url(#sky)" />

      {/* Distant hills */}
      <path
        d="M0 190 L60 130 L130 185 L200 120 L270 185 L340 135 L410 190 L560 150 L560 400 L0 400 Z"
        fill="oklch(0.72 0.045 72)"
        opacity="0.55"
      />
      <path
        d="M0 230 L80 170 L170 225 L260 165 L350 225 L440 175 L560 225 L560 400 L0 400 Z"
        fill="oklch(0.66 0.05 68)"
        opacity="0.7"
      />

      {/* Foundation rock */}
      <path d="M0 300 L560 300 L560 400 L0 400 Z" fill="url(#rock)" />
      <path d="M0 300 L560 300 L560 400 L0 400 Z" fill="url(#hatch)" />
      <line x1="0" y1="300" x2="560" y2="300" stroke="oklch(0.3 0.02 60)" strokeWidth="2" />

      {/* Grout curtain */}
      <rect x="285" y="300" width="16" height="80" fill="oklch(0.5 0.06 200)" opacity="0.7" />

      {/* Reservoir water */}
      <path d="M0 210 L200 210 L262 300 L0 300 Z" fill="url(#water)" />
      {/* Water surface ripples */}
      <g stroke="oklch(0.9 0.03 195)" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
        <line x1="24" y1="206" x2="70" y2="206" />
        <line x1="86" y1="206" x2="122" y2="206" />
        <line x1="138" y1="206" x2="166" y2="206" />
        <line x1="180" y1="206" x2="198" y2="206" />
      </g>

      {/* Dam body — outer shell */}
      <path d="M150 300 L205 122 L268 122 L400 300 Z" fill="url(#shell)" />
      {/* Filters */}
      <path d="M232 122 L244 122 L306 300 L282 300 Z" fill="oklch(0.78 0.06 84)" />
      <path d="M228 122 L234 122 L284 300 L264 300 Z" fill="oklch(0.83 0.055 90)" />
      {/* Clay core */}
      <path d="M236 122 L240 122 L286 300 L266 300 Z" fill="url(#core)" />
      {/* Crest / road */}
      <rect x="196" y="112" width="82" height="12" rx="3" fill="oklch(0.36 0.02 60)" />
      <g stroke="oklch(0.95 0.01 85)" strokeWidth="2">
        <line x1="204" y1="118" x2="214" y2="118" />
        <line x1="222" y1="118" x2="232" y2="118" />
        <line x1="240" y1="118" x2="250" y2="118" />
        <line x1="258" y1="118" x2="268" y2="118" />
      </g>
      {/* Parapet */}
      <rect x="196" y="104" width="6" height="10" rx="2" fill="oklch(0.32 0.02 60)" />
      <rect x="268" y="104" width="6" height="10" rx="2" fill="oklch(0.32 0.02 60)" />
      {/* Riprap on upstream slope */}
      <g fill="oklch(0.52 0.06 55)">
        <ellipse cx="196" cy="150" rx="11" ry="7" transform="rotate(62 196 150)" />
        <ellipse cx="208" cy="180" rx="12" ry="7" transform="rotate(62 208 180)" />
        <ellipse cx="220" cy="210" rx="11" ry="7" transform="rotate(62 220 210)" />
        <ellipse cx="232" cy="240" rx="12" ry="7" transform="rotate(62 232 240)" />
        <ellipse cx="243" cy="270" rx="11" ry="7" transform="rotate(62 243 270)" />
      </g>

      {/* Phreatic line */}
      <path
        d="M196 212 C 230 218, 262 236, 284 292"
        fill="none"
        stroke="oklch(0.9 0.06 200)"
        strokeWidth="2.5"
        strokeDasharray="7 6"
        strokeLinecap="round"
      />

      {/* Drain */}
      <path d="M300 300 L330 262 L342 262 L318 300 Z" fill="oklch(0.8 0.05 90)" />

      {/* Seepage arrows through foundation */}
      <g stroke="oklch(0.85 0.05 200)" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.9">
        <path d="M296 322 L336 322 M330 316 L336 322 L330 328" />
        <path d="M296 344 L356 344 M350 338 L356 344 L350 350" />
        <path d="M296 366 L376 366 M370 360 L376 366 L370 372" />
      </g>

      {/* Piezometer standpipes */}
      <g stroke="oklch(0.28 0.02 60)" strokeWidth="2">
        <line x1="292" y1="330" x2="292" y2="296" />
        <line x1="330" y1="330" x2="330" y2="286" />
      </g>
      <circle cx="292" cy="296" r="4" fill="oklch(0.68 0.14 60)" />
      <circle cx="330" cy="286" r="4" fill="oklch(0.68 0.14 60)" />

      {/* Sun */}
      <circle cx="488" cy="64" r="26" fill="oklch(0.83 0.12 82)" />
      <circle cx="488" cy="64" r="18" fill="oklch(0.88 0.1 85)" />

      {/* Birds */}
      <g stroke="oklch(0.35 0.03 60)" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M372 84 q 7 -8 14 0 q 7 -8 14 0" />
        <path d="M408 106 q 6 -7 12 0 q 6 -7 12 0" />
      </g>

      {/* Frame */}
      <rect x="0" y="0" width="560" height="400" rx="18" fill="none" stroke="oklch(0.4 0.03 60)" strokeOpacity="0.25" strokeWidth="2" />
    </svg>
  );
}
