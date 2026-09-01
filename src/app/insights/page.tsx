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
  {
    title:
      "Why Data Breaches Still Matter Even When Your Password Wasn't Stolen",
    description:
      "A breach does not have to expose your password to create risk. Personal information can still make phishing, impersonation, and identity fraud more convincing.",
    href: "/insights/why-data-breaches-still-matter",
    category: "Privacy & Digital Rights · Digital Safety",
  },
  {
    title: "Can You Trust AI With Your Health Questions?",
    description:
      "AI can make health information easier to understand, but a confident answer is not always a reliable one. Learn where AI can help and where verification matters.",
    href: "/insights/can-you-trust-ai-with-your-health-questions",
    category: "Digital Health · AI Literacy",
  },
];

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-200">
          Insights
        </h1>

        <p className="mt-6 text-lg text-gray-700 dark:text-slate-300">
          Explore articles and commentary about the technologies, risks, and
          decisions shaping our digital lives.
        </p>

        <p className="mt-3 text-gray-600 dark:text-slate-400">
          Cybersecurity Planet Insights goes beyond definitions. These articles
          examine real situations, challenge assumptions, and encourage
          practical thinking about what we can do differently online.
        </p>
      </div>

      <section
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Cybersecurity Planet insights"
      >
        {insights.map((insight) => (
          <article
            key={insight.href}
            className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800"
          >
            <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">
              {insight.category}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-blue-900 dark:text-blue-200">
              {insight.title}
            </h2>

            <p className="mt-4 flex-1 text-gray-600 dark:text-slate-300">
              {insight.description}
            </p>

            <Link
              href={insight.href}
              className="mt-6 inline-block self-start rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-800"
            >
              Read Insight
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-xl border border-gray-200 bg-gray-50 p-8 transition-colors dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
          Learn, Check, and Act
        </h2>

        <p className="mt-3 text-gray-700 dark:text-slate-300">
          Insights explores why digital issues matter. You can also build your
          knowledge in Learn, assess your habits with Tools, and use practical
          checklists and trusted references in Resources.
        </p>

        <div className="mt-5 flex flex-wrap gap-5">
          <Link
            href="/learn"
            className="rounded-sm font-semibold text-cyan-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:text-cyan-400 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Explore Learn
          </Link>

          <Link
            href="/tools"
            className="rounded-sm font-semibold text-cyan-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:text-cyan-400 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Explore Tools
          </Link>

          <Link
            href="/resources"
            className="rounded-sm font-semibold text-cyan-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:text-cyan-400 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Explore Resources
          </Link>
        </div>
      </section>
    </div>
  );
}