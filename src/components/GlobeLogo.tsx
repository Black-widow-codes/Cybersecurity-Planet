import Image from "next/image";

type GlobeLogoProps = {
  size?: number;
  className?: string;
  rotate?: boolean;
};

export default function GlobeLogo({
  size = 44,
  className = "",
}: GlobeLogoProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
      aria-hidden="true"
    >
      {/* Realistic Earth - enlarged for navbar visibility */}
      <div className="absolute left-1/2 top-[44%] z-10 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
        <Image
          src="/images/cybersecurity-earth.png"
          alt=""
          fill
          sizes={`${size}px`}
          className="scale-[1.28] object-cover brightness-[1.5] contrast-[1.12] saturate-[1.2]"
        />
      </div>

      {/* Shield */}
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        role="presentation"
        className="relative z-20"
      >
        <defs>
          <linearGradient
            id="shieldOutline"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--logo-shield-start)" />
<stop offset="45%" stopColor="var(--logo-shield-mid)" />
<stop offset="100%" stopColor="var(--logo-shield-end)" />
          </linearGradient>

          <filter
            id="shieldGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="2" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer shield */}
        <path
          d="
            M60 5
            L105 22
            V53
            C105 83 88 103 60 115
            C32 103 15 83 15 53
            V22
            Z
          "
          fill="rgba(2, 6, 23, 0.2)"
          stroke="url(#shieldOutline)"
          strokeWidth="4"
          strokeLinejoin="round"
          filter="url(#shieldGlow)"
        />

        {/* Inner shield */}
        <path
          d="
            M60 12
            L97 26
            V53
            C97 77 84 94 60 105
            C36 94 23 77 23 53
            V26
            Z
          "
          fill="none"
          stroke="var(--logo-inner-shield)"
          strokeWidth="1.5"
          opacity="0.75"
        />

        {/* Bright atmospheric rim */}
        <circle
          cx="60"
          cy="53"
          r="32"
          fill="none"
          stroke="var(--logo-rim)"
          strokeWidth="2.5"
          opacity="0.95"
        />

        {/* Outer globe glow */}
        <circle
          cx="60"
          cy="53"
          r="35"
          fill="none"
          stroke="var(--logo-glow)"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Globe highlight */}
        <path
          d="M38 36C45 27 58 22 71 24"
          fill="none"
          stroke="#e0f2fe"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Bottom shield accent */}
        <path
          d="M42 94C48 99 54 103 60 106C66 103 72 99 78 94"
          fill="none"
          stroke="var(--logo-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </span>
  );
}