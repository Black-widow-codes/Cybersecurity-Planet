import Link from "next/link";

export const metadata = {
  title: "How to Evaluate an Online Source | Cybersecurity Planet",
  description:
    "Learn how to evaluate who created online information, why it was published, and whether the source is trustworthy.",
};

export default function EvaluateOnlineSourcePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        How to Evaluate an Online Source
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Not every website, social media account, video, or article is equally
        trustworthy. Evaluating the source is one of the most important steps
        you can take before believing or sharing online information.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          Start With the Creator
        </h2>

        <p>
          Ask who created the information. Reliable sources usually make it
          possible to identify the author, organization, publisher, or expert
          responsible for the content.
        </p>

        <p>
          If the creator is unknown, difficult to verify, or hiding behind an
          anonymous account, that does not automatically make the information
          false, but it is a reason to investigate more carefully.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Check the Purpose
        </h2>

        <p>
          Think about why the information was created. A source may be trying
          to inform, educate, entertain, advertise, persuade, influence, or
          provoke a reaction.
        </p>

        <p>
          Understanding the purpose can help you recognize when information
          may be selective, exaggerated, or designed mainly to attract clicks.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Look for Evidence
        </h2>

        <p>
          Strong claims should be supported by evidence. Look for links to
          original reports, research, official records, expert statements, or
          other sources that can be checked independently.
        </p>

        <p>
          Be cautious when a source makes major claims but provides no evidence
          or relies only on vague phrases such as &quot;experts say&quot; or &quot;studies
          prove.&quot;
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Check the Date and Context
        </h2>

        <p>
          Old information can sometimes be shared as if it were new. Images,
          videos, quotes, and statistics may also be removed from their original
          context.
        </p>

        <p>
          Check when the information was published and whether the surrounding
          context still applies.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Examine the Website or Account
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Does the site clearly identify who runs it?</li>
          <li>Is contact information available?</li>
          <li>Does it explain its purpose or editorial standards?</li>
          <li>Does the account have a history of reliable information?</li>
          <li>Does the content contain obvious errors or misleading headlines?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Compare With Other Sources
        </h2>

        <p>
          Do not rely on one source for an important claim. Search for the same
          information elsewhere and compare how other trustworthy sources
          describe it.
        </p>

        <p>
          If a major claim appears only on one unknown website or social media
          account, that is a reason to be cautious.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Watch for Emotional Pressure
        </h2>

        <p>
          Content that tries to make you angry, frightened, shocked, or
          urgently excited may be designed to push you to react before you
          think carefully.
        </p>

        <p>
          Strong emotions are a good reason to slow down and verify the
          information before sharing it.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions to Ask
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Who created this information?</li>
          <li>Why was it created?</li>
          <li>What evidence supports the claim?</li>
          <li>Is the information current and in context?</li>
          <li>Can I verify it with other reliable sources?</li>
          <li>Is the content trying to manipulate my emotions?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Pause before trusting or sharing unfamiliar information.</li>
          <li>Check the author, organization, and publication date.</li>
          <li>Look for original evidence rather than repeated claims.</li>
          <li>Compare important information with trusted sources.</li>
          <li>Be cautious when content creates strong emotional pressure.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Evaluate a Claim
          </h3>

          <p className="mt-2">
            Source evaluation is one of the key steps in checking online
            information. Use the Misinformation Evaluation Tool to work through
            source, evidence, context, emotion, and verification questions.
          </p>

          <Link
            href="/tools/misinformation-check"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
          >
            Open Misinformation Evaluation Tool
          </Link>
        </div>
      </section>
    </div>
  );
}



