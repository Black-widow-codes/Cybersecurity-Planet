import Link from "next/link";

export const metadata = {
  title: "How Algorithms Shape What You See Online | Cybersecurity Planet",
  description:
    "Learn how algorithms rank, recommend, and personalize online content, and why understanding them matters for digital citizens.",
};

export default function AlgorithmsArticlePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        How Algorithms Shape What You See Online
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Algorithms help digital platforms decide what information to show you,
        what order to show it in, and what content they think you are most
        likely to engage with.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          What Is an Algorithm?
        </h2>

        <p>
          An algorithm is a set of rules or instructions used by a computer
          system to process information and make decisions. Online platforms
          use algorithms to organize large amounts of content and decide what
          may be most relevant to each user.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Where You Encounter Algorithms
        </h2>

        <p>
          Algorithms are used in search engines, social media feeds, streaming
          services, online shopping, advertising, hiring systems, and many
          other digital services.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Search engines rank results.</li>
          <li>Social media platforms recommend posts and videos.</li>
          <li>Streaming services suggest movies, music, or shows.</li>
          <li>Online stores recommend products.</li>
          <li>Advertising systems decide which ads you are likely to see.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Personalization Matters
        </h2>

        <p>
          Platforms often use information about your activity, such as what
          you click, watch, search for, or spend time viewing, to personalize
          what appears on your screen.
        </p>

        <p>
          Personalization can make digital services more convenient, but it can
          also limit the variety of information you encounter. If a system
          repeatedly recommends similar content, you may see fewer different
          perspectives.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Algorithms Are Not Always Neutral
        </h2>

        <p>
          Algorithms are created by people and trained or configured using
          data. If the data is incomplete, unbalanced, or biased, the results
          produced by the system may also be unfair or misleading.
        </p>

        <p>
          This is one reason digital citizens should avoid assuming that the
          first result, most popular post, or recommended video is automatically
          the most accurate or trustworthy option.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Engagement Can Influence Recommendations
        </h2>

        <p>
          Some platforms prioritize content that keeps people watching,
          clicking, commenting, or sharing. Content that creates strong
          emotional reactions can sometimes receive more engagement and may
          therefore be recommended more widely.
        </p>

        <p>
          Understanding this helps explain why sensational, controversial, or
          misleading information can sometimes spread quickly online.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Do not assume recommended content is automatically trustworthy.</li>
          <li>Compare important information with other reliable sources.</li>
          <li>Be aware that your clicks and viewing habits influence recommendations.</li>
          <li>Seek different viewpoints instead of relying on one platform or feed.</li>
          <li>Review privacy and personalization settings where available.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Check Your AI Literacy
          </h3>

          <p className="mt-2">
            Understanding algorithms is part of using AI-powered systems
            responsibly. Try the AI Literacy Assessment to check your current
            understanding of AI, bias, deepfakes, and responsible AI use.
          </p>

          <Link
            href="/tools/ai-literacy-assessment"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Open AI Literacy Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}