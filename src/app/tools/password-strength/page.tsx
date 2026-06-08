"use client";

import { useState } from "react";

export default function PasswordStrengthPage() {
  const [password, setPassword] = useState("");

  const checks = {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;

  let strength = "Very Weak";

  if (score >= 5) {
    strength = "Strong";
  } else if (score >= 4) {
    strength = "Moderate";
  } else if (score >= 2) {
    strength = "Weak";
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Password Strength Advisor
      </h1>

      <p className="mt-4 text-gray-700">
        Check whether your password follows good security practices.
      </p>

      <div className="mt-8">
        <input
          type="password"
          placeholder="Enter a password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border p-4"
        />
      </div>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-blue-900">
          Strength: {strength}
        </h2>

        <ul className="mt-6 space-y-2">
          <li>{checks.length ? "✅" : "❌"} At least 12 characters</li>
          <li>{checks.uppercase ? "✅" : "❌"} Uppercase letter</li>
          <li>{checks.lowercase ? "✅" : "❌"} Lowercase letter</li>
          <li>{checks.number ? "✅" : "❌"} Number</li>
          <li>{checks.special ? "✅" : "❌"} Special character</li>
        </ul>
      </div>
    </main>
  );
}