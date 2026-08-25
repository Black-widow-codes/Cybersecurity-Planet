import Link from "next/link";

export const metadata = {
  title: "Understanding Your Digital Privacy Rights | Cybersecurity Planet",
  description:
    "Learn about digital privacy rights involving personal information, transparency, access, correction, consent, security, and control.",
};

export default function DigitalPrivacyRightsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Understanding Your Digital Privacy Rights
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Digital privacy rights help protect people when organizations collect,
        use, store, or share personal information. Understanding these rights
        can help you make informed decisions and ask better questions about
        what happens to your data.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          Privacy Is More Than Keeping Information Secret
        </h2>

        <p>
          Privacy is also about having meaningful control over personal
          information. You should be able to understand what information is
          being collected, why it is needed, and how it may be used.
        </p>

        <p>
          Privacy rights and specific legal protections can vary depending on
          where you live and which organization is handling your information.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          The Right to Understand What Is Happening
        </h2>

        <p>
          Organizations should communicate their privacy practices clearly
          enough for people to understand how personal information is handled.
        </p>

        <p>
          This includes explaining what information is collected, why it is
          collected, and whether it may be shared with others.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Access to Your Personal Information
        </h2>

        <p>
          Depending on the service and applicable privacy rules, you may have
          ways to request access to personal information an organization holds
          about you.
        </p>

        <p>
          Account dashboards, privacy portals, and formal information requests
          are some ways organizations may provide access.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Correcting Inaccurate Information
        </h2>

        <p>
          Incorrect personal information can cause problems, especially when it
          affects identity, accounts, services, finances, or important
          decisions.
        </p>

        <p>
          Some organizations provide ways to update or request corrections to
          inaccurate information.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Meaningful Consent
        </h2>

        <p>
          When consent is used as the basis for collecting or using personal
          information, people should understand what they are agreeing to.
        </p>

        <p>
          Consent should not depend on confusing language or pressure that makes
          privacy choices difficult to understand.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Limiting Unnecessary Collection
        </h2>

        <p>
          Organizations should have a legitimate reason for collecting personal
          information. From a privacy perspective, collecting more information
          than necessary can create additional risk.
        </p>

        <p>
          As a user, you can also question whether an app or service genuinely
          needs the information or permissions it requests.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Protecting Personal Information
        </h2>

        <p>
          Organizations that hold personal information have a responsibility to
          take appropriate steps to protect it from unauthorized access, loss,
          misuse, or disclosure.
        </p>

        <p>
          Users also play a role by protecting their accounts, devices, and
          authentication information.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Deleting or Closing Accounts
        </h2>

        <p>
          Some services allow users to delete information or close accounts.
          However, deleting an account does not always mean every piece of data
          disappears immediately.
        </p>

        <p>
          Services may retain certain information for legal, security,
          operational, or other legitimate reasons. Review the service's
          privacy information to understand what happens after deletion.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Automated Decisions and Profiling
        </h2>

        <p>
          Digital systems may use personal information to recommend content,
          detect fraud, personalize services, rank information, or support
          automated decisions.
        </p>

        <p>
          Understanding when profiling or automated systems affect you is an
          increasingly important part of digital privacy awareness.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          What Can You Ask an Organization?
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>What personal information do you collect about me?</li>
          <li>Why do you need this information?</li>
          <li>How is my information being used?</li>
          <li>Who can receive or access it?</li>
          <li>How long will it be retained?</li>
          <li>How can I access or correct my information?</li>
          <li>How can I change my privacy choices?</li>
          <li>What happens to my information if I close my account?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Review privacy settings on services you regularly use.</li>
          <li>Read important privacy notices before sharing sensitive data.</li>
          <li>Ask questions when data collection seems unnecessary.</li>
          <li>Keep account information accurate where appropriate.</li>
          <li>Use available controls to limit unnecessary sharing.</li>
          <li>Learn which privacy protections apply where you live.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Know Where to Seek Help
        </h2>

        <p>
          If you believe an organization has mishandled your personal
          information, start by reviewing its privacy policy and contacting its
          privacy or support team.
        </p>

        <p>
          Depending on your location and the situation, a privacy regulator or
          other appropriate authority may also provide information about your
          rights and complaint options.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Review Your Privacy Practices
          </h3>

          <p className="mt-2">
            Use the Privacy Checkup to examine common privacy choices involving
            personal information, permissions, account settings, and digital
            services.
          </p>

          <Link
            href="/tools/privacy-checkup"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Open Privacy Checkup
          </Link>
        </div>
      </section>
    </main>
  );
}