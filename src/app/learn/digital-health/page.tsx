import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Health | Cybersecurity Planet",
  description:
    "Learn how to evaluate health information online, use telehealth safely, understand health data, AI in healthcare, wearables, and health misinformation.",
};

const topics = [
  {
    title: "Health Information Online",
    description:
      "Learn how to identify credible health information and avoid misleading medical claims.",
  },
  {
    title: "Telehealth Safety",
    description:
      "Understand how to use virtual healthcare services safely and effectively.",
  },
  {
    title: "Health Data Privacy",
    description:
      "Explore how personal health information is collected, stored, shared, and protected.",
  },
  {
    title: "Wearables & Health Apps",
    description:
      "Understand the benefits and privacy considerations of fitness trackers and health applications.",
  },
  {
    title: "AI in Healthcare",
    description:
      "Learn how artificial intelligence supports diagnosis, treatment, and healthcare decision-making.",
  },
  {
    title: "Health Misinformation",
    description:
      "Develop skills to evaluate online health claims before trusting or sharing them.",
  },
];

const articles = [
  {
    title: "How to Evaluate Health Information Online",
    description:
      "Learn how to evaluate online health information, recognize warning signs, verify medical claims, and find more trustworthy sources.",
    link: "/learn/digital-health/how-to-evaluate-health-information-online",
  },
  {
    title: "How to Use Telehealth Safely",
    description:
      "Learn how to prepare for virtual healthcare visits, protect your privacy, verify providers, and use telehealth services more safely.",
    link: "/learn/digital-health/how-to-use-telehealth-safely",
  },
  {
    title: "How Your Health Data Is Collected and Protected",
    description:
      "Learn how health information is collected, stored, shared, and protected across healthcare systems, apps, portals, and digital services.",
    link: "/learn/digital-health/how-your-health-data-is-collected-and-protected",
  },
  {
    title: "Understanding Wearable Devices and Health Apps",
    description:
      "Learn how wearable devices and health apps collect health information, their potential benefits, and the privacy and security issues to consider.",
    link: "/learn/digital-health/understanding-wearable-devices-and-health-apps",
  },
  {
    title: "Understanding AI in Your Healthcare",
    description:
      "Learn how artificial intelligence may be used in healthcare, what it can and cannot do, and what patients should know about privacy, bias, and human oversight.",
    link: "/learn/digital-health/understanding-ai-in-your-healthcare",
  },
  {
    title: "Understanding Health Misinformation Online",
    description:
      "Learn how misleading health claims spread online, why they can be convincing, and how to respond more safely.",
    link: "/learn/digital-health/understanding-health-misinformation-online",
  },
];

const examples = [
  "Booking a virtual appointment through a telehealth platform.",
  "Using a smartwatch to monitor heart rate and physical activity.",
  "Accessing laboratory results through a patient portal.",
  "Using AI-powered tools to support healthcare professionals.",
];

const safetyTips = [
  "Protect health accounts with strong passwords.",
  "Review privacy settings on health apps.",
  "Verify online health information with trusted sources.",
  "Understand how your health data may be used or shared.",
  "Discuss major health decisions with qualified professionals.",
];

export default function DigitalHealthPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        Digital Health & Wellbeing
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-700 transition-colors dark:text-slate-300">
        Digital health refers to the use of technology to improve healthcare,
        health education, patient engagement, and personal wellbeing. It
        includes telehealth, mobile health apps, wearable devices, electronic
        health records, and artificial intelligence.
      </p>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Why Digital Health Matters
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-gray-700 transition-colors dark:text-slate-300">
          Technology is transforming how people access healthcare, manage
          chronic conditions, receive medical advice, and make health decisions.
          Understanding digital health helps individuals use these technologies
          safely, effectively, and responsibly.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Key Topics
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 transition-colors dark:text-slate-300">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Articles
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.link}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                {article.title}
              </h3>

              <p className="mt-3 text-gray-600 transition-colors dark:text-slate-300">
                {article.description}
              </p>

              <Link
                href={article.link}
                className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-gray-50 p-8 transition-colors dark:bg-slate-900">
        <h2 className="text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Real-World Examples
        </h2>

        <ul className="mt-6 list-disc space-y-4 pl-6 text-gray-700 transition-colors dark:text-slate-300">
          {examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Key Safety Tips
        </h2>

        <ul className="mt-6 space-y-3 text-gray-700 transition-colors dark:text-slate-300">
          {safetyTips.map((tip) => (
            <li key={tip} className="flex gap-3">
              <span
                aria-hidden="true"
                className="font-bold text-cyan-700 dark:text-cyan-300"
              >
                ✓
              </span>

              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-blue-900 p-8 text-white dark:bg-blue-950">
        <h2 className="text-3xl font-bold">
          Key Takeaway
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Digital health can improve access, convenience, and health outcomes,
          but it also requires individuals to understand privacy, security,
          information quality, and responsible technology use.
        </p>
      </section>
    </section>
  );
}