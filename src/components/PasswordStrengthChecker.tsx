"use client";

import Link from "next/link";
import { useState } from "react";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");

  const checks = {
    minimumLength: password.length >= 8,
    recommendedLength: password.length >= 12,
    strongLength: password.length >= 16,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const hasPassword = password.length > 0;

  let score = 0;

  if (checks.minimumLength) score += 1;
  if (checks.recommendedLength) score += 1;
  if (checks.strongLength) score += 1;
  if (checks.uppercase) score += 1;
  if (checks.lowercase) score += 1;
  if (checks.number) score += 1;
  if (checks.special) score += 1;

  let strength = "Not tested";
  let explanation =
    "Enter a sample password to see how its length and character variety affect its strength.";

  if (hasPassword) {
    if (score <= 2) {
      strength = "Very Weak";
      explanation =
        "This sample password is short or lacks enough variety. It would likely be easier to guess or crack than a longer and more varied password.";
    } else if (score <= 4) {
      strength = "Weak";
      explanation =
        "This sample has some useful characteristics, but it still needs improvement. Increasing its length and adding missing character types would make it stronger.";
    } else if (score === 5) {
      strength = "Moderate";
      explanation =
        "This sample has several good characteristics, but it can still be improved. Longer passwords generally provide better protection than short passwords that simply meet complexity rules.";
    } else if (score === 6) {
      strength = "Strong";
      explanation =
        "This sample combines good length with several character types. For important accounts, consider using a unique password generated and stored by a password manager.";
    } else {
      strength = "Very Strong";
      explanation =
        "This sample demonstrates strong length and character variety. A real password should also be unique to one account and stored securely rather than reused elsewhere.";
    }
  }

  const recommendations: string[] = [];

  if (hasPassword && !checks.minimumLength) {
    recommendations.push(
      "Increase the password to at least 8 characters. Longer passwords are generally harder to guess or crack.",
    );
  }

  if (hasPassword && checks.minimumLength && !checks.recommendedLength) {
    recommendations.push(
      "Aim for at least 12 characters. Length is one of the most important factors in password strength.",
    );
  }

  if (hasPassword && checks.recommendedLength && !checks.strongLength) {
    recommendations.push(
      "For stronger protection, consider using 16 or more characters, especially for important accounts.",
    );
  }

  if (hasPassword && !checks.uppercase) {
    recommendations.push("Include at least one uppercase letter.");
  }

  if (hasPassword && !checks.lowercase) {
    recommendations.push("Include at least one lowercase letter.");
  }

  if (hasPassword && !checks.number) {
    recommendations.push("Include at least one number.");
  }

  if (hasPassword && !checks.special) {
    recommendations.push(
      "Include a special character such as !, @, #, $, %, or another symbol.",
    );
  }

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border p-6 shadow-sm">
      <h1 className="mb-3 text-3xl font-bold text-blue-900">
  Password Strength Checker
</h1>

<p id="password-warning" className="mb-4 text-gray-600">
  Test the structure of a sample password. Your entry is checked locally in
  your browser and is not sent to Cybersecurity Planet. For your privacy, do
  not enter a real password that you currently use.
</p>

      <label
        htmlFor="password-sample"
        className="mb-2 block font-semibold text-gray-800"
      >
        Sample password
      </label>

      <input
        id="password-sample"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Type a sample password"
        autoComplete="off"
        aria-describedby="password-warning password-strength"
        className="mb-4 w-full rounded-lg border px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
      />

      <div
        id="password-strength"
        className="rounded-xl bg-gray-50 p-5"
        aria-live="polite"
        aria-atomic="true"
      >
        <h3 className="text-xl font-bold text-blue-900">Your Result</h3>

        <p className="mt-3 text-lg font-semibold">Strength: {strength}</p>

        <p className="mt-3 leading-7 text-gray-700">{explanation}</p>
      </div>

      {hasPassword && (
        <>
          <div className="mt-6 rounded-xl border p-5">
            <h3 className="text-xl font-bold text-blue-900">
              Password Characteristics
            </h3>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                {checks.minimumLength ? "Pass:" : "Needs improvement:"} At least
                8 characters
              </li>
              <li>
                {checks.recommendedLength ? "Pass:" : "Needs improvement:"} At
                least 12 characters
              </li>
              <li>
                {checks.strongLength ? "Pass:" : "Optional improvement:"} 16 or
                more characters
              </li>
              <li>
                {checks.uppercase ? "Pass:" : "Needs improvement:"} Includes an
                uppercase letter
              </li>
              <li>
                {checks.lowercase ? "Pass:" : "Needs improvement:"} Includes a
                lowercase letter
              </li>
              <li>
                {checks.number ? "Pass:" : "Needs improvement:"} Includes a
                number
              </li>
              <li>
                {checks.special ? "Pass:" : "Needs improvement:"} Includes a
                special character
              </li>
            </ul>
          </div>

          {recommendations.length > 0 && (
            <div className="mt-6 rounded-xl border p-5">
              <h3 className="text-xl font-bold text-blue-900">
                Recommended Improvements
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-700">
                {recommendations.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </ul>
            </div>
          )}

          {strength === "Very Strong" && (
            <div className="mt-6 rounded-xl border p-5">
              <h3 className="text-xl font-bold text-blue-900">
                Strong Password Structure
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                This sample meets the strongest structural checks used by this
                tool. For real accounts, also make every password unique, avoid
                personal information, use a password manager when possible, and
                enable multi-factor authentication.
              </p>
            </div>
          )}
        </>
      )}

      <section className="mt-6 rounded-xl border bg-gray-50 p-5">
        <h3 className="text-xl font-bold text-blue-900">
          Learn More About Password Safety
        </h3>

        <p className="mt-3 text-gray-700">
          Learn why password length, uniqueness, password managers, and
          multi-factor authentication matter for account security.
        </p>

        <Link
          href="/learn/digital-safety/what-makes-a-strong-password"
          className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
        >
          Learn About Strong Passwords
        </Link>
      </section>

      <p className="mt-6 text-sm leading-6 text-gray-500">
        This tool provides an educational estimate based on password length and
        character variety. It does not test whether a password has been exposed
        in a data breach, reused on another account, or based on predictable
        words or personal information.
      </p>
    </section>
  );
}

