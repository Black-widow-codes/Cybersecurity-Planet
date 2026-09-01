import Link from "next/link";

export const metadata = {
  title: "Digital Wellbeing and Responsible Technology Use | Cybersecurity Planet",
  description:
    "Learn how to build healthier technology habits, manage screen time, protect attention, and use digital tools responsibly.",
};

export default function DigitalWellbeingArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        Digital Wellbeing and Responsible Technology Use
      </h1>

      <p className="mt-4 text-gray-600 transition-colors dark:text-slate-300">
        Technology can support learning, work, relationships, creativity, and
        entertainment, but healthy digital citizenship also means using
        technology in ways that support your wellbeing and responsibilities.
      </p>

      <section className="mt-10 space-y-6 text-gray-700 transition-colors dark:text-slate-300">
        <p>
          Digital wellbeing is about developing habits that help technology
          serve your goals rather than constantly competing for your time,
          attention, or sleep.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Pay Attention to Your Digital Habits
        </h2>

        <p>
          Notice how often you check your phone, switch between apps, scroll
          without a clear purpose, or continue using a platform longer than you
          intended. Awareness is the first step toward making healthier choices.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Protect Your Attention
        </h2>

        <p>
          Notifications, messages, and endless feeds can interrupt study, work,
          conversations, and rest. Consider disabling unnecessary
          notifications, using focus settings, or placing your device out of
          reach when you need uninterrupted attention.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Create Healthy Boundaries
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Set times when you intentionally step away from screens.</li>
          <li>Avoid checking every notification immediately.</li>
          <li>Give important tasks your full attention.</li>
          <li>Make space for offline activities and relationships.</li>
          <li>Use device settings that support your goals.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Protect Your Sleep
        </h2>

        <p>
          Late-night messages, videos, games, or social media can make it harder
          to disconnect and rest. Creating a regular stopping point for device
          use can help separate online activity from sleep time.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Be Intentional About Social Media
        </h2>

        <p>
          Online spaces can help people connect and learn, but they can also
          encourage comparison, conflict, distraction, or repeated exposure to
          upsetting content. Consider which accounts, communities, and
          platforms genuinely add value to your digital life.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Responsible Use Includes Other People
        </h2>

        <p>
          Healthy technology use is not only about your own screen time. It also
          includes respecting other people&apos;s attention, privacy, and
          boundaries. Avoid pressuring someone to respond immediately or share
          more than they are comfortable sharing.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Technology Should Support Your Goals
        </h2>

        <p>
          There is no single amount of screen time that works for everyone.
          Instead, ask whether your technology habits are supporting or
          interfering with your learning, work, sleep, relationships, safety,
          and overall responsibilities.
        </p>

        <div className="rounded-xl border bg-gray-50 transition-colors dark:bg-slate-900 p-6">
          <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Reflect on Your Digital Habits
          </h3>

          <p className="mt-2">
            Use the Digital Citizenship Checkup to reflect on responsible
            sharing, respectful communication, privacy, information evaluation,
            and digital wellbeing.
          </p>

          <Link
            href="/tools/digital-citizenship-checkup"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Open Digital Citizenship Checkup
          </Link>
        </div>
      </section>
    </div>
  );
}



