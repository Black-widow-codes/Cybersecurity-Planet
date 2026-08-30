import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-blue-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold">
          Ready to Become a More Confident Digital Citizen?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Explore learning resources, assess your digital habits, and build the
          knowledge you need to navigate technology safely, responsibly, and
          confidently.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
          <Link
            href="/learn"
            className="rounded-lg bg-cyan-700 px-6 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
          >
            Start Learning
          </Link>

          <Link
            href="/tools/digital-citizenship-checkup"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
          >
            Take the Checkup
          </Link>
        </div>
      </div>
    </section>
  );
}
