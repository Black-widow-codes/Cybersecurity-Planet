import Link from "next/link";

export const metadata = {
  title: "What Makes a Strong Password? | Cybersecurity Planet",
  description:
    "Learn what makes a password strong and how to create safer passwords for your online accounts.",
};

export default function StrongPasswordArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        What Makes a Strong Password?
      </h1>

      <p className="mt-4 text-gray-600">
        Passwords are one of the first lines of defense for your online
        accounts. A weak password can make it easier for someone to access your
        email, social media, banking, school, or work accounts.
      </p>

      <section className="mt-10 space-y-6 text-gray-700">
        <p>
          A strong password is difficult for another person or computer program
          to guess. It should be long, unique, and not based on obvious personal
          information such as your name, birthday, phone number, or favorite
          team.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          Features of a Strong Password
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Use at least 12 characters where possible.</li>
          <li>Include uppercase and lowercase letters.</li>
          <li>Include numbers and symbols.</li>
          <li>Avoid common words like password, admin, or welcome.</li>
          <li>Do not reuse the same password on many accounts.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900">
          Why Password Reuse Is Risky
        </h2>

        <p>
          If one website is hacked and you used the same password somewhere
          else, attackers may try that password on your other accounts. This is
          why unique passwords are important, especially for email, banking,
          school, and work accounts.
        </p>

        <h2 className="text-2xl font-bold text-blue-900">
          A Better Approach
        </h2>

        <p>
          Instead of trying to remember many complicated passwords, consider
          using a trusted password manager. A password manager can help you
          create and store strong, unique passwords safely.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Try the Password Strength Checker
          </h3>

          <p className="mt-2">
            Use our tool to test a sample password and learn what makes it
            stronger. Do not enter your real password.
          </p>

          <Link
            href="/tools/password-strength-checker"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
          >
            Open Password Strength Checker
          </Link>
        </div>
      </section>
    </div>
  );
}


