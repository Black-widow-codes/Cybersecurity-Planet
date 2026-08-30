import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Literacy | Cybersecurity Planet",
  description:
    "Learn how to evaluate online sources, recognize misinformation and disinformation, fact-check claims, and critically assess AI-generated content.",
};

const topics = [
  {
    title: "Source Evaluation",
    description:
      "Learn how to check who created information, why it was created, and whether the source is trustworthy.",
  },
  {
    title: "Misinformation",
    description:
      "Understand false or misleading information that spreads online, sometimes unintentionally.",
  },
  {
    title: "Disinformation",
    description:
      "Recognize false information that is deliberately created to mislead or manipulate people.",
  },
  {
    title: "Emotional Manipulation",
    description:
      "Identify content designed to trigger fear, anger, urgency, or outrage instead of careful thinking.",
  },
  {
    title: "AI-Generated Content",
    description:
      "Understand how AI can create realistic text, images, audio, and video that may be misleading.",
  },
  {
    title: "Fact-Checking",
    description:
      "Develop habits for checking evidence, context, dates, sources, and expert confirmation.",
  },
];

const articles = [
  {
    title: "How to Evaluate an Online Source",
    description:
      "Learn how to check who created online information, why it was published, and whether the source is trustworthy.",
    link: "/learn/media-literacy/how-to-evaluate-an-online-source",
  },
  {
    title: "Understanding Misinformation",
    description:
      "Learn what misinformation is, why false or misleading information spreads online, and how to reduce the risk of sharing it.",
    link: "/learn/media-literacy/understanding-misinformation",
  },
  {
    title: "Understanding Disinformation",
    description:
      "Learn how deliberately false or misleading information is created to manipulate people, influence opinions, or cause harm.",
    link: "/learn/media-literacy/understanding-disinformation",
  },
  {
    title: "How Online Content Manipulates Your Emotions",
    description:
      "Learn how fear, anger, urgency, outrage, and excitement can influence how people react to online content.",
    link: "/learn/media-literacy/how-online-content-manipulates-your-emotions",
  },
  {
    title: "How to Recognize AI-Generated Content",
    description:
      "Learn how AI-generated text, images, audio, and video can appear realistic, and how to evaluate suspicious digital content.",
    link: "/learn/media-literacy/how-to-recognize-ai-generated-content",
  },
  {
    title: "How to Fact-Check Information Online",
    description:
      "Learn practical steps for checking claims, sources, dates, context, evidence, images, and independent confirmation.",
    link: "/learn/media-literacy/how-to-fact-check-information-online",
  },
];

const examples = [
  "A viral health claim spreads without evidence.",
  "An old photo is shared as if it happened today.",
  "A headline exaggerates a study to attract clicks.",
  "A fake account shares emotionally charged information.",
  "An AI-generated image is mistaken for a real event.",
];

const actions = [
  "Check the original source before sharing information.",
  "Look for evidence, dates, author names, and context.",
  "Be cautious with content that creates strong emotional reactions.",
  "Compare important claims with trusted sources.",
  "Use verification tools before trusting health, AI, or crisis-related claims.",
];

export default function MediaLiteracyPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Media Literacy
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-700">
        Media and information literacy means being able to find, evaluate,
        understand, and responsibly share information. In a digital world full
        of social media, AI-generated content, headlines, videos, and health
        claims, digital citizens need strong critical thinking skills.
      </p>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Why Media Literacy Matters
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Information shapes opinions, health choices, political views,
          financial decisions, and public trust. When people cannot evaluate
          information carefully, misinformation can spread quickly and cause
          real harm.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Key Topics
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {topic.description}
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
          Real-World Examples
        </h2>

        <ul className="mt-6 list-disc space-y-4 pl-6 text-gray-700">
          {examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
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
          Media literacy is not about doubting everything. It is about slowing
          down, checking evidence, understanding context, and making informed
          decisions before trusting or sharing information.
        </p>
      </section>
    </section>
  );
}

