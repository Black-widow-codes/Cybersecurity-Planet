import Link from "next/link";

export const metadata = {
  title: "How Your Health Data Is Collected and Protected | Cybersecurity Planet",
  description:
    "Learn how health information is collected, stored, shared, and protected across healthcare systems, apps, portals, and digital services.",
};

export default function HealthDataPrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        How Your Health Data Is Collected and Protected
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Health data can include some of the most sensitive information about a
        person. Understanding how it is collected, stored, shared, and protected
        is an important part of using digital healthcare safely.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-blue-900">
          What Counts as Health Data?
        </h2>

        <p>
          Health data can include information about your physical or mental
          health, medical history, medications, test results, appointments,
          diagnoses, treatments, and other information connected to your care.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Medical records.</li>
          <li>Laboratory and imaging results.</li>
          <li>Medication information.</li>
          <li>Appointment and treatment history.</li>
          <li>Insurance or billing information.</li>
          <li>Information collected by health apps or wearable devices.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          How Health Data Is Collected
        </h2>

        <p>
          Health information can be collected in hospitals, clinics, pharmacies,
          laboratories, patient portals, telehealth systems, mobile apps, and
          connected devices.
        </p>

        <p>
          Some data is entered by healthcare professionals, while other data may
          be created automatically by devices, apps, sensors, or digital
          systems.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Electronic Health Records
        </h2>

        <p>
          Electronic health records help healthcare professionals organize and
          access patient information. They can improve coordination and reduce
          duplication when information is available to the right people at the
          right time.
        </p>

        <p>
          Because these records contain sensitive information, strong access
          controls, security measures, and appropriate use are important.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Patient Portals
        </h2>

        <p>
          Patient portals may allow you to view test results, appointments,
          messages, prescriptions, or other health information.
        </p>

        <p>
          Protect portal accounts with strong passwords and multi-factor
          authentication where available.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Health Apps and Wearable Devices
        </h2>

        <p>
          Fitness trackers, smartwatches, symptom trackers, medication apps, and
          other digital health tools can collect information about activity,
          sleep, heart rate, location, or health habits.
        </p>

        <p>
          The privacy protections for these services may differ from those used
          by hospitals or regulated healthcare providers, so review how the app
          handles your information.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Health Data May Be Shared
        </h2>

        <p>
          Health information may need to be shared for care coordination,
          laboratory testing, pharmacy services, billing, referrals, or other
          legitimate healthcare purposes.
        </p>

        <p>
          Organizations should limit access to people and systems that have an
          appropriate reason to use the information.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          How Health Data Is Protected
        </h2>

        <p>
          Healthcare organizations may use a combination of technical,
          administrative, and physical safeguards to protect health
          information.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Account authentication and access controls.</li>
          <li>Encryption.</li>
          <li>Audit logs and monitoring.</li>
          <li>Staff privacy and security training.</li>
          <li>Secure networks and systems.</li>
          <li>Policies limiting unnecessary access.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Health Data Can Still Be Exposed
        </h2>

        <p>
          No digital system is completely risk-free. Health information can be
          exposed through phishing, stolen passwords, malware, lost devices,
          misconfigured systems, or other security incidents.
        </p>

        <p>
          This is why both healthcare organizations and patients have roles in
          protecting access to health information.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Be Careful With Public AI Tools
        </h2>

        <p>
          People may be tempted to upload medical reports, symptoms, test
          results, or other sensitive information into general-purpose AI
          systems.
        </p>

        <p>
          Before doing so, understand how the service stores and uses submitted
          information. Avoid sharing more health information than necessary.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Questions to Ask About a Health App or Service
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>What health information does this service collect?</li>
          <li>Why does it need the information?</li>
          <li>Who can access or receive it?</li>
          <li>How long is it stored?</li>
          <li>Can I delete my information or account?</li>
          <li>What security measures are used?</li>
          <li>Does the service use my data for advertising or profiling?</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Protect patient portals with strong authentication.</li>
          <li>Review privacy settings on health apps.</li>
          <li>Limit unnecessary permissions and data sharing.</li>
          <li>Keep health-related devices and apps updated.</li>
          <li>Be cautious with unexpected health-related messages and links.</li>
          <li>Avoid uploading sensitive health information unnecessarily.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Review Your Privacy Habits
          </h3>

          <p className="mt-2">
            Use the Privacy Checkup to review how you manage sensitive
            information, permissions, account security, and privacy settings.
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