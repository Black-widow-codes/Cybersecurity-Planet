import Link from "next/link";

export const metadata = {
  title: "What Is Artificial Intelligence? | Cybersecurity Planet",
  description:
    "Learn what artificial intelligence is, what AI systems can do, where they appear in everyday life, and what their limits are.",
};

export default function WhatIsAIArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        What Is Artificial Intelligence?
      </h1>

      <p className="mt-4 text-gray-600 transition-colors dark:text-slate-300">
        Artificial intelligence, or AI, refers to computer systems designed to
        perform tasks that normally require human intelligence, such as
        recognizing patterns, generating content, making predictions, or
        supporting decisions.
      </p>

      <section className="mt-10 space-y-6 text-gray-700 transition-colors dark:text-slate-300">
        <p>
          AI is already part of everyday digital life. It appears in search
          engines, recommendation systems, virtual assistants, translation
          tools, fraud detection, navigation apps, social media, and many other
          services.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          What AI Systems Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Recognize patterns in large amounts of data.</li>
          <li>Generate text, images, audio, or video.</li>
          <li>Recommend products, videos, music, or other content.</li>
          <li>Classify information into categories.</li>
          <li>Translate languages or summarize information.</li>
          <li>Support decisions by identifying trends or likely outcomes.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          AI Does Not Think Like a Human
        </h2>

        <p>
          AI systems can produce impressive results, but they do not understand
          the world in the same way people do. They work by processing data,
          detecting patterns, and producing outputs based on how they were
          designed and trained.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          AI Can Make Mistakes
        </h2>

        <p>
          An AI-generated answer may sound confident while still being
          incomplete, misleading, or wrong. This is why important information
          should be checked against reliable sources rather than accepted
          automatically.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          AI Depends on Data
        </h2>

        <p>
          Many AI systems learn patterns from large collections of data. The
          quality, accuracy, and fairness of that data can affect the system&apos;s
          results. Poor or incomplete data can contribute to inaccurate or
          biased outcomes.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          AI Is a Tool
        </h2>

        <p>
          AI can help people work faster, explore ideas, organize information,
          and solve problems. But responsible use still requires human
          judgment, especially when decisions involve privacy, safety, health,
          money, education, or other important areas.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          A Useful Mindset
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Ask what the AI system is being used for.</li>
          <li>Question where its information may have come from.</li>
          <li>Check important outputs independently.</li>
          <li>Protect sensitive personal information.</li>
          <li>Remember that AI can assist judgment, but should not replace it.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 transition-colors dark:bg-slate-900 p-6">
          <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Check Your AI Literacy
          </h3>

          <p className="mt-2">
            Use the AI Literacy Assessment to reflect on your understanding of
            AI tools, deepfakes, bias, hallucinations, and responsible AI use.
          </p>

          <Link
            href="/tools/ai-literacy-assessment"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Open AI Literacy Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}




