import Link from "next/link";

export const metadata = {
  title: "What Is Personal Data and Why Does It Matter? | Cybersecurity Planet",
  description:
    "Learn what personal data is, how digital services collect it, why some information is more sensitive, and how to protect your privacy online.",
};

export default function PersonalDataPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        What Is Personal Data and Why Does It Matter?
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Personal data is information that relates to you or can be used to
        identify, describe, locate, or learn something about you. Every time you
        use digital services, you may create or share personal data.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          What Counts as Personal Data?
        </h2>

        <p>
          Personal data includes obvious information such as your name, email
          address, telephone number, or home address. It can also include
          information that identifies you indirectly.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Your name and contact information.</li>
          <li>Your photographs and videos.</li>
          <li>Your location information.</li>
          <li>Your device and account identifiers.</li>
          <li>Your browsing and search activity.</li>
          <li>Your financial information.</li>
          <li>Your health information.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Some Personal Data Is More Sensitive
        </h2>

        <p>
          Certain information can create greater privacy or security risks if
          it is exposed or misused. Health records, financial information,
          government identification numbers, passwords, precise location data,
          and biometric information require particular care.
        </p>

        <p>
          The more sensitive the information is, the more important it becomes
          to understand why it is being requested and how it will be protected.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          How Is Personal Data Collected?
        </h2>

        <p>
          Some information is collected because you provide it directly. Other
          information may be generated automatically as you use a website, app,
          device, or online service.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Creating an online account.</li>
          <li>Completing an online form.</li>
          <li>Making an online purchase.</li>
          <li>Allowing an app to access your location.</li>
          <li>Searching or browsing online.</li>
          <li>Using a fitness or health application.</li>
          <li>Interacting with posts, advertisements, or videos.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Your Activity Can Create Data
        </h2>

        <p>
          Personal data is not limited to information you deliberately type
          into a form. Digital systems can record information about how you use
          them.
        </p>

        <p>
          For example, a service may record when you logged in, which pages you
          visited, what device you used, what you clicked, and approximately
          where you connected from.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Data Can Reveal More Than You Expect
        </h2>

        <p>
          Individual pieces of information may appear harmless on their own.
          When several pieces are combined, however, they can reveal patterns
          about your interests, habits, relationships, movements, or
          preferences.
        </p>

        <p>
          This is one reason privacy is about more than protecting passwords or
          hiding individual facts.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Organizations Collect Data
        </h2>

        <p>
          Organizations may collect personal information for legitimate
          purposes such as providing services, processing payments, improving
          products, preventing fraud, maintaining security, or personalizing
          user experiences.
        </p>

        <p>
          Data may also be used for analytics, advertising, profiling, or other
          purposes. Understanding these uses helps you make more informed
          privacy decisions.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Personal Data Matters
        </h2>

        <p>
          Personal information can affect your privacy, identity, finances,
          reputation, and safety. If sensitive information is exposed, it may be
          used for scams, impersonation, account attacks, or other forms of
          misuse.
        </p>

        <p>
          Protecting personal data therefore involves understanding both what
          information you share and what digital services collect about you.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Think Before You Provide Information
        </h2>

        <p>
          Before giving an app, website, organization, or AI tool personal
          information, consider whether the information is actually necessary
          for the service you want to use.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Why is this information being requested?</li>
          <li>Is it necessary for the service?</li>
          <li>How will the information be used?</li>
          <li>Will it be shared with other organizations?</li>
          <li>How long might it be stored?</li>
          <li>What could happen if the information were exposed?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Practical Ways to Reduce Exposure
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Share only the information that is reasonably necessary.</li>
          <li>Review privacy and account settings.</li>
          <li>Check app permissions regularly.</li>
          <li>Avoid posting sensitive information publicly.</li>
          <li>Protect accounts with strong, unique passwords and MFA.</li>
          <li>Be cautious when uploading personal information to AI tools.</li>
          <li>Delete accounts or information you no longer need where possible.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Privacy Is About Control
        </h2>

        <p>
          Protecting personal data does not mean avoiding technology. It means
          understanding what information you are giving away, making informed
          choices, and using available controls to reduce unnecessary exposure.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Review Your Privacy Habits
          </h3>

          <p className="mt-2">
            Use the Privacy Checkup to review common privacy risks involving
            account settings, app permissions, location sharing, personal
            information, and digital services.
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