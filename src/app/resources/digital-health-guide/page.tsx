import Link from "next/link";

export const metadata = {
  title: "Digital Health Guide | Cybersecurity Planet",
  description:
    "A practical digital health guide for evaluating health information, protecting health data, using telehealth safely, and understanding AI in healthcare.",
};

export default function DigitalHealthGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Digital Health Guide
      </h1>

      <p className="mt-4 text-gray-600">
        Use this guide to make safer and more informed choices when using
        digital health information, health apps, telehealth services, wearable
        devices, and AI-supported healthcare tools.
      </p>

      <section className="mt-10 space-y-8 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Evaluate Health Information Carefully
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Check who created the health information and whether they have
              relevant qualifications or expertise.
            </li>
            <li>
              Look for evidence from reputable health organizations, medical
              institutions, or peer-reviewed research.
            </li>
            <li>
              Be cautious with miracle cures, guaranteed results, and claims
              that sound too good to be true.
            </li>
            <li>
              Compare important health claims with trusted independent sources.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Protect Your Health Data
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Review the privacy settings of health apps and patient portals.
            </li>
            <li>
              Check what health data an app collects and why it needs that
              information.
            </li>
            <li>
              Use strong, unique passwords and multi-factor authentication when
              available.
            </li>
            <li>
              Avoid sharing sensitive health information through unsecured or
              unfamiliar services.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Use Telehealth Safely
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Use telehealth services provided by trusted healthcare
              organizations or licensed professionals.
            </li>
            <li>
              Join appointments from a private location when possible.
            </li>
            <li>
              Avoid discussing sensitive health information over public Wi-Fi
              when a safer connection is available.
            </li>
            <li>
              Confirm the identity of the healthcare provider if a request or
              message seems unusual.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Understand Wearables and Health Apps
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Remember that wearable devices and health apps may not provide
              medical-grade measurements.
            </li>
            <li>
              Review which third parties may receive or process your data.
            </li>
            <li>
              Check whether you can delete your information or close your
              account.
            </li>
            <li>
              Do not treat an app&apos;s result as a medical diagnosis unless it
              is specifically designed and approved for that purpose.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Be Careful With AI Health Advice
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              AI tools can provide incorrect, incomplete, or outdated health
              information.
            </li>
            <li>
              Do not use a general AI chatbot as a replacement for professional
              medical care.
            </li>
            <li>
              Verify important health information with qualified healthcare
              professionals or trusted public health sources.
            </li>
            <li>
              Avoid entering sensitive medical information into AI tools unless
              you understand how that information may be stored or used.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Check a Health Claim Before Trusting It
          </h2>

          <p className="mt-2">
            Use the Health Misinformation Check to review common warning signs
            in online health information.
          </p>

          <Link
            href="/tools/health-misinformation-check"
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Open the Health Misinformation Check
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Learn More About Digital Health
          </h2>

          <p className="mt-2">
            Explore Cybersecurity Planet&apos;s Digital Health learning module
            for deeper guidance on health misinformation, telehealth, health
            data, wearable devices, and AI in healthcare.
          </p>

          <Link
            href="/learn/digital-health"
            className="mt-4 inline-block font-semibold text-cyan-700 hover:underline"
          >
            Explore Digital Health Learning
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          This guide is for educational purposes and does not provide medical
          advice, diagnosis, or treatment.
        </p>
      </section>
    </main>
  );
}