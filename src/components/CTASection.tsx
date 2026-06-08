import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-blue-900 px-6 py-20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Ready to Become a More Confident Digital Citizen?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Explore learning resources, assess your digital habits,
          and build the knowledge you need to navigate technology
          safely, responsibly, and confidently.
        </p>

        <div className="mt-10 flex flex-col gap-4 justify-center md:flex-row">
          <Link
            href="/learn"
            className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold"
          >
            Start Learning
          </Link>

          <Link
            href="/tools/checkup"
            className="rounded-lg border border-white px-6 py-3 font-semibold"
          >
            Take the Checkup
          </Link>
        </div>
      </div>
    </section>
  );
}