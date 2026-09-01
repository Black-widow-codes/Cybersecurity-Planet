import Image from "next/image";

export default function HeroGlobe() {
  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center"
      aria-hidden="true"
    >
      {/* Soft atmospheric glow */}
      <div className="absolute inset-[10%] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Slowly rotating cybersecurity orbit */}
      <svg
        viewBox="0 0 420 420"
        role="presentation"
        className="hero-orbit pointer-events-none absolute inset-0 z-20 h-full w-full"
      >
        <ellipse
          cx="210"
          cy="210"
          rx="184"
          ry="72"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.5"
          opacity="0.28"
          transform="rotate(-22 210 210)"
        />

        <ellipse
          cx="210"
          cy="210"
          rx="174"
          ry="58"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="0.8"
          opacity="0.14"
          transform="rotate(28 210 210)"
        />

        <circle
          cx="365"
          cy="168"
          r="4"
          fill="#67e8f9"
          opacity="0.95"
        />

        <circle
          cx="74"
          cy="272"
          r="2.5"
          fill="#38bdf8"
          opacity="0.75"
        />
      </svg>

      {/* Realistic Earth stays upright */}
      <div className="relative z-10 h-[82%] w-[82%]">
        <Image
          src="/images/cybersecurity-earth.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 80vw, 34rem"
          className="object-contain drop-shadow-[0_0_32px_rgba(14,165,233,0.25)]"
        />
      </div>
    </div>
  );
}