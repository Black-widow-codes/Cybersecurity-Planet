import Image from "next/image";

export default function CompassGlobe() {
  return (
    <div
      className="relative flex aspect-square w-full max-w-[21rem] items-center justify-center"
      aria-hidden="true"
    >
      {/* Realistic Earth in the centre */}
      <div className="absolute left-1/2 top-1/2 z-10 h-[50.5%] w-[50.5%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
        <Image
          src="/images/cybersecurity-earth.png"
          alt=""
          fill
          sizes="21rem"
          className="object-cover"
        />
      </div>

      {/* Compass overlay */}
      <svg
        viewBox="0 0 360 360"
        role="presentation"
        className="relative z-20 h-full w-full"
      >
        <defs>
        <linearGradient
  id="compassMetal"
  x1="0%"
  y1="0%"
  x2="100%"
  y2="100%"
>
  <stop offset="0%" stopColor="var(--compass-metal-light)" />
  <stop offset="45%" stopColor="var(--compass-metal-mid)" />
  <stop offset="100%" stopColor="var(--compass-metal-end)" />
</linearGradient>

          <filter
            id="compassGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Stationary outer compass */}
        <g>
          <circle
            cx="180"
            cy="180"
            r="142"
            fill="none"
            stroke="var(--compass-outer)"
            strokeWidth="2"
            opacity="0.35"
          />

          <circle
            cx="180"
            cy="180"
            r="128"
            fill="none"
            stroke="url(#compassMetal)"
            strokeWidth="5"
            opacity="0.85"
          />

          <circle
            cx="180"
            cy="180"
            r="113"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            opacity="0.45"
          />

          {/* Main compass points */}
          <g
            fill="url(#compassMetal)"
            stroke="#38bdf8"
            strokeWidth="1"
          >
            <path d="M180 20L193 78L180 68L167 78Z" />
            <path d="M340 180L282 193L292 180L282 167Z" />
            <path d="M180 340L167 282L180 292L193 282Z" />
            <path d="M20 180L78 167L68 180L78 193Z" />
          </g>

          {/* Smaller directional points */}
          <g fill="#38bdf8" opacity="0.7">
            <path d="M67 67L108 94L94 108Z" />
            <path d="M293 67L266 108L252 94Z" />
            <path d="M293 293L252 266L266 252Z" />
            <path d="M67 293L94 252L108 266Z" />
          </g>

          {/* Cardinal letters */}
          <g
            fill="var(--compass-label)"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="18"
            fontWeight="700"
            textAnchor="middle"
          >
            <text x="180" y="58">
              N
            </text>

            <text x="304" y="186">
              E
            </text>

            <text x="180" y="316">
              S
            </text>

            <text x="56" y="186">
              W
            </text>
          </g>
        </g>

        {/* Subtle rotating inner orbit */}
        <g className="compass-globe-inner">
          <ellipse
            cx="180"
            cy="180"
            rx="104"
            ry="46"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.2"
            opacity="0.3"
            transform="rotate(-24 180 180)"
          />

          <ellipse
            cx="180"
            cy="180"
            rx="98"
            ry="38"
            fill="none"
            stroke="var(--compass-accent)"
            strokeWidth="0.9"
            opacity="0.2"
            transform="rotate(30 180 180)"
          />

          <circle
            cx="270"
            cy="156"
            r="3"
            fill="#67e8f9"
            opacity="0.9"
          />

          <circle
            cx="92"
            cy="212"
            r="2"
            fill="#38bdf8"
            opacity="0.75"
          />
        </g>

        {/* Earth border */}
        <circle
          cx="180"
          cy="180"
          r="91"
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="2"
          opacity="0.8"
          filter="url(#compassGlow)"
        />

        {/* Inner guide ring */}
        <circle
          cx="180"
          cy="180"
          r="96"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}