import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Digital Rights | Cybersecurity Planet",
  description:
    "Learn about personal data, online tracking, digital consent, surveillance, privacy protection, and your digital privacy rights.",
};

const topics = [
  {
    title: "Personal Data",
    description:
      "Understand what personal data is and how apps, websites, and services may collect it.",
  },
  {
    title: "Consent",
    description:
      "Learn why informed consent matters when sharing information online.",
  },
  {
    title: "Tracking Technologies",
    description:
      "Explore cookies, location tracking, app permissions, and online profiling.",
  },
  {
    title: "Digital Rights",
    description:
      "Understand your rights related to privacy, access, security, and control over personal information.",
  },
  {
    title: "Data Security",
    description:
      "Learn how strong passwords, MFA, and secure habits protect personal information.",
  },
  {
    title: "Surveillance Awareness",
    description:
      "Recognize how digital systems can monitor behavior, location, communication, and online activity.",
  },
];

const articles = [
  {
    title: "What Is Personal Data and Why Does It Matter?",
    description:
      "Learn what personal data is, how digital services collect it, and how to reduce unnecessary exposure.",
    link: "/learn/privacy-rights/what-is-personal-data",
  },
  {
    title: "Understanding Digital Consent",
    description:
      "Learn what meaningful consent looks like when apps, websites, and online services collect or use personal information.",
    link: "/learn/privacy-rights/understanding-digital-consent",
  },
  {
    title: "How Websites and Apps Track You Online",
    description:
      "Learn how cookies, app permissions, location data, device identifiers, and profiling can be used to track digital activity.",
    link: "/learn/privacy-rights/how-websites-and-apps-track-you",
  },
  {
    title: "Understanding Your Digital Privacy Rights",
    description:
      "Learn about privacy rights involving personal information, transparency, access, correction, consent, security, and control.",
    link: "/learn/privacy-rights/understanding-your-digital-privacy-rights",
  },
  {
    title: "How to Protect Your Personal Data Online",
    description:
      "Learn practical ways to protect personal information using stronger authentication, safer devices, careful sharing, and secure digital habits.",
    link: "/learn/privacy-rights/how-to-protect-your-personal-data-online",
  },
  {
    title: "Understanding Digital Surveillance",
    description:
      "Learn how digital surveillance can involve monitoring devices, locations, communications, online activity, and other forms of personal data.",
    link: "/learn/privacy-rights/understanding-digital-surveillance",
  },
];

const examples = [
  "A mobile app asks for access to your location.",
  "A website tracks your browsing behavior using cookies.",
  "A health app collects sleep, activity, or heart rate data.",
  "A social media platform recommends content based on your activity.",
  "An AI tool stores prompts or uploaded information.",
];

const actions = [
  "Review app permissions regularly.",
  "Use strong passwords and multi-factor authentication.",
  "Avoid sharing sensitive information unnecessarily.",
  "Read privacy settings before using important platforms.",
  "Be cautious when uploading personal or health information to AI tools.",
];

export default function PrivacyRightsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        Privacy & Digital Rights
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-700 transition-colors dark:text-slate-300">
        Privacy and digital rights help people understand how their personal
        information is collected, used, shared, and protected in digital
        environments. These rights are important for safety, dignity, autonomy,
        and informed participation online.
      </p>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Why Privacy Matters
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-gray-700 transition-colors dark:text-slate-300">
          Every time people use apps, websites, social media, health platforms,
          or AI tools, data may be collected about them. Understanding privacy
          helps digital citizens make informed choices, reduce risk, and protect
          sensitive information.
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
          What You Can Do
        </h2>

        <ul className="mt-6 space-y-3 text-gray-700 transition-colors dark:text-slate-300">
          {actions.map((action) => (
            <li key={action} className="flex gap-3">
              <span
                aria-hidden="true"
                className="font-bold text-cyan-700 dark:text-cyan-300"
              >
                ✓
              </span>

              <span>{action}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-blue-900 p-8 text-white dark:bg-blue-950">
        <h2 className="text-3xl font-bold">
          Key Takeaway
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Privacy is not about hiding something wrong. It is about having
          control over personal information, understanding how data is used,
          and protecting digital dignity and safety.
        </p>
      </section>
    </section>
  );
}