import Link from "next/link";

export const metadata = {
  title: "Privacy Protection Checklist | Cybersecurity Planet",
  description:
    "A practical privacy checklist for protecting personal information, reviewing account settings, and reducing unnecessary data exposure.",
};

export default function PrivacyProtectionChecklistPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Privacy Protection Checklist
      </h1>

      <p className="mt-4 text-gray-600">
        Use this checklist to review how much personal information you share,
        how your accounts are configured, and whether apps and websites have
        more access to your data than they need.
      </p>

      <section className="mt-10 space-y-8 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Review Your Account Privacy Settings
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Check who can see your profile, posts, photos, and contact
              information.
            </li>
            <li>
              Limit public visibility when information does not need to be
              public.
            </li>
            <li>
              Review location-sharing settings on social media and other apps.
            </li>
            <li>
              Check whether search engines can display your profile
              information.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Share Less Personal Information
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Avoid posting sensitive details such as your full address,
              identification numbers, or financial information.
            </li>
            <li>
              Think carefully before sharing your location or daily routine.
            </li>
            <li>
              Do not provide personal information simply because a website or
              app asks for it.
            </li>
            <li>
              Be cautious with online quizzes and forms that request personal
              details.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Review App Permissions
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Check which apps can access your camera, microphone, contacts,
              photos, and location.
            </li>
            <li>
              Remove permissions that are not necessary for the app to
              function.
            </li>
            <li>
              Delete apps and browser extensions you no longer use.
            </li>
            <li>
              Review permissions again after major app or operating system
              updates.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Protect Important Accounts
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Use strong, unique passwords for important accounts.</li>
            <li>Turn on multi-factor authentication when available.</li>
            <li>
              Keep account recovery information accurate and under your
              control.
            </li>
            <li>
              Review recent sign-ins and connected devices for unfamiliar
              activity.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Check Before You Agree
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Look for what personal information a service collects and why.
            </li>
            <li>
              Check whether your information may be shared with other
              organizations.
            </li>
            <li>
              Review privacy choices instead of automatically accepting every
              option.
            </li>
            <li>
              Remember that giving consent once does not mean you should stop
              reviewing your privacy choices later.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Check Your Privacy Habits
          </h2>

          <p className="mt-2">
            Use the Privacy Checkup to identify areas where your everyday
            privacy practices could be improved.
          </p>

          <Link
            href="/tools/privacy-checkup"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
          >
            Take the Privacy Checkup
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Learn More About Privacy and Digital Rights
          </h2>

          <p className="mt-2">
            Explore Cybersecurity Planet&apos;s Privacy &amp; Digital Rights learning
            module to understand personal data, tracking, consent, surveillance,
            and digital privacy rights.
          </p>

          <Link
            href="/learn/privacy-rights"
            className="mt-4 inline-block rounded-sm font-semibold text-cyan-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
          >
            Explore Privacy &amp; Digital Rights Learning
          </Link>
        </div>
      </section>
    </div>
  );
}



