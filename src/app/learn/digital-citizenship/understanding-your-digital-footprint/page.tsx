import Link from "next/link";

export const metadata = {
  title: "Understanding Your Digital Footprint | Cybersecurity Planet",
  description:
    "Learn what a digital footprint is, how online activity can affect privacy and reputation, and how to manage it more carefully.",
};

export default function DigitalFootprintArticlePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Understanding Your Digital Footprint
      </h1>

      <p className="mt-4 text-gray-600">
        Your digital footprint is the trail of information connected to your
        activity online. It can include posts, comments, photos, accounts,
        searches, purchases, app activity, and information collected by
        websites and services.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <p>
          Some parts of your digital footprint are created intentionally, such
          as posting a photo or writing a comment. Other parts may be created
          automatically when websites, apps, or devices collect information
          about how you use them.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Active and Passive Digital Footprints
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Active footprint:</strong> Information you deliberately
            share, such as posts, comments, profiles, reviews, or uploaded
            photos.
          </li>
          <li>
            <strong>Passive footprint:</strong> Information that may be
            collected as you browse, use apps, visit websites, or interact with
            digital services.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Your Digital Footprint Matters
        </h2>

        <p>
          Online information can affect privacy, reputation, relationships,
          education, and employment opportunities. Even content shared with a
          limited audience can sometimes be copied, forwarded, or captured in a
          screenshot.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Think Before Posting Personal Information
        </h2>

        <p>
          Before sharing information such as your location, phone number,
          school, workplace, travel plans, or other personal details, consider
          who can see it and whether it really needs to be public.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Review Old Accounts and Content
        </h2>

        <p>
          Over time, you may create accounts or posts that no longer represent
          you. Periodically reviewing old social media accounts, profiles,
          permissions, and public information can help you understand what
          others may be able to find about you.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Practical Ways to Manage Your Footprint
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Review privacy settings on accounts you use regularly.</li>
          <li>Remove accounts you no longer need where possible.</li>
          <li>Think carefully before sharing sensitive personal details.</li>
          <li>Check what information is publicly visible on your profiles.</li>
          <li>Be cautious when giving apps unnecessary permissions.</li>
          <li>Consider how a post may appear outside its original context.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          You Can Shape Your Digital Identity
        </h2>

        <p>
          Having a digital footprint is a normal part of modern life. The goal
          is not to disappear from the internet, but to make thoughtful choices
          about what you share, what services you use, and how your online
          activity represents you.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Check Your Digital Citizenship Habits
          </h3>

          <p className="mt-2">
            Use the Digital Citizenship Checkup to reflect on privacy, sharing,
            communication, and how your online choices contribute to your
            digital footprint.
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