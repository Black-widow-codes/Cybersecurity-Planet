import Link from "next/link";

export default function FeaturedToolSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-6xl mx-auto rounded-2xl bg-white border p-8 shadow-sm md:flex md:items-center md:justify-between">
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
          href="/tools/checkup"
          className="mt-6 inline-block rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white md:mt-0"
        >
          Take the Checkup
        </Link>
      </div>
    </section>
  );
}