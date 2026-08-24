import Link from "next/link";

export const metadata = {
  title: "Understanding Disinformation | Cybersecurity Planet",
  description:
    "Learn what disinformation is, how deliberate false information is used to manipulate people, and how to respond critically.",
};

export default function UnderstandingDisinformationPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Understanding Disinformation
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Disinformation is false or misleading information that is deliberately
        created or shared to deceive, manipulate, influence, or cause harm.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          How Is Disinformation Different From Misinformation?
        </h2>

        <p>
          Misinformation can spread when people share incorrect information
          without realizing it is false. Disinformation involves deliberate
          deception.
        </p>

        <p>
          A person or organization creating disinformation may know that the
          claim is false but still publish or promote it because they want to
          influence what people believe or how they behave.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Disinformation Is Created
        </h2>

        <p>
          Disinformation can be created for many reasons. The goal may be to
          gain money, political influence, attention, power, or access to
          personal information.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Influencing public opinion.</li>
          <li>Damaging a person or organization's reputation.</li>
          <li>Promoting scams or fraudulent products.</li>
          <li>Creating fear or confusion.</li>
          <li>Dividing communities.</li>
          <li>Manipulating people into unsafe decisions.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Disinformation Often Uses Real Information
        </h2>

        <p>
          False campaigns do not always invent everything from nothing. Real
          photographs, quotes, statistics, or events may be mixed with false
          claims or presented without important context.
        </p>

        <p>
          This can make disinformation harder to recognize because part of the
          content may be genuine while the overall message is misleading.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Emotional Manipulation
        </h2>

        <p>
          Disinformation often attempts to trigger strong emotions such as
          anger, fear, outrage, or panic. These reactions can make people more
          likely to share content quickly.
        </p>

        <p>
          Messages that demand an immediate reaction or encourage people not to
          question the claim deserve extra scrutiny.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Fake Accounts and Coordinated Sharing
        </h2>

        <p>
          Disinformation may be amplified through fake accounts, automated
          accounts, copied posts, or coordinated networks.
        </p>

        <p>
          When many accounts repeat the same claim, it can create the impression
          that the information is widely accepted even when the accounts are
          connected to the same campaign.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          AI Can Make Disinformation More Convincing
        </h2>

        <p>
          AI tools can generate realistic text, images, audio, and video. These
          technologies can be used responsibly, but they can also make false
          content easier to produce at scale.
        </p>

        <p>
          This is another reason to evaluate the source and evidence rather than
          relying only on how realistic something appears.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Warning Signs to Consider
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>The original source cannot be identified.</li>
          <li>The claim provides little or no evidence.</li>
          <li>The message uses extreme emotional language.</li>
          <li>The content pressures you to share immediately.</li>
          <li>Reliable sources contradict the claim.</li>
          <li>Images, quotes, or statistics appear without context.</li>
          <li>Many suspicious accounts repeat identical messages.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          How to Respond
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Do not amplify a suspicious claim simply to criticize it.</li>
          <li>Find the original source and supporting evidence.</li>
          <li>Compare the claim with reliable independent sources.</li>
          <li>Check dates, images, quotations, and context.</li>
          <li>Report harmful deceptive content where appropriate.</li>
          <li>Correct false information carefully using credible evidence.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions to Ask
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Who benefits if people believe this claim?</li>
          <li>Can I identify the original source?</li>
          <li>What evidence supports the message?</li>
          <li>Is important context missing?</li>
          <li>Is the content trying to provoke an immediate emotional reaction?</li>
          <li>Can independent trustworthy sources confirm it?</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Evaluate Suspicious Information
          </h3>

          <p className="mt-2">
            Use the Misinformation Evaluation Tool to examine the source,
            evidence, context, emotional pressure, and other warning signs
            before trusting or sharing a claim.
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