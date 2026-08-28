import Link from "next/link";

export const metadata = {
  title: "Digital Citizenship Checklist | Cybersecurity Planet",
  description:
    "A practical checklist for responsible, respectful, informed, and healthy participation online.",
};

export default function DigitalCitizenshipChecklistPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Digital Citizenship Checklist
      </h1>

      <p className="mt-4 text-gray-600">
        Use this checklist to review how you communicate, share information,
        protect your privacy, manage your digital footprint, and maintain
        healthier technology habits.
      </p>

      <section className="mt-10 space-y-8 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Before You Post or Share
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Pause before posting when you are angry or emotional.</li>
            <li>Check whether information is accurate before sharing it.</li>
            <li>
              Consider whether the post could harm your privacy or someone
              else&apos;s privacy.
            </li>
            <li>
              Remember that screenshots and copies can remain even after a post
              is deleted.
            </li>
            <li>
              Avoid sharing another person&apos;s private information without
              permission.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Communicate Respectfully
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Disagree with ideas without attacking the person.</li>
            <li>
              Avoid harassment, threats, humiliation, and discriminatory
              language.
            </li>
            <li>Think about how your words may be understood by others.</li>
            <li>
              Do not join online attacks simply because many other people are
              participating.
            </li>
            <li>Report serious abuse instead of escalating the situation.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Manage Your Digital Footprint
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Review old public posts and account information periodically.</li>
            <li>Check who can see your profiles and posts.</li>
            <li>
              Think about how public content could affect school, employment,
              relationships, or your reputation.
            </li>
            <li>
              Search your own name occasionally to understand what information
              about you is publicly visible.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Maintain Healthier Technology Habits
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Take regular breaks from screens and social media.</li>
            <li>Notice when technology is interfering with sleep or focus.</li>
            <li>
              Avoid allowing notifications to constantly interrupt important
              activities.
            </li>
            <li>
              Make time for offline relationships, activities, and
              responsibilities.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Check Your Digital Citizenship Habits
          </h2>

          <p className="mt-2">
            Use the Digital Citizenship Checkup to identify areas where your
            everyday online habits could be improved.
          </p>

          <Link
            href="/tools/digital-citizenship-checkup"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Take the Digital Citizenship Checkup
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Learn More About Digital Citizenship
          </h2>

          <p className="mt-2">
            Explore Cybersecurity Planet&apos;s Digital Citizenship learning
            module for deeper guidance on responsible online participation,
            communication, digital footprints, information sharing, and digital
            wellbeing.
          </p>

          <Link
            href="/learn/digital-citizenship"
            className="mt-4 inline-block font-semibold text-cyan-700 hover:underline"
          >
            Explore Digital Citizenship Learning
          </Link>
        </div>
      </section>
    </main>
  );
}