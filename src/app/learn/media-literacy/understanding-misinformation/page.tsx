import Link from "next/link";

export const metadata = {
  title: "Understanding Misinformation | Cybersecurity Planet",
  description:
    "Learn what misinformation is, why false or misleading information spreads online, and how to reduce the risk of sharing it.",
};

export default function UnderstandingMisinformationPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Understanding Misinformation
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Misinformation is false or misleading information that can spread
        online even when the person sharing it does not intend to deceive
        anyone.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          What Is Misinformation?
        </h2>

        <p>
          Misinformation can include inaccurate claims, outdated information,
          misleading headlines, altered context, false statistics, or content
          that people misunderstand and then share with others.
        </p>

        <p>
          The important point is that misinformation does not always involve
          deliberate deception. Someone may sincerely believe that what they are
          sharing is true.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Misinformation Spreads
        </h2>

        <p>
          Online information can spread very quickly because social platforms
          make it easy to repost, forward, comment on, and react to content.
        </p>

        <p>
          People are also more likely to share information that feels
          surprising, urgent, emotional, or closely connected to what they
          already believe.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Emotional Content Travels Quickly
        </h2>

        <p>
          Posts that create fear, anger, outrage, excitement, or urgency may
          encourage people to react before checking whether the information is
          accurate.
        </p>

        <p>
          A strong emotional reaction is therefore a good reason to slow down
          before sharing.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Familiar Information Can Feel True
        </h2>

        <p>
          Seeing the same claim repeatedly can make it feel more believable,
          even when repetition is not evidence that the claim is correct.
        </p>

        <p>
          Many accounts may also repeat information from the same original
          source, creating the impression that several independent sources
          confirmed it when they did not.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Missing Context Can Mislead
        </h2>

        <p>
          A photograph, quote, statistic, or video may be real but still create
          a false impression if important context is removed.
        </p>

        <p>
          For example, an old image may be shared as if it happened today, or a
          short video clip may leave out what happened immediately before or
          after it.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Headlines Can Be Misleading
        </h2>

        <p>
          Headlines are often written to attract attention. Sometimes they
          exaggerate, oversimplify, or leave out important details from the
          full story.
        </p>

        <p>
          Reading only the headline can therefore lead to a very different
          understanding than reading the complete article or original source.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Misinformation Can Cause Real Harm
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>People may make unsafe health decisions.</li>
          <li>Scams may appear more believable.</li>
          <li>False accusations can damage reputations.</li>
          <li>Public trust can be weakened.</li>
          <li>People may make financial decisions based on false claims.</li>
          <li>Confusion can spread during emergencies or crises.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          How to Reduce the Spread
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Pause before forwarding or reposting information.</li>
          <li>Find the original source.</li>
          <li>Check the publication date and context.</li>
          <li>Look for evidence supporting the claim.</li>
          <li>Compare the information with reliable independent sources.</li>
          <li>Read beyond the headline.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions to Ask Before Sharing
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Do I know where this information originally came from?</li>
          <li>Is there evidence supporting the claim?</li>
          <li>Is the information current and in the correct context?</li>
          <li>Am I reacting mainly because the content made me emotional?</li>
          <li>Can trustworthy sources confirm the claim?</li>
          <li>Have I read more than just the headline?</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Evaluate Before You Share
          </h3>

          <p className="mt-2">
            Use the Misinformation Evaluation Tool to work through source,
            evidence, context, emotional pressure, and verification before
            trusting or sharing an online claim.
          </p>

          <Link
            href="/tools/misinformation-check"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Open Misinformation Evaluation Tool
          </Link>
        </div>
      </section>
    </main>
  );
}