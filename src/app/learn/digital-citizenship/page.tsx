import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Citizenship | Cybersecurity Planet",
  description:
    "Learn how to participate responsibly and confidently online through respectful communication, critical thinking, digital wellbeing, and responsible technology use.",
};

const principles = [
  {
    title: "Think Before You Share",
    description:
      "Pause before posting, forwarding, or reacting to content online.",
  },
  {
    title: "Protect Your Digital Footprint",
    description:
      "Understand that online actions can affect reputation, privacy, and opportunities.",
  },
  {
    title: "Respect Others Online",
    description:
    "Communicate responsibly and avoid harmful, abusive, or misleading behaviour.",
  },
  {
    title: "Evaluate Information",
    description:
      "Check sources, evidence, and context before trusting or sharing information.",
  },
];

const articles = [
  {
    title: "Think Before You Share",
    description:
      "Learn why pausing before posting, forwarding, or reacting online can protect your privacy, reputation, and relationships.",
    link: "/learn/digital-citizenship/think-before-you-share",
  },
  {
    title: "Understanding Your Digital Footprint",
    description:
      "Learn how your online activity creates a digital footprint and how it can affect privacy, reputation, and future opportunities.",
    link: "/learn/digital-citizenship/understanding-your-digital-footprint",
  },
  {
    title: "How to Communicate Respectfully Online",
    description:
      "Learn practical ways to handle disagreements, respect boundaries, and communicate responsibly in digital spaces.",
    link: "/learn/digital-citizenship/how-to-communicate-respectfully-online",
  },
  {
    title: "How to Evaluate Information Before Sharing It",
    description:
      "Learn how to check sources, evidence, dates, context, and credibility before forwarding or posting information online.",
    link: "/learn/digital-citizenship/how-to-evaluate-information-before-sharing",
  },
  {
    title: "Digital Wellbeing and Responsible Technology Use",
    description:
      "Learn how to build healthier technology habits, protect your attention, manage digital boundaries, and use technology responsibly.",
    link: "/learn/digital-citizenship/digital-wellbeing-and-responsible-technology-use",
  },
];

const actions = [
  "Use strong passwords and multi-factor authentication.",
  "Review privacy settings on apps and social media.",
  "Verify information before sharing it.",
  "Think about how your digital footprint represents you.",
  "Use technology in ways that support wellbeing and respect.",
];

export default function DigitalCitizenshipPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Digital Citizenship
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-700">
        Digital citizenship means using technology responsibly, safely,
        ethically, and confidently. It includes how we communicate, share
        information, protect privacy, manage our digital footprint, and
        participate in online spaces.
      </p>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Why It Matters
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Technology affects education, work, healthcare, relationships, public
          information, and personal identity. Being a digital citizen means
          understanding both the opportunities and responsibilities that come
          with digital life.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Key Principles
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {principle.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Articles
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.link}
              className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {article.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {article.description}
              </p>

              <Link
                href={article.link}
                className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-gray-50 p-8">
        <h2 className="text-3xl font-bold text-blue-900">
          Real-Life Examples
        </h2>

        <ul className="mt-6 list-disc space-y-4 pl-6 text-gray-700">
          <li>Checking whether a health claim is credible before sharing it.</li>
          <li>Reviewing privacy settings before posting personal information.</li>
          <li>Using respectful language during online disagreements.</li>
          <li>Understanding how AI-generated content can influence opinions.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="mt-6 space-y-3 text-gray-700">
          {actions.map((action) => (
            <li key={action} className="flex gap-3">
              <span aria-hidden="true" className="font-bold text-cyan-700">
  ✓
</span>
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-blue-900 p-8 text-white">
        <h2 className="text-3xl font-bold">
          Key Takeaway
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Digital citizenship is not just about being online. It is about
          understanding how your actions, choices, privacy, and responsibilities
          shape your participation in the digital world.
        </p>
      </section>
    </section>
  );
}
