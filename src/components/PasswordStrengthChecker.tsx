"use client";

import { useState } from "react";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");

  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;

  let strength = "Very Weak";

  if (score === 2) strength = "Weak";
  if (score === 3) strength = "Medium";
  if (score === 4) strength = "Strong";
  if (score === 5) strength = "Very Strong";

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-3">Password Strength Checker</h2>

      <p className="mb-4 text-gray-600">
        Test how strong your password is. Do not enter your real password.
      </p>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Type a sample password"
        className="w-full rounded-lg border px-4 py-3 mb-4"
      />

      <div className="mb-4">
        <p className="font-semibold">
          Strength: <span>{strength}</span>
        </p>
      </div>

      <ul className="space-y-2 text-sm">
        <li>{checks.length ? "✅" : "❌"} At least 8 characters</li>
        <li>{checks.uppercase ? "✅" : "❌"} Includes uppercase letter</li>
        <li>{checks.lowercase ? "✅" : "❌"} Includes lowercase letter</li>
        <li>{checks.number ? "✅" : "❌"} Includes a number</li>
        <li>{checks.special ? "✅" : "❌"} Includes a special character</li>
      </ul>
    </section>
  );
}