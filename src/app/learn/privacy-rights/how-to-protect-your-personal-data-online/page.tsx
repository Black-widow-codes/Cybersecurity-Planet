import Link from "next/link";

export const metadata = {
  title: "How to Protect Your Personal Data Online | Cybersecurity Planet",
  description:
    "Learn practical ways to protect personal information using strong authentication, safer devices, careful sharing, and secure digital habits.",
};

export default function ProtectPersonalDataPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        How to Protect Your Personal Data Online
      </h1>

      <p className="mt-4 text-lg text-gray-700 transition-colors dark:text-slate-300">
        Protecting personal data means reducing the chances that your
        information, accounts, or devices can be accessed, exposed, or misused
        without your permission.
      </p>

      <section className="mt-10 space-y-6 text-gray-700 transition-colors dark:text-slate-300">
        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Start With Strong Account Security
        </h2>

        <p>
          Online accounts often contain personal information, messages,
          photographs, payment details, and other sensitive data. Protecting
          those accounts is one of the most important privacy steps you can
          take.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Use strong, unique passwords for important accounts.</li>
          <li>Enable multi-factor authentication where available.</li>
          <li>Do not share passwords or verification codes.</li>
          <li>Use a trusted password manager if appropriate for you.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Keep Devices Updated
        </h2>

        <p>
          Software updates often include security fixes for vulnerabilities
          that attackers could otherwise use to access a device or steal
          information.
        </p>

        <p>
          Keep your operating system, browser, applications, and security
          software updated.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Protect Your Devices
        </h2>

        <p>
          A lost or unattended device can expose personal information if it is
          not protected.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Use a screen lock, PIN, password, or biometric protection.</li>
          <li>Lock your device when you are not using it.</li>
          <li>Enable device encryption where available.</li>
          <li>Use remote-find or remote-wipe features where appropriate.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Be Careful What You Share
        </h2>

        <p>
          Information posted publicly can sometimes be used for scams,
          impersonation, password-reset attempts, or social engineering.
        </p>

        <p>
          Think carefully before publishing information such as your address,
          travel plans, identification documents, financial details, or other
          sensitive information.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Watch for Phishing and Impersonation
        </h2>

        <p>
          Attackers may pretend to be a bank, employer, delivery company,
          government service, friend, or other trusted person in order to steal
          information.
        </p>

        <p>
          Be cautious with unexpected links, attachments, login requests, and
          urgent messages asking for personal information.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Review App Permissions
        </h2>

        <p>
          Apps may request access to your location, contacts, camera,
          microphone, photos, or files.
        </p>

        <p>
          Remove permissions that are not reasonably necessary and review them
          periodically.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Use Secure Connections
        </h2>

        <p>
          Be cautious when using public or unfamiliar networks, especially when
          accessing sensitive accounts.
        </p>

        <p>
          Check that websites use HTTPS and avoid entering sensitive
          information into sites you do not trust.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Back Up Important Information
        </h2>

        <p>
          Backups can help protect you from accidental loss, device failure,
          theft, or ransomware.
        </p>

        <p>
          Keep important files in a secure backup location and make sure you can
          recover them when needed.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Be Careful With AI Tools
        </h2>

        <p>
          Avoid entering passwords, financial details, confidential documents,
          private health information, or other sensitive data into public AI
          tools unless you understand how the information will be handled.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          What to Do After a Data Exposure
        </h2>

        <p>
          If you believe personal information has been exposed, act quickly.
          The appropriate response depends on what information was involved.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Change affected passwords.</li>
          <li>Enable or review MFA.</li>
          <li>Watch accounts for unusual activity.</li>
          <li>Contact the affected organization if necessary.</li>
          <li>Follow official breach-response guidance.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          A Simple Data Protection Checklist
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Use unique passwords.</li>
          <li>Turn on MFA.</li>
          <li>Install security updates.</li>
          <li>Lock and protect devices.</li>
          <li>Limit unnecessary data sharing.</li>
          <li>Review permissions and privacy settings.</li>
          <li>Verify suspicious requests before responding.</li>
          <li>Back up important information.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 transition-colors dark:bg-slate-900 p-6">
          <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Review Your Privacy Habits
          </h3>

          <p className="mt-2">
            Use the Privacy Checkup to review how you protect personal
            information, manage permissions, and strengthen everyday privacy
            habits.
          </p>

          <Link
            href="/tools/privacy-checkup"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Open Privacy Checkup
          </Link>
        </div>
      </section>
    </div>
  );
}



