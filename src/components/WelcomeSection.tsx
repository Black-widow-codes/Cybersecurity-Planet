import Link from "next/link";
import HeroGlobe from "./HeroGlobe";

export default function WelcomeSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Cybersecurity Planet
          </h1>

          <p className="mt-6 text-xl font-semibold text-cyan-600 transition-colors dark:text-cyan-300">
            Navigate Technology with Confidence
          </p>

          <p className="mt-8 max-w-2xl text-lg text-gray-700 transition-colors lg:max-w-xl dark:text-slate-300">
            Empowering digital citizens through education on digital
            citizenship, digital safety, privacy and digital rights, digital
            health, AI literacy, media literacy, and informed decision-making.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/learn"
              className="rounded-lg bg-cyan-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-950"
            >
              Start Learning
            </Link>

            <Link
              href="/learn"
              className="rounded-lg border border-blue-900 px-6 py-3 font-semibold text-blue-900 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-blue-950/50 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
            >
              Explore Topics
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <HeroGlobe />
        </div>
      </div>
    </section>
  );
}