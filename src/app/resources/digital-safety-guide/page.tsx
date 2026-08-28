import Link from "next/link";

export const metadata = {
  title: "Digital Safety Guide | Cybersecurity Planet",
  description:
    "A practical digital safety guide for recognizing online threats, protecting accounts, and responding to suspicious activity.",
};

export default function DigitalSafetyGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Digital Safety Guide
      </h1>

      <p className="mt-4 text-gray-600">
        Use this guide as a quick reference for safer everyday technology use.
        It focuses on common risks such as phishing, scams, weak passwords,
        unsafe downloads, and suspicious account activity.
      </p>

      <section className="mt-10 space-y-8 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Protect Your Accounts
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Use long, unique passwords for important accounts.</li>
            <li>Turn on multi-factor authentication when available.</li>
            <li>Do not reuse the same password across multiple services.</li>
            <li>Keep your recovery email and phone number up to date.</li>
            <li>Never share verification codes with another person.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Watch for Phishing and Scams
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Be cautious with unexpected links and attachments.</li>
            <li>
              Check the sender address instead of trusting only the display
              name.
            </li>
            <li>
              Be suspicious of messages creating urgency, fear, or pressure.
            </li>
            <li>
              Verify unusual requests through another trusted communication
              method.
            </li>
            <li>
              Do not provide passwords, banking details, or verification codes
              through unsolicited messages.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Download Files Safely
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Download software from official or trusted sources.</li>
            <li>Avoid unexpected email attachments.</li>
            <li>Keep your operating system and applications updated.</li>
            <li>
              Be careful with files that ask you to disable security settings.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            If Something Seems Wrong
          </h2>

          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Stop interacting with the suspicious message or website.</li>
            <li>Do not send additional information or money.</li>
            <li>
              Change affected passwords from a device you trust if necessary.
            </li>
            <li>Review recent account activity for unfamiliar access.</li>
            <li>Report suspicious activity to the relevant service.</li>
          </ol>
        </div>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Check Your Digital Safety Habits
          </h2>

          <p className="mt-2">
            Use the Digital Safety Assessment to identify areas where your
            everyday security habits could be improved.
          </p>

          <Link
            href="/tools/digital-safety-assessment"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Take the Digital Safety Assessment
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Learn More About Digital Safety
          </h2>

          <p className="mt-2">
            Explore Cybersecurity Planet&apos;s Digital Safety learning module
            for deeper explanations of passwords, phishing, malware, scams, and
            safe downloads.
          </p>

          <Link
            href="/learn/digital-safety"
            className="mt-4 inline-block font-semibold text-cyan-700 hover:underline"
          >
            Explore Digital Safety Learning
          </Link>
        </div>
      </section>
    </main>
  );
}