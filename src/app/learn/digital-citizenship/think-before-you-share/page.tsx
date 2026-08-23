import Link from "next/link";

export const metadata = {
  title: "Think Before You Share | Cybersecurity Planet",
  description:
    "Learn why pausing before posting, forwarding, or reacting online can help protect your reputation, privacy, and relationships.",
};

export default function ThinkBeforeYouShareArticlePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Think Before You Share
      </h1>

      <p className="mt-4 text-gray-600">
        Sharing online can happen in seconds, but the effects can last much
        longer. Taking a moment to pause before posting, forwarding, or reacting
        can help you make better digital decisions.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <p>
          Social media, messaging apps, forums, and other online spaces make it
          easy to share opinions, images, videos, and information quickly. That
          speed can be useful, but it can also lead to mistakes when we react
          before thinking.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Ask Yourself Before Sharing
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Is this information accurate?</li>
          <li>Could this reveal private information about me or someone else?</li>
          <li>Could this harm someone&apos;s reputation or wellbeing?</li>
          <li>Am I reacting because I feel angry, afraid, or pressured?</li>
          <li>Would I be comfortable with this post being seen later?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Online Actions Can Have Lasting Effects
        </h2>

        <p>
          A post may be deleted, but screenshots, copies, and forwarded messages
          can remain. Online content can affect relationships, school,
          employment, reputation, and privacy long after the original post was
          made.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Avoid Sharing in the Heat of the Moment
        </h2>

        <p>
          Strong emotions can make it harder to think carefully. If a message or
          post makes you angry, frightened, or extremely excited, give yourself
          time before responding or forwarding it. A short pause can prevent a
          decision you later regret.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Respect Other People&apos;s Privacy
        </h2>

        <p>
          Before posting photos, conversations, personal details, or private
          information involving someone else, consider whether you have their
          permission. Responsible digital citizenship includes protecting other
          people&apos;s privacy as well as your own.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Share Responsibly
        </h2>

        <p>
          Responsible sharing does not mean avoiding online participation. It
          means communicating thoughtfully, checking information, respecting
          privacy, and considering the possible consequences of what you post.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Check Your Digital Citizenship Habits
          </h3>

          <p className="mt-2">
            Use the Digital Citizenship Checkup to reflect on how you share,
            communicate, protect privacy, and participate in online spaces.
          </p>

          <Link
            href="/tools/digital-citizenship-checkup"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Open Digital Citizenship Checkup
          </Link>
        </div>
      </section>
    </main>
  );
}