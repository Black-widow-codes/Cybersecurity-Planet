import Link from "next/link";

export const metadata = {
  title: "How to Use Telehealth Safely | Cybersecurity Planet",
  description:
    "Learn how to prepare for virtual healthcare visits, protect your privacy, verify providers, and use telehealth services more safely.",
};

export default function TelehealthSafetyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        How to Use Telehealth Safely
      </h1>

      <p className="mt-4 text-lg text-gray-700 transition-colors dark:text-slate-300">
        Telehealth makes it possible to speak with healthcare professionals
        through video, phone, or other digital platforms. It can improve access
        and convenience, but users still need to think about privacy, security,
        identity, and appropriate care.
      </p>

      <section className="mt-10 space-y-6 text-gray-700 transition-colors dark:text-slate-300">
        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Use Trusted Healthcare Services
        </h2>

        <p>
          Before joining a virtual appointment, confirm that the service is
          connected to a legitimate healthcare provider, clinic, hospital, or
          trusted health organization.
        </p>

        <p>
          Be cautious with unsolicited messages offering medical appointments,
          prescriptions, treatments, or health services through unfamiliar
          links.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Verify Who You Are Speaking With
        </h2>

        <p>
          During a telehealth visit, you should understand who the healthcare
          professional is and what role they have in your care.
        </p>

        <p>
          If anything seems unusual, verify the appointment through the clinic
          or healthcare organization&apos;s official contact information.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Protect Your Appointment Links
        </h2>

        <p>
          Virtual appointment links, access codes, and patient portal
          credentials may provide access to private health information.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Do not post appointment links publicly.</li>
          <li>Do not share access codes unnecessarily.</li>
          <li>Keep patient portal passwords private.</li>
          <li>Be cautious with unexpected requests to log in again.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Choose a Private Location
        </h2>

        <p>
          Health conversations may involve sensitive information. When
          possible, take virtual appointments in a quiet and private location
          where other people cannot easily overhear the conversation.
        </p>

        <p>
          Headphones can also help protect privacy when you cannot control the
          surrounding environment.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Use a Secure Device
        </h2>

        <p>
          Keep the device you use for telehealth updated and protected with a
          password, PIN, or biometric lock.
        </p>

        <p>
          Avoid using shared or public computers for sensitive health sessions
          unless there is no reasonable alternative and you understand the
          privacy risks.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Check Your Internet Connection
        </h2>

        <p>
          A stable internet connection can improve call quality and reduce
          interruptions during a virtual appointment.
        </p>

        <p>
          When discussing sensitive health information, use a trusted network
          when possible rather than an unfamiliar public Wi-Fi connection.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Understand What Information Is Being Collected
        </h2>

        <p>
          Telehealth platforms may process information such as your name,
          appointment details, messages, recordings, or health information.
        </p>

        <p>
          Review available privacy information so you understand how the
          platform handles your data.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Be Careful With Recording
        </h2>

        <p>
          Some telehealth systems may support recording or transcription.
          Recording a health conversation can create additional privacy risks.
        </p>

        <p>
          Make sure you understand whether recording is taking place and what
          rules or consent requirements apply.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Prepare Before the Appointment
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Test your camera and microphone.</li>
          <li>Charge your device.</li>
          <li>Have your medication list available if relevant.</li>
          <li>Write down important symptoms or questions.</li>
          <li>Keep required health documents nearby.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Know the Limits of Telehealth
        </h2>

        <p>
          Telehealth is useful for many types of care, but not every health
          concern can be assessed safely through a virtual appointment.
        </p>

        <p>
          A healthcare professional may recommend an in-person examination,
          testing, emergency care, or another type of service when necessary.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Watch for Telehealth Scams
        </h2>

        <p>
          Scammers may impersonate health organizations or healthcare
          professionals to steal money, account credentials, or personal
          information.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Verify unexpected appointment messages.</li>
          <li>Do not send passwords or verification codes.</li>
          <li>Be cautious with urgent payment demands.</li>
          <li>Use official websites and contact information.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          What You Can Do
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Use trusted telehealth providers.</li>
          <li>Protect appointment links and patient portal accounts.</li>
          <li>Choose a private location for health conversations.</li>
          <li>Keep your device updated and secured.</li>
          <li>Review how the platform handles health information.</li>
          <li>Verify suspicious messages before responding.</li>
        </ul>

        <div className="rounded-xl border bg-gray-50 transition-colors dark:bg-slate-900 p-6">
          <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Check Health Information Carefully
          </h3>

          <p className="mt-2">
            Virtual healthcare can also expose you to online health claims and
            advice. Use the Health Misinformation Check when you need to examine
            whether a health claim has important warning signs.
          </p>

          <Link
            href="/tools/health-misinformation-check"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Open Health Misinformation Check
          </Link>
        </div>
      </section>
    </div>
  );
}




