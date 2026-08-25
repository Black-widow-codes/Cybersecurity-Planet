import Link from "next/link";

export const metadata = {
  title: "How Websites and Apps Track You Online | Cybersecurity Planet",
  description:
    "Learn how cookies, app permissions, location data, device identifiers, and online profiling can be used to track digital activity.",
};

export default function TrackingTechnologiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        How Websites and Apps Track You Online
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Websites, apps, and digital services can collect information about how
        you use them. This information may be used for security, analytics,
        personalization, advertising, or profiling.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          What Does Online Tracking Mean?
        </h2>

        <p>
          Online tracking is the collection of information about your activity,
          device, location, preferences, or behavior as you use digital
          services.
        </p>

        <p>
          Some tracking supports useful features, while other tracking may be
          used to build detailed profiles about your interests and habits.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Cookies
        </h2>

        <p>
          Cookies are small pieces of data that websites can store in your
          browser. They can help a website remember that you are logged in,
          remember preferences, or understand how visitors use the site.
        </p>

        <p>
          Some cookies may also be used for advertising or tracking activity
          across different websites.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          App Permissions
        </h2>

        <p>
          Mobile apps may ask for access to your camera, microphone, contacts,
          photographs, location, or other device features.
        </p>

        <p>
          Permissions can be necessary for some features, but apps should not
          receive more access than they reasonably need.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Location Tracking
        </h2>

        <p>
          Phones and apps can use GPS, Wi-Fi networks, Bluetooth, and other
          signals to estimate your location.
        </p>

        <p>
          Location information can support navigation, weather, delivery, and
          emergency services, but precise location data can also reveal
          sensitive patterns about where you live, work, study, or spend time.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Device Identifiers
        </h2>

        <p>
          Devices and browsers can have identifiers or characteristics that
          help services recognize them over time.
        </p>

        <p>
          Information such as browser type, operating system, screen settings,
          language, network information, and other technical details may
          contribute to identifying or distinguishing a device.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Online Profiling
        </h2>

        <p>
          Tracking information can be combined to create profiles about a
          person's interests, preferences, habits, or likely behavior.
        </p>

        <p>
          These profiles may influence which advertisements, recommendations,
          posts, products, or services a person sees.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Tracking Is Used
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keeping accounts signed in.</li>
          <li>Remembering user preferences.</li>
          <li>Measuring website performance.</li>
          <li>Preventing fraud and abuse.</li>
          <li>Personalizing content.</li>
          <li>Delivering targeted advertising.</li>
          <li>Building audience or behavioral profiles.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Tracking Is Not Always Obvious
        </h2>

        <p>
          People may not always realize how much information a service collects
          because tracking can happen in the background.
        </p>

        <p>
          This is why privacy settings, permission controls, and clear privacy
          information matter.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions to Ask
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Does this app really need this permission?</li>
          <li>Does location access need to be active all the time?</li>
          <li>Can I disable advertising or personalization tracking?</li>
          <li>What information does the service collect about my activity?</li>
          <li>Can I delete or limit stored information?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Review app permissions regularly.</li>
          <li>Limit location access when continuous tracking is unnecessary.</li>
          <li>Review browser privacy and cookie settings.</li>
          <li>Disable unnecessary advertising personalization where available.</li>
          <li>Remove apps and browser extensions you no longer use.</li>
          <li>Review account privacy settings on major platforms.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Privacy Is About Awareness and Choice
        </h2>

        <p>
          Not all tracking is harmful, and some forms are necessary for useful
          digital services. The important question is whether you understand
          what is being collected and whether you have meaningful choices about
          how your information is used.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Review Your Privacy Habits
          </h3>

          <p className="mt-2">
            Use the Privacy Checkup to review your habits around permissions,
            privacy settings, personal information, and online tracking.
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