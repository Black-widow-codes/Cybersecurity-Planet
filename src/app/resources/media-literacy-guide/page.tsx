import Link from "next/link";

export const metadata = {
  title: "Media Literacy Guide | Cybersecurity Planet",
  description:
    "A practical media literacy guide for evaluating online sources, checking claims, recognizing manipulation, and identifying misleading content.",
};

export default function MediaLiteracyGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Media Literacy Guide
      </h1>

      <p className="mt-4 text-gray-600">
        Use this guide to evaluate online information more carefully before you
        trust, react to, or share it.
      </p>

      <section className="mt-10 space-y-8 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Check the Source
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Identify who created or published the information.</li>
            <li>
              Look for information about the author, organization, or website.
            </li>
            <li>
              Consider whether the source has relevant knowledge or expertise.
            </li>
            <li>
              Be cautious with anonymous posts or websites that provide little
              information about who is responsible for the content.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Examine the Evidence
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Look for evidence that supports the main claims being made.
            </li>
            <li>
              Check whether links, studies, documents, or quotations actually
              support the claim.
            </li>
            <li>
              Be cautious when a major claim is based only on personal opinion
              or an unexplained screenshot.
            </li>
            <li>
              Compare important claims with reliable independent sources.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Watch for Emotional Manipulation
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Notice content designed mainly to create fear, anger, outrage, or
              urgency.
            </li>
            <li>
              Be cautious with headlines that use extreme or sensational
              language.
            </li>
            <li>
              Pause before sharing content that causes a strong emotional
              reaction.
            </li>
            <li>
              Ask whether the content is informing you or mainly trying to make
              you react.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Check the Context
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Check when the content was originally published.</li>
            <li>
              Look for the full video, interview, article, or document when only
              a short clip or screenshot is shown.
            </li>
            <li>
              Check whether an old image or story is being presented as a new
              event.
            </li>
            <li>
              Be careful when quotations are separated from the context in
              which they were originally made.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Be Alert to AI-Generated Content
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Remember that realistic images, audio, and video can now be
              generated or altered with AI.
            </li>
            <li>
              Do not rely on appearance alone to decide whether media is
              authentic.
            </li>
            <li>
              Look for the original source and independent confirmation.
            </li>
            <li>
              Be especially cautious when dramatic media appears without clear
              information about where it came from.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Evaluate a Claim Before Sharing
          </h2>

          <p className="mt-2">
            Use the Misinformation Evaluation Tool to review common credibility
            signals and warning signs in online information.
          </p>

          <Link
            href="/tools/misinformation-check"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Open the Misinformation Evaluation Tool
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Learn More About Media Literacy
          </h2>

          <p className="mt-2">
            Explore Cybersecurity Planet&apos;s Media Literacy learning module
            for deeper guidance on misinformation, disinformation, source
            evaluation, fact-checking, emotional manipulation, and AI-generated
            content.
          </p>

          <Link
            href="/learn/media-literacy"
            className="mt-4 inline-block font-semibold text-cyan-700 hover:underline"
          >
            Explore Media Literacy Learning
          </Link>
        </div>
      </section>
    </main>
  );
}