export default function CompassGlobe() {
    return (
      <div
        className="relative flex aspect-square w-full max-w-[21rem] items-center justify-center"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 360 360"
          role="presentation"
          className="h-full w-full"
        >
          <defs>
            <radialGradient id="compassOcean" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="45%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
  
            <linearGradient
              id="compassLand"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
  
            <linearGradient
              id="compassMetal"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="45%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#cbd5e1" />
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
  
            <clipPath id="compassGlobeClip">
              <circle cx="180" cy="180" r="91" />
            </clipPath>
          </defs>
  
          {/* Stationary outer compass */}
          <g>
            <circle
              cx="180"
              cy="180"
              r="142"
              fill="none"
              stroke="#0ea5e9"
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
              fill="#0f172a"
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
  
          {/* Rotating globe */}
          <g className="compass-globe-inner">
            <circle
              cx="180"
              cy="180"
              r="91"
              fill="url(#compassOcean)"
              stroke="#7dd3fc"
              strokeWidth="2"
              filter="url(#compassGlow)"
            />
  
            <g clipPath="url(#compassGlobeClip)">
              {/* Longitude */}
              <ellipse
                cx="180"
                cy="180"
                rx="45"
                ry="91"
                fill="none"
                stroke="#bae6fd"
                strokeWidth="1"
                opacity="0.35"
              />
  
              <ellipse
                cx="180"
                cy="180"
                rx="72"
                ry="91"
                fill="none"
                stroke="#bae6fd"
                strokeWidth="1"
                opacity="0.2"
              />
  
              {/* Latitude */}
              <path
                d="M89 180H271"
                stroke="#bae6fd"
                strokeWidth="1"
                opacity="0.35"
              />
  
              <path
                d="M99 147C145 162 215 162 261 147"
                fill="none"
                stroke="#bae6fd"
                strokeWidth="1"
                opacity="0.25"
              />
  
              <path
                d="M99 213C145 198 215 198 261 213"
                fill="none"
                stroke="#bae6fd"
                strokeWidth="1"
                opacity="0.25"
              />
  
              {/* Continents */}
              <path
                d="
                  M128 125
                  L143 115
                  L160 119
                  L171 131
                  L164 144
                  L151 145
                  L146 159
                  L131 162
                  L120 151
                  L123 137
                  Z
                "
                fill="url(#compassLand)"
              />
  
              <path
                d="
                  M180 137
                  L200 127
                  L221 135
                  L236 151
                  L231 169
                  L219 175
                  L213 191
                  L201 200
                  L197 222
                  L180 211
                  L174 193
                  L161 184
                  L167 165
                  L178 159
                  Z
                "
                fill="url(#compassLand)"
              />
  
              <path
                d="
                  M220 219
                  L237 215
                  L251 226
                  L244 243
                  L226 247
                  L214 235
                  Z
                "
                fill="url(#compassLand)"
              />
  
              {/* Digital network */}
              <g fill="#7dd3fc">
                <circle cx="139" cy="143" r="2.5" />
                <circle cx="174" cy="173" r="2.5" />
                <circle cx="207" cy="153" r="2.5" />
                <circle cx="218" cy="192" r="2.5" />
                <circle cx="188" cy="216" r="2.5" />
              </g>
  
              <path
                d="M139 143L174 173L207 153L218 192L188 216"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1"
                opacity="0.5"
              />
            </g>
          </g>
  
          {/* Stationary centre ring */}
          <circle
            cx="180"
            cy="180"
            r="96"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>
    );
  }