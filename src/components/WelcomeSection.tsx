import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-5xl font-bold text-blue-900">
        Cybersecurity Planet
      </h1>

      <p className="mt-6 text-xl font-semibold text-cyan-600">
        Navigate Technology with Confidence
      </p>

      <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-700">
  Empowering digital citizens through education on digital citizenship,
  digital safety, privacy and digital rights, digital health, AI literacy,
  media literacy, and informed decision-making.
</p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/learn"
          className="rounded-lg bg-cyan-700 px-6 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
        >
          Start Learning
        </Link>

        <Link
          href="/learn"
          className="rounded-lg border border-blue-900 px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2"
        >
          Explore Topics
        </Link>
      </div>
    </section>
  );
}
