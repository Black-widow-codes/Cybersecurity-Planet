type GlobeLogoProps = {
    size?: number;
    className?: string;
    rotate?: boolean;
  };
  
  export default function GlobeLogo({
    size = 44,
    className = "",
    rotate = false,
  }: GlobeLogoProps) {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        style={{
          width: size,
          height: size,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 120 120"
          width={size}
          height={size}
          role="presentation"
          className={rotate ? "globe-logo-rotate" : ""}
        >
          <defs>
            <radialGradient id="shieldGlobeOcean" cx="35%" cy="28%" r="75%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="45%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#082f49" />
            </radialGradient>
  
            <linearGradient
              id="shieldGlobeLand"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
  
            <linearGradient
              id="shieldOutline"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
  
            <filter
              id="shieldGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="2.5" result="blur" />
  
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
  
            <clipPath id="globeClip">
              <circle cx="60" cy="53" r="31" />
            </clipPath>
          </defs>
  
          {/* Shield */}
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
            fill="#020617"
            stroke="url(#shieldOutline)"
            strokeWidth="4"
            strokeLinejoin="round"
            filter="url(#shieldGlow)"
          />
  
          {/* Inner shield detail */}
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
            stroke="#1d4ed8"
            strokeWidth="1.5"
            opacity="0.65"
          />
  
          {/* Globe */}
          <circle
            cx="60"
            cy="53"
            r="31"
            fill="url(#shieldGlobeOcean)"
            stroke="#7dd3fc"
            strokeWidth="1.5"
          />
  
          <g clipPath="url(#globeClip)">
            {/* Longitude */}
            <ellipse
              cx="60"
              cy="53"
              rx="16"
              ry="31"
              fill="none"
              stroke="#bae6fd"
              strokeWidth="0.8"
              opacity="0.45"
            />
  
            <ellipse
              cx="60"
              cy="53"
              rx="27"
              ry="31"
              fill="none"
              stroke="#bae6fd"
              strokeWidth="0.7"
              opacity="0.25"
            />
  
            {/* Latitude */}
            <path
              d="M29 53H91"
              stroke="#bae6fd"
              strokeWidth="0.8"
              opacity="0.4"
            />
  
            <path
              d="M33 42C49 47 71 47 87 42"
              fill="none"
              stroke="#bae6fd"
              strokeWidth="0.7"
              opacity="0.3"
            />
  
            <path
              d="M33 64C49 59 71 59 87 64"
              fill="none"
              stroke="#bae6fd"
              strokeWidth="0.7"
              opacity="0.3"
            />
  
            {/* Stylized land masses */}
            <path
              d="
                M42 31
                L49 28
                L57 31
                L61 36
                L57 40
                L51 39
                L48 44
                L41 45
                L37 41
                L38 35
                Z
              "
              fill="url(#shieldGlobeLand)"
            />
  
            <path
              d="
                M60 39
                L68 36
                L77 39
                L83 45
                L80 51
                L74 52
                L71 58
                L66 61
                L64 69
                L58 65
                L56 59
                L51 55
                L53 49
                L58 47
                Z
              "
              fill="url(#shieldGlobeLand)"
            />
  
            <path
              d="
                M71 68
                L78 67
                L83 72
                L80 78
                L73 79
                L69 75
                Z
              "
              fill="url(#shieldGlobeLand)"
            />
          </g>
  
          {/* Globe highlight */}
          <path
            d="M39 36C46 27 59 22 71 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.45"
          />
  
          {/* Bottom shield accent */}
          <path
            d="M42 94C48 99 54 103 60 106C66 103 72 99 78 94"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.65"
          />
        </svg>
      </span>
    );
  }