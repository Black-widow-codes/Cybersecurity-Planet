import Link from "next/link";

export const metadata = {
  title: "Insights | Cybersecurity Planet",
  description:
    "Read humane, practical analysis and commentary on cybersecurity, privacy, artificial intelligence, media literacy, digital health, and life online.",
};

const insights = [
  {
    title:
      "Deepfakes Are Getting Harder to Spot: What That Means for Online Trust",
    description:
      "As AI-generated media becomes more convincing, the challenge is no longer simply spotting what is fake. It is learning what deserves our trust.",
    href: "/insights/deepfakes-and-online-trust",
    category: "AI Literacy · Media Literacy",
  },
];

export default function InsightsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-900">
          Insights
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Explore articles and commentary about the technologies, risks, and
          decisions shaping our digital lives.
        </p>

        <p className="mt-3 text-gray-600">
          Cybersecurity Planet Insights goes beyond definitions. These articles
          examine real situations, challenge assumptions, and encourage
          practical thinking about what we can do differently online.
        </p>
      </div>

      <section
        className="mt-12 grid gap-6 md:grid-cols-2"
        aria-label="Cybersecurity Planet insights"
      >
        {insights.map((insight) => (
          <article
            key={insight.href}
            className="flex flex-col rounded-xl border bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-cyan-700">
              {insight.category}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-blue-900">
              {insight.title}
            </h2>

            <p className="mt-4 flex-1 text-gray-600">
              {insight.description}
            </p>

            <Link
              href={insight.href}
              className="mt-6 inline-block self-start rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
            >
              Read Insight
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-xl border bg-gray-50 p-8">
        <h2 className="text-2xl font-bold text-blue-900">
          Learn, Check, and Act
        </h2>

        <p className="mt-3 text-gray-700">
          Insights explores why digital issues matter. You can also build your
          knowledge in Learn, assess your habits with Tools, and use practical
          checklists and trusted references in Resources.
        </p>

        <div className="mt-5 flex flex-wrap gap-5">
          <Link
            href="/learn"
            className="font-semibold text-cyan-700 hover:underline"
          >
            Explore Learn
          </Link>

          <Link
            href="/tools"
            className="font-semibold text-cyan-700 hover:underline"
          >
            Explore Tools
          </Link>

          <Link
            href="/resources"
            className="font-semibold text-cyan-700 hover:underline"
          >
            Explore Resources
          </Link>
        </div>
      </section>
    </main>
  );
}