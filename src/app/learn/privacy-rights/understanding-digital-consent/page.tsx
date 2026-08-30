import Link from "next/link";

export const metadata = {
  title: "Understanding Digital Consent | Cybersecurity Planet",
  description:
    "Learn what meaningful digital consent looks like when apps, websites, and online services collect or use personal information.",
};

export default function UnderstandingDigitalConsentPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Understanding Digital Consent
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Digital consent means making an informed choice about how your personal
        information is collected, used, shared, or accessed by digital
        services.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          Consent Should Be Informed
        </h2>

        <p>
          Meaningful consent requires more than clicking an &quot;Accept&quot; button.
          People should be able to understand what information is being
          requested and why.
        </p>

        <p>
          If a service asks for personal information without clearly explaining
          how it will be used, it becomes harder to make an informed decision.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          What Should You Understand Before Agreeing?
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>What information is being collected.</li>
          <li>Why the information is needed.</li>
          <li>How the information will be used.</li>
          <li>Whether it will be shared with other organizations.</li>
          <li>How long it may be stored.</li>
          <li>Whether you can withdraw permission later.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          App Permissions Are a Form of Consent
        </h2>

        <p>
          Mobile apps may ask for access to your location, camera, microphone,
          contacts, photographs, or other device features.
        </p>

        <p>
          Before allowing access, consider whether the permission is reasonably
          necessary for the app&apos;s main purpose.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Consent Should Not Be All or Nothing
        </h2>

        <p>
          Good privacy design gives people meaningful choices. A service should
          not pressure users into sharing more information than necessary just
          to access basic features.
        </p>

        <p>
          Where possible, users should be able to choose which types of data
          they are comfortable sharing.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Watch for Dark Patterns
        </h2>

        <p>
          Some interfaces are designed to influence people into making choices
          they may not otherwise make. These design techniques are sometimes
          called dark patterns.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Making the &quot;Accept&quot; button much more visible than &quot;Decline.&quot;</li>
          <li>Using confusing wording to discourage privacy choices.</li>
          <li>Making it difficult to find account or privacy controls.</li>
          <li>Repeatedly asking for permission after you decline.</li>
          <li>Using guilt or pressure to influence your decision.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Consent Can Change
        </h2>

        <p>
          Agreeing to something once does not always mean permission should last
          forever. People&apos;s circumstances and preferences can change.
        </p>

        <p>
          Review privacy settings and permissions periodically, especially when
          an app or service changes how it works.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Be Careful With Sensitive Information
        </h2>

        <p>
          Consent is especially important when a service collects sensitive
          information such as health data, financial information, precise
          location, biometric data, or identity documents.
        </p>

        <p>
          Before sharing sensitive information, make sure you understand why it
          is needed and how it will be protected.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Consent and AI Tools
        </h2>

        <p>
          AI tools may process text, images, documents, recordings, or other
          information that users upload.
        </p>

        <p>
          Avoid uploading another person&apos;s private information without their
          permission, and be cautious with your own sensitive information when
          you do not understand how the service handles data.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions to Ask Before You Agree
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Do I understand what I am agreeing to?</li>
          <li>Is this information necessary for the service?</li>
          <li>Can I limit the information I share?</li>
          <li>Can I change my decision later?</li>
          <li>Who else may receive this information?</li>
          <li>What could happen if the information were exposed or misused?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Read permission requests before accepting them.</li>
          <li>Decline access that is not reasonably necessary.</li>
          <li>Review app and browser permissions regularly.</li>
          <li>Use privacy settings to reduce unnecessary data sharing.</li>
          <li>Be cautious with sensitive information.</li>
          <li>Revisit consent choices when services change.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Review Your Privacy Choices
          </h3>

          <p className="mt-2">
            Use the Privacy Checkup to review common habits involving app
            permissions, account settings, personal information, and privacy
            choices.
          </p>

          <Link
            href="/tools/privacy-checkup"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
          >
            Open Privacy Checkup
          </Link>
        </div>
      </section>
    </div>
  );
}



