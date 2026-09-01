import Link from "next/link";

export default function CTASection() {
  return (
    <section className="border-y border-transparent bg-blue-950 px-6 py-20 text-white transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold dark:text-blue-200">
          Ready to Become a More Confident Digital Citizen?
        </h2>

        <p className="mt-6 text-lg text-blue-100 dark:text-slate-300">
          Explore learning resources, assess your digital habits, and build the
          knowledge you need to navigate technology safely, responsibly, and
          confidently.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
          <Link
            href="/learn"
            className="rounded-lg bg-cyan-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-950"
          >
            Start Learning
          </Link>

          <Link
            href="/tools/digital-citizenship-checkup"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 dark:border-slate-500 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:bg-slate-800 dark:hover:text-cyan-300 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-950"
          >
            Take the Checkup
          </Link>
        </div>
      </div>
    </section>
  );
}