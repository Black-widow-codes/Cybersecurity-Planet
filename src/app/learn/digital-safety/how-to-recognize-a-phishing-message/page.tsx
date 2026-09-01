import Link from "next/link";

export const metadata = {
  title: "How to Recognize a Phishing Message | Cybersecurity Planet",
  description:
    "Learn how to recognize phishing emails, text messages, and fake login pages before they steal your information.",
};

export default function PhishingArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        How to Recognize a Phishing Message
      </h1>

      <p className="mt-4 text-gray-600 transition-colors dark:text-slate-300">
        Phishing is a common online scam where someone pretends to be a trusted
        person or organization in order to steal passwords, financial
        information, or other personal data.
      </p>

      <section className="mt-10 space-y-6 text-gray-700 transition-colors dark:text-slate-300">
        <p>
          Phishing messages often appear to come from banks, delivery
          companies, schools, workplaces, social media platforms, or government
          services. The goal is usually to make you click a link, open an
          attachment, send information, or sign in to a fake website.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Common Warning Signs
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>The message creates fear, urgency, or pressure.</li>
          <li>The sender address looks unusual or slightly misspelled.</li>
          <li>You are asked to provide passwords or sensitive information.</li>
          <li>The message contains an unexpected link or attachment.</li>
          <li>The greeting is vague or does not use your correct name.</li>
          <li>The offer or warning seems too extreme to be believable.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Be Careful With Links
        </h2>

        <p>
          A phishing message may display a familiar company name while sending
          you to a completely different website. Before clicking, check where
          the link actually leads. On a computer, you can usually hover over a
          link to preview its destination.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Verify Before You Act
        </h2>

        <p>
          If a message claims that there is a problem with your account, do not
          automatically use the link in the message. Open the official website
          yourself or use the organization&apos;s official app. If necessary,
          contact the organization using contact information you already trust.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          What If You Already Clicked?
        </h2>

        <p>
          Clicking a suspicious link does not always mean your account has been
          compromised, but you should act carefully. If you entered a password,
          change it immediately from the real website and enable multi-factor
          authentication where available. If you downloaded a suspicious file,
          avoid opening it and use your device&apos;s security tools to scan it.
        </p>

        <div className="rounded-xl border bg-gray-50 transition-colors dark:bg-slate-900 p-6">
          <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Check Your Digital Safety Habits
          </h3>

          <p className="mt-2">
            Use the Digital Safety Assessment to review your everyday online
            safety habits and identify areas you may want to improve.
          </p>

          <Link
            href="/tools/digital-safety-assessment"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Open Digital Safety Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}


