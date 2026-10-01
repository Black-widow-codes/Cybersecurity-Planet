import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyber Security Awareness Month 2026: Your Best Defence Is You",
  description:
    "Cyber Security Awareness Month 2026 reminds us that everyday decisions matter. Learn practical ways to recognize scams, strengthen accounts, protect devices, and help others stay safer online.",
};

export default function CyberSecurityAwarenessMonth2026Page() {
  return (
    <article className="bg-white transition-colors dark:bg-slate-950">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-gray-50 px-6 py-16 transition-colors dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/insights"
            className="text-sm font-semibold text-cyan-700 transition hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            ← Back to Insights
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
            Cybersecurity Awareness
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-blue-950 md:text-5xl dark:text-blue-100">
            Cyber Security Awareness Month 2026: Your Best Defence Is You
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-700 dark:text-slate-300">
            Cyber threats are becoming more convincing, especially with
            artificial intelligence. But protecting yourself online does not
            always require advanced technical skills. Often, your strongest
            defence starts with the decisions you make every day.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-slate-400">
            <span>Cybersecurity Planet</span>
            <span>October 2026</span>
            <span>8 min read</span>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 shadow-lg dark:border-slate-700">
  <Image
    src="/images/insights/cybersecurity-awareness-month-2026.png"
    alt="Earth viewed from space with Canada visible and glowing cybersecurity connections and security icons surrounding the planet"
    width={1536}
    height={864}
    priority
    className="h-auto w-full object-cover"
  />
</div>
        </div>
      </section>

      {/* Article body */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 text-lg leading-8 text-gray-700 dark:text-slate-300">
          <p>
            October is Cyber Security Awareness Month, an internationally
            recognized campaign that helps people understand cyber risks and
            learn practical ways to stay safer online. In Canada, the campaign
            is led by Get Cyber Safe on behalf of the Communications Security
            Establishment Canada.
          </p>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-8 dark:border-cyan-900 dark:bg-cyan-950/30">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
              2026 Theme
            </p>

            <p className="mt-3 text-3xl font-bold text-blue-950 dark:text-blue-100">
              Your best defence is you.
            </p>
          </div>

          <p>
            That message matters because cybersecurity is no longer something
            only IT professionals need to understand.
          </p>

          <p>
            Every time you open an email, log into your bank account, use
            social media, download an app, connect to public Wi-Fi, access a
            health portal, or share information online, you are making
            decisions that can affect your digital security.
          </p>

          <p>
            And as technology changes, those decisions are becoming even more
            important.
          </p>

          <SectionTitle>Cyber threats are getting harder to recognize</SectionTitle>

          <p>
            For years, people were told to look for obvious warning signs in
            scams: bad spelling, strange email addresses, poorly written
            messages, or suspicious-looking websites.
          </p>

          <p>
            Those signs still matter, but they are no longer enough.
          </p>

          <p>
            Artificial intelligence can help produce convincing text, images,
            audio, and other content. Canada&apos;s 2026 Cyber Security
            Awareness Month campaign highlights how AI can make phishing
            messages and scams appear more realistic and therefore harder to
            recognize.
          </p>

          <p>That changes the question we need to ask.</p>

          <blockquote className="border-l-4 border-cyan-600 pl-6 text-2xl font-semibold leading-9 text-blue-950 dark:border-cyan-400 dark:text-blue-100">
            Instead of only asking, &ldquo;Does this message look fake?&rdquo;
            we should also ask, &ldquo;Can I independently verify that this is
            real?&rdquo;
          </blockquote>

          <p>
            A message can look professional and still be fraudulent. A
            familiar logo does not prove that an email came from your bank. A
            convincing voice does not necessarily prove who is speaking. And a
            realistic image or video does not automatically make the
            information it contains true.
          </p>

          <p>
            Cybersecurity awareness increasingly requires us to pause, question,
            and verify.
          </p>

          <SectionTitle>1. Recognize the pressure behind scams</SectionTitle>

          <p>
            Many online scams are designed to make you react before you have
            time to think.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7 dark:border-slate-700 dark:bg-slate-900">
            <p className="font-semibold text-blue-950 dark:text-blue-100">
              A suspicious message might claim:
            </p>

            <ul className="mt-4 space-y-3">
              <li>• Your account will be suspended.</li>
              <li>• Your package cannot be delivered.</li>
              <li>• Someone has accessed your bank account.</li>
              <li>• You have won something.</li>
              <li>• A family member urgently needs money.</li>
            </ul>
          </div>

          <p>
            The details change, but the strategy is often similar: create fear,
            urgency, curiosity, or excitement, then push you toward an action.
          </p>

          <p>
            That action could be clicking a link, opening an attachment,
            sending money, entering a password, or providing personal
            information.
          </p>

          <p>
            When a message pressures you to act immediately, slowing down can
            itself become a security measure.
          </p>

          <p>
            Instead of using the link in the message, open the
            organization&apos;s official website or app yourself. If someone
            you know makes an unusual request, contact them through another
            method you already trust.
          </p>

          <SectionTitle>2. Protect your accounts with stronger passwords</SectionTitle>

          <p>
            Passwords remain one of the basic barriers between attackers and
            your accounts.
          </p>

          <p>
            But one of the biggest problems isn&apos;t simply having a weak
            password. It is reusing the same password across multiple services.
          </p>

          <p>
            If one service is compromised and your password becomes exposed,
            attackers can try the same credentials elsewhere.
          </p>

          <p>
            Use strong, unique passwords for important accounts and consider
            using a reputable password manager so that you do not have to
            remember every password yourself.
          </p>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-7 dark:border-cyan-900 dark:bg-cyan-950/30">
            <h3 className="text-xl font-bold text-blue-950 dark:text-blue-100">
              Test what you know about password strength
            </h3>

            <p className="mt-3">
              Cybersecurity Planet&apos;s Password Strength Checker can help
              you understand the characteristics that contribute to stronger
              passwords.
            </p>

            <Link
              href="/tools/password-strength-checker"
              className="mt-5 inline-flex font-semibold text-cyan-700 hover:underline dark:text-cyan-300"
            >
              Open Password Strength Checker →
            </Link>
          </div>

          <SectionTitle>3. Turn on multi-factor authentication</SectionTitle>

          <p>A password should not have to defend your account alone.</p>

          <p>
            Multi-factor authentication (MFA) adds another verification step
            when someone tries to sign in. That means obtaining your password
            may not automatically give an attacker access to the account.
          </p>

          <p>Start with accounts that could cause the most damage if compromised:</p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Email",
              "Banking and financial accounts",
              "Social media",
              "Cloud storage",
              "School or workplace accounts",
              "Health-related accounts",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-900"
              >
                {item}
              </li>
            ))}
          </ul>

          <SectionTitle>4. Keep your devices and software updated</SectionTitle>

          <p>
            That update notification you keep postponing isn&apos;t always
            about getting new features.
          </p>

          <p>
            Software updates can also fix security vulnerabilities discovered
            after an application or operating system was released. Leaving
            software outdated can therefore leave known weaknesses unresolved.
          </p>

          <p>
            Keep your operating system, browser, applications, and security
            software current. Where appropriate, enabling automatic updates can
            make this easier.
          </p>

          <SectionTitle>
            Cybersecurity is also about the people around you
          </SectionTitle>

          <p>
            Cybersecurity awareness shouldn&apos;t stop with protecting your
            own accounts.
          </p>

          <p>
            Think about someone in your family who isn&apos;t comfortable with
            technology. A child getting their first phone. A parent receiving
            suspicious messages. A friend trying to determine whether an online
            offer is genuine. A coworker receiving an unexpected attachment.
          </p>

          <p>
            Good cybersecurity habits become more powerful when we share them.
            Sometimes one simple conversation can prevent someone from becoming
            a victim.
          </p>

          <SectionTitle>A four-week Cybersecurity Planet challenge</SectionTitle>

          <p>
            This October, don&apos;t try to fix your entire digital life in one
            afternoon. Do one meaningful thing each week.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <ChallengeCard
              week="Week 1"
              title="Learn to recognize threats"
            >
              Look more closely at suspicious emails, text messages, QR codes,
              social-media messages, and AI-generated content. Practice pausing
              before clicking.
            </ChallengeCard>

            <ChallengeCard week="Week 2" title="Strengthen your accounts">
              Replace reused passwords on important accounts and enable
              multi-factor authentication wherever possible.
            </ChallengeCard>

            <ChallengeCard
              week="Week 3"
              title="Protect your devices and information"
            >
              Install outstanding updates, review app permissions, and check
              the privacy and security settings on the services you use most.
            </ChallengeCard>

            <ChallengeCard week="Week 4" title="Help someone else">
              Share what you&apos;ve learned with a friend, family member,
              coworker, or community member.
            </ChallengeCard>
          </div>

          <SectionTitle>Awareness should not end on October 31</SectionTitle>

          <p>
            Cyber Security Awareness Month gives us an opportunity to talk
            about online safety, but cyber threats do not disappear when
            October ends.
          </p>

          <p>
            The goal should not be to become afraid of technology. It should be
            to become more confident using it.
          </p>

          <p>
            You don&apos;t have to understand every cyberattack. You
            don&apos;t have to become a cybersecurity professional. And you
            don&apos;t have to make one perfect security decision that protects
            you forever.
          </p>

          <div className="rounded-2xl bg-blue-950 p-8 text-white dark:bg-slate-900 dark:ring-1 dark:ring-slate-700">
            <p className="text-2xl font-bold text-blue-100">Build habits.</p>

            <div className="mt-5 space-y-2 text-slate-200">
              <p>Pause before clicking.</p>
              <p>Verify unusual requests.</p>
              <p>Protect your accounts.</p>
              <p>Keep your devices updated.</p>
              <p>Question information that doesn&apos;t seem right.</p>
              <p>Help the people around you do the same.</p>
            </div>

            <p className="mt-7 text-xl font-semibold text-cyan-300">
              Because in an increasingly connected world, your best defence
              really can begin with you.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-blue-950 dark:text-blue-100">
              Learn more
            </h2>

            <p className="mt-3">
              Canada&apos;s Get Cyber Safe program provides official Cyber
              Security Awareness Month information, campaign resources, and
              practical cybersecurity guidance.
            </p>

            <a
              href="https://www.getcybersafe.gc.ca/en/cyber-security-awareness-month"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex font-semibold text-cyan-700 hover:underline dark:text-cyan-300"
            >
              Visit Get Cyber Safe →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pt-6 text-3xl font-bold leading-tight text-blue-950 dark:text-blue-100">
      {children}
    </h2>
  );
}

function ChallengeCard({
  week,
  title,
  children,
}: {
  week: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-700 dark:bg-slate-900">
      <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-700 dark:text-cyan-300">
        {week}
      </p>

      <h3 className="mt-2 text-xl font-bold text-blue-950 dark:text-blue-100">
        {title}
      </h3>

      <p className="mt-3">{children}</p>
    </div>
  );
}