import Link from "next/link";
import CompassGlobe from "./CompassGlobe";

const pillars = [
  {
    title: "Digital Citizenship",
    href: "/learn/digital-citizenship",
    description:
      "Learn to participate responsibly online, manage your digital footprint, communicate respectfully, and make informed choices.",
  },
  {
    title: "Digital Safety",
    href: "/learn/digital-safety",
    description:
      "Build practical skills for safer passwords, phishing, scams, malware, suspicious links, and everyday online threats.",
  },
  {
    title: "Privacy & Digital Rights",
    href: "/learn/privacy-rights",
    description:
      "Understand personal data, online tracking, digital consent, surveillance, privacy rights, and ways to protect your information.",
  },
  {
    title: "Digital Health",
    href: "/learn/digital-health",
    description:
      "Learn to evaluate health information, use telehealth safely, understand health apps, wearables, and AI in healthcare.",
  },
  {
    title: "AI Literacy",
    href: "/learn/ai-literacy",
    description:
      "Understand AI, algorithms, bias, hallucinations, deepfakes, and how to use artificial intelligence responsibly.",
  },
  {
    title: "Media Literacy",
    href: "/learn/media-literacy",
    description:
      "Learn to evaluate sources, recognise misinformation and manipulation, fact-check claims, and identify AI-generated content.",
  },
];

export default function PillarsSection() {
  return (
    <section className="bg-gray-50 px-6 py-20 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Explore Digital Citizenship
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700 transition-colors dark:text-slate-300">
          Learn the key areas every digital citizen needs to understand in
          today&apos;s connected world.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-cyan-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-cyan-500 dark:hover:bg-slate-800/80 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-900"
            >
              <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                {pillar.title}
              </h3>

              <p className="mt-3 text-gray-600 transition-colors dark:text-slate-300">
                {pillar.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <div className="flex justify-center lg:justify-start">
            <CompassGlobe />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 transition-colors dark:text-cyan-300">
              Navigate the Digital World
            </p>

            <h3 className="mt-3 text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
              Learn. Protect. Share.
            </h3>

            <p className="mt-4 max-w-2xl text-lg text-gray-700 transition-colors dark:text-slate-300">
              Cybersecurity Planet is designed to help people understand
              technology, make informed choices, and navigate the digital world
              with greater confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}