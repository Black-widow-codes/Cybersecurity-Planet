import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Literacy | Cybersecurity Planet",
  description:
    "Learn how artificial intelligence works, how algorithms shape digital experiences, and how to recognize AI bias, deepfakes, and responsible AI use.",
};

const topics = [
  {
    title: "What AI Is",
    description:
      "Understand artificial intelligence as technology that can recognize patterns, generate content, and support decision-making.",
  },
  {
    title: "Algorithms",
    description:
      "Learn how digital systems use rules and data to recommend content, rank results, and personalize experiences.",
  },
  {
    title: "Deepfakes",
    description:
      "Recognize AI-generated or manipulated images, audio, and video that can mislead people.",
  },
  {
    title: "AI Bias",
    description:
      "Understand how unfair or incomplete data can lead to biased digital decisions.",
  },
  {
    title: "AI in Healthcare",
    description:
      "Explore how AI can support diagnosis, workflow, patient safety, and health decision-making.",
  },
  {
    title: "Responsible AI Use",
    description:
      "Learn how to use AI tools carefully, ethically, and with awareness of privacy and accuracy limits.",
  },
];

const articles = [
  {
    title: "What Is Artificial Intelligence?",
    description:
      "Learn what AI is, what AI systems can do, where they appear in everyday life, and why their limits matter.",
    link: "/learn/ai-literacy/what-is-artificial-intelligence",
  },
  {
    title: "How Algorithms Shape What You See Online",
    description:
      "Learn how algorithms rank, recommend, and personalize digital content, and why those systems influence what you see online.",
    link: "/learn/ai-literacy/how-algorithms-shape-what-you-see-online",
  },
  {
    title: "Deepfakes: How AI Can Manipulate Media",
    description:
      "Learn how AI can create or manipulate images, audio, and video, and how to evaluate suspicious digital media.",
    link: "/learn/ai-literacy/deepfakes-how-ai-can-manipulate-media",
  },
  {
    title: "Understanding AI Bias",
    description:
      "Learn how biased data and system design can affect AI decisions, and why fairness and human oversight matter.",
    link: "/learn/ai-literacy/understanding-ai-bias",
  },
  {
    title: "AI in Healthcare",
    description:
      "Learn how AI is used in healthcare and why accuracy, privacy, bias, and human oversight matter.",
    link: "/learn/ai-literacy/ai-in-healthcare",
  },
  {
    title: "Responsible AI Use",
    description:
      "Learn how to use AI carefully by protecting privacy, checking accuracy, recognizing bias, and keeping human judgment involved.",
    link: "/learn/ai-literacy/responsible-ai-use",
  },
];

const examples = [
  "A chatbot gives an answer that sounds confident but may be wrong.",
  "A social media platform recommends content based on engagement.",
  "A deepfake video makes someone appear to say something they never said.",
  "An AI tool supports healthcare workers by organizing patient information.",
  "A hiring platform uses algorithms to screen applications.",
];

const actions = [
  "Verify important AI-generated information with trusted sources.",
  "Avoid uploading sensitive personal or health information into AI tools.",
  "Be aware that AI systems can make mistakes or reflect bias.",
  "Question images, videos, or audio that seem suspicious or emotionally manipulative.",
  "Use AI as support, not as a replacement for judgment or professional advice.",
];

export default function AILiteracyPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        AI Literacy
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-700">
        AI literacy means understanding how artificial intelligence works, how
        it affects daily life, and how to use AI tools responsibly. Digital
        citizens need AI literacy to evaluate information, protect privacy,
        recognize manipulation, and make informed decisions.
      </p>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Why AI Literacy Matters
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          AI systems are increasingly used in search engines, social media,
          education, healthcare, hiring, customer service, and security.
          Understanding AI helps people question outputs, identify risks, and
          avoid relying blindly on automated systems.
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
          AI literacy helps digital citizens understand the power and limits of
          artificial intelligence. The goal is not to fear AI, but to use it
          carefully, critically, and responsibly.
        </p>
      </section>
    </section>
  );
}
