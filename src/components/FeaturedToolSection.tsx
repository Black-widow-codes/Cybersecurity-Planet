import Link from "next/link";

export default function FeaturedToolSection() {
  return (
    <section className="bg-gray-50 px-6 py-20 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-colors md:flex md:items-center md:justify-between dark:border-slate-700 dark:bg-slate-900">
        <div>
          <p className="font-semibold text-cyan-600 transition-colors dark:text-cyan-300">
            Featured Tool
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Digital Citizenship Checkup
          </h2>

          <p className="mt-4 max-w-2xl text-gray-700 transition-colors dark:text-slate-300">
            Assess your digital habits and receive a simple awareness score to
            help you improve your privacy, safety, and confidence online.
          </p>
        </div>

        <Link
          href="/tools/digital-citizenship-checkup"
          className="mt-6 inline-block rounded-lg bg-cyan-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 md:mt-0 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-950"
        >
          Take the Checkup
        </Link>
      </div>
    </section>
  );
}