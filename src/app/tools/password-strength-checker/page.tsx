import Link from "next/link";
import PasswordStrengthChecker from "@/components/PasswordStrengthChecker";

export const metadata = {
  title: "Password Strength Checker | Cybersecurity Planet",
  description:
    "Check password strength and learn how to create safer passwords.",
};

export default function PasswordStrengthCheckerPage() {
  return (
    <div className="px-6 py-12">
      <PasswordStrengthChecker />

      <section className="mx-auto mt-10 max-w-3xl rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
          Learn More About Strong Passwords
        </h2>

        <p className="mt-3 text-gray-700 dark:text-slate-300">
          Learn why password length, uniqueness, unpredictability, and safer
          account habits matter for protecting your online accounts.
        </p>

        <Link
          href="/learn/digital-safety/what-makes-a-strong-password"
          className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
        >
          Read What Makes a Strong Password?
        </Link>
      </section>
    </div>
  );
}



