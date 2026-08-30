import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn | Cybersecurity Planet",
  description:
    "Explore beginner-friendly learning paths on digital citizenship, digital safety, privacy and digital rights, digital health, AI literacy, and media literacy.",
};
import Link from "next/link";

const topics = [
  {
    title: "Digital Citizenship",
    link: "/learn/digital-citizenship",
    description:
      "Learn responsible, ethical, and confident participation in digital spaces.",
  },
  {
    title: "Digital Safety",
    link: "/learn/digital-safety",
    description:
      "Protect yourself from scams, phishing, and cyber threats.",
  },
  {
    title: "Privacy & Digital Rights",
    link: "/learn/privacy-rights",
    description:
      "Understand privacy, data protection, and digital rights.",
  },
  {
    title: "Digital Health",
    link: "/learn/digital-health",
    description:
      "Explore digital wellbeing, health information, and telehealth.",
  },
  {
    title: "AI Literacy",
    link: "/learn/ai-literacy",
    description:
      "Understand AI tools, algorithms, and responsible AI use.",
  },
  {
    title: "Media Literacy",
    link: "/learn/media-literacy",
    description:
      "Learn how to evaluate information and identify misinformation.",
  },
];

export default function LearnPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Learning Hub
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        Explore learning paths designed to help digital citizens navigate
        technology with confidence.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {topics.map((topic) => (
          <article
            key={topic.link}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-blue-900">
              {topic.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {topic.description}
            </p>

            <Link
  href={topic.link}
  className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-2 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
>
  Explore {topic.title}
</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
