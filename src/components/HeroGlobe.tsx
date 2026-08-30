export default function HeroGlobe() {
    return (
      <div
      className="mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center"
      aria-hidden="true"
    >
        <svg
          viewBox="0 0 420 420"
          role="presentation"
          className="hero-globe h-full w-full"
        >
          <defs>
            <radialGradient id="heroOcean" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="40%" stopColor="#0369a1" />
              <stop offset="72%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
  
            <linearGradient
              id="heroLand"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
  
            <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
  
            <filter
              id="heroGlobeGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
  
            <clipPath id="heroGlobeClip">
              <circle cx="210" cy="210" r="145" />
            </clipPath>
          </defs>
  
          {/* Outer ambient glow */}
          <circle
            cx="210"
            cy="210"
            r="195"
            fill="url(#heroGlow)"
            opacity="0.35"
          />
  
          {/* Orbital rings */}
          <ellipse
            cx="210"
            cy="210"
            rx="190"
            ry="82"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            opacity="0.45"
            transform="rotate(-18 210 210)"
          />
  
          <ellipse
            cx="210"
            cy="210"
            rx="174"
            ry="68"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1"
            opacity="0.25"
            transform="rotate(24 210 210)"
          />
  
          {/* Globe body */}
          <circle
            cx="210"
            cy="210"
            r="145"
            fill="url(#heroOcean)"
            stroke="#38bdf8"
            strokeWidth="3"
            filter="url(#heroGlobeGlow)"
          />
  
          <g clipPath="url(#heroGlobeClip)">
            {/* Longitude lines */}
            <ellipse
              cx="210"
              cy="210"
              rx="70"
              ry="145"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="1"
              opacity="0.35"
            />
  
            <ellipse
              cx="210"
              cy="210"
              rx="112"
              ry="145"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="1"
              opacity="0.18"
            />
  
            {/* Latitude lines */}
            <path
              d="M65 210H355"
              stroke="#7dd3fc"
              strokeWidth="1"
              opacity="0.35"
            />
  
            <path
              d="M80 160C155 185 265 185 340 160"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="1"
              opacity="0.22"
            />
  
            <path
              d="M80 260C155 235 265 235 340 260"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="1"
              opacity="0.22"
            />
  
            {/* Stylized continents */}
            <path
              d="
                M135 118
                L155 104
                L180 110
                L195 125
                L185 145
                L166 148
                L158 169
                L137 175
                L119 158
                L124 138
                Z
              "
              fill="url(#heroLand)"
            />
  
            <path
              d="
                M210 142
                L241 126
                L271 138
                L294 161
                L287 188
                L270 198
                L260 221
                L242 235
                L235 269
                L210 252
                L200 226
                L181 212
                L190 184
                L207 175
                Z
              "
              fill="url(#heroLand)"
            />
  
            <path
              d="
                M270 265
                L295 258
                L316 274
                L306 299
                L280 305
                L261 287
                Z
              "
              fill="url(#heroLand)"
            />
  
            {/* Digital network nodes */}
            <g fill="#7dd3fc" opacity="0.8">
              <circle cx="150" cy="150" r="3" />
              <circle cx="190" cy="190" r="2.5" />
              <circle cx="235" cy="165" r="2.5" />
              <circle cx="260" cy="220" r="3" />
              <circle cx="215" cy="260" r="2.5" />
              <circle cx="295" cy="190" r="2" />
            </g>
  
            <g
              stroke="#38bdf8"
              strokeWidth="1"
              opacity="0.35"
            >
              <path d="M150 150L190 190L235 165L260 220L215 260" />
              <path d="M235 165L295 190L260 220" />
            </g>
          </g>
  
          {/* Highlight */}
          <path
            d="M120 130C155 92 210 72 264 84"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.2"
          />
  
          {/* Orbit accent */}
          <circle
            cx="349"
            cy="167"
            r="5"
            fill="#7dd3fc"
            filter="url(#heroGlobeGlow)"
          />
        </svg>
      </div>
    );
  }