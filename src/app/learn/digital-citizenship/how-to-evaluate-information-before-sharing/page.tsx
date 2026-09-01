import Link from "next/link";

export const metadata = {
  title: "How to Evaluate Information Before Sharing It | Cybersecurity Planet",
  description:
    "Learn practical steps for checking sources, evidence, dates, context, and credibility before sharing information online.",
};

export default function EvaluateInformationBeforeSharingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        How to Evaluate Information Before Sharing It
      </h1>

      <p className="mt-4 text-gray-600 transition-colors dark:text-slate-300">
        Sharing information online is easy, but sharing something false or
        misleading can cause real harm. A responsible digital citizen takes
        time to check information before forwarding, reposting, or reacting to
        it.
      </p>

      <section className="mt-10 space-y-6 text-gray-700 transition-colors dark:text-slate-300">
        <p>
          Misleading information can appear in social media posts, videos,
          screenshots, headlines, health claims, advertisements, and messages
          from people we know. Familiarity does not automatically make a claim
          reliable.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Check the Original Source
        </h2>

        <p>
          Ask who created the information and where it originally appeared.
          Screenshots and forwarded posts can remove important context, so look
          for the original article, video, report, or statement when possible.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Look for Evidence
        </h2>

        <p>
          Reliable information should usually provide some basis for its claims.
          Look for named sources, documents, research, expert statements, or
          other evidence that can be checked independently.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Check the Date and Context
        </h2>

        <p>
          Real information can still be misleading when it is taken out of
          context. An old photo, article, or video may be shared as if it
          happened recently. Check when the content was created and whether the
          surrounding circumstances match the claim being made.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Notice Emotional Pressure
        </h2>

        <p>
          Be cautious when content seems designed mainly to make you angry,
          afraid, shocked, or desperate to share it immediately. Strong
          emotions can make it harder to evaluate information carefully.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Compare With Other Trusted Sources
        </h2>

        <p>
          For important claims, especially those involving health, safety,
          money, public events, or major news, compare the information with
          other credible and independent sources before accepting it as true.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Consider AI-Generated or Manipulated Content
        </h2>

        <p>
          Images, audio, video, and text can now be generated or altered using
          artificial intelligence and editing tools. Realistic appearance
          alone is not proof that something is authentic.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          A Simple Pause Can Help
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Who created this?</li>
          <li>What evidence supports it?</li>
          <li>Is the date and context clear?</li>
          <li>Can another trusted source confirm it?</li>
          <li>Am I being pressured to react emotionally?</li>
          <li>Could this content have been manipulated?</li>
        </ul>

        <p>
          If you cannot answer these questions confidently, it is often better
          to wait rather than share the information immediately.
        </p>

        <div className="rounded-xl border bg-gray-50 transition-colors dark:bg-slate-900 p-6">
          <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Evaluate a Claim
          </h3>

          <p className="mt-2">
            Use the Misinformation Evaluation Tool to practice checking sources,
            evidence, context, emotional pressure, and other credibility
            signals.
          </p>

          <Link
            href="/tools/misinformation-check"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Open Misinformation Evaluation Tool
          </Link>
        </div>
      </section>
    </div>
  );
}



