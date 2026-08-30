import Link from "next/link";

export default function FeaturedToolSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-2xl border bg-white p-8 shadow-sm md:flex md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-cyan-600">Featured Tool</p>

          <h2 className="mt-2 text-3xl font-bold text-blue-900">
            Digital Citizenship Checkup
          </h2>

          <p className="mt-4 max-w-2xl text-gray-700">
            Assess your digital habits and receive a simple awareness score to
            help you improve your privacy, safety, and confidence online.
          </p>
        </div>

        <Link
          href="/tools/digital-citizenship-checkup"
          className="mt-6 inline-block rounded-lg bg-cyan-700 px-6 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 md:mt-0"
        >
          Take the Checkup
        </Link>
      </div>
    </section>
  );
}
