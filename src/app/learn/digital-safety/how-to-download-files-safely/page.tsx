import Link from "next/link";

export const metadata = {
  title: "How to Download Files Safely | Cybersecurity Planet",
  description:
    "Learn how to recognize risky downloads, choose trusted sources, and reduce the chance of installing malicious software.",
};

export default function SafeDownloadsArticlePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        How to Download Files Safely
      </h1>

      <p className="mt-4 text-gray-600">
        Downloads are part of everyday digital life, but unsafe files can
        expose your device to malware, unwanted software, or stolen
        information. A few simple habits can make downloading files much safer.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <p>
          Files can come from websites, emails, messaging apps, cloud storage,
          social media, and file-sharing services. Before downloading anything,
          consider where the file came from and whether you expected to receive
          it.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Download From Trusted Sources
        </h2>

        <p>
          Whenever possible, download applications and updates directly from
          the official website, trusted app store, or another source you know
          is legitimate. Be cautious with websites offering unofficial copies,
          cracked software, or downloads that normally require payment.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Watch for Fake Download Buttons
        </h2>

        <p>
          Some websites contain advertisements designed to look like download
          buttons. Before clicking, check whether the button actually belongs
          to the website or service you intended to use. Unexpected pop-ups and
          redirects are also reasons to be cautious.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Be Careful With Unexpected Attachments
        </h2>

        <p>
          An email or message may appear to come from someone you know while
          containing a dangerous attachment. If you were not expecting the
          file, verify with the sender before opening it, especially when the
          message creates urgency or asks you to enable additional features.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Check Before You Open
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Confirm that you trust the website or sender.</li>
          <li>Make sure the file is something you expected to receive.</li>
          <li>Pay attention to unusual or misleading file names.</li>
          <li>Keep your browser, operating system, and security tools updated.</li>
          <li>Do not ignore security warnings simply to make a file open.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Software Updates Matter
        </h2>

        <p>
          Keeping your device and applications updated helps fix known security
          weaknesses. Use built-in update features or official sources instead
          of installing updates from unexpected advertisements, pop-ups, or
          messages.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          If a Download Seems Suspicious
        </h2>

        <p>
          Do not open the file just to see what it contains. Delete it if you
          cannot verify where it came from, and use trusted security tools if
          you believe the file may have affected your device. On a work or
          school device, contact the appropriate IT or security team when you
          are unsure.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Review Your Digital Safety Habits
          </h3>

          <p className="mt-2">
            Use the Digital Safety Assessment to review how safely you handle
            downloads, links, passwords, and other everyday online risks.
          </p>

          <Link
            href="/tools/digital-safety-assessment"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Open Digital Safety Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}