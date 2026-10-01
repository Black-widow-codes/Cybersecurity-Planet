import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Insights",
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
      {/* Page introduction */}
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

      {/* Featured insight */}
      <section className="mt-12" aria-labelledby="featured-insight">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
          Featured Insight
        </p>

        <article className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[430px]">
              <Image
                src="/images/insights/cybersecurity-awareness-month-2026.png"
                alt="Earth viewed from space with Canada visible and glowing cybersecurity connections and security icons surrounding the planet"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-300">
                  Cybersecurity Awareness
                </span>

                <span className="text-sm text-gray-500 dark:text-slate-400">
                  October 2026
                </span>
              </div>

              <h2
                id="featured-insight"
                className="mt-5 text-3xl font-bold leading-tight text-blue-900 md:text-4xl dark:text-blue-200"
              >
                Cyber Security Awareness Month 2026: Your Best Defence Is You
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-slate-300">
                Cyber threats are becoming more convincing, but everyday habits
                still make a difference. Learn practical ways to recognize
                scams, strengthen accounts, protect devices, and help others
                stay safer online.
              </p>

              <div className="mt-8">
                <Link
                  href="/insights/cybersecurity-awareness-month-2026"
                  className="inline-flex items-center rounded-lg bg-cyan-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
                >
                  Read Featured Insight
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Latest insights */}
      <section className="mt-16" aria-labelledby="latest-insights">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
            Explore More
          </p>

          <h2
            id="latest-insights"
            className="mt-2 text-3xl font-bold text-blue-900 dark:text-blue-200"
          >
            Latest Insights
          </h2>
        </div>

        <div
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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

              <h3 className="mt-2 text-2xl font-bold text-blue-900 dark:text-blue-200">
                {insight.title}
              </h3>

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
        </div>
      </section>

      {/* Learning pathways */}
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