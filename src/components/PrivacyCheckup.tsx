"use client";

import { useState } from "react";

export default function PrivacyCheckup() {
  const [score, setScore] = useState<number | null>(null);

  const questions = [
    "I review my social media privacy settings.",
    "I use different passwords for important accounts.",
    "I limit the personal information I share online.",
    "I check app permissions before installing apps.",
    "I use multi-factor authentication where available.",
  ];

  const [answers, setAnswers] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const handleChange = (index: number) => {
    const updated = [...answers];
    updated[index] = !updated[index];
    setAnswers(updated);
  };

  const calculateScore = () => {
    const yesAnswers = answers.filter(Boolean).length;
    setScore(Math.round((yesAnswers / questions.length) * 100));
  };

  return (
    <section className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-blue-900">
        Privacy Checkup
      </h2>

      <p className="mt-3 text-gray-600">
        Review your privacy habits and receive a simple privacy awareness score.
      </p>

      <div className="mt-6 space-y-4">
        {questions.map((question, index) => (
          <label
            key={index}
            className="flex items-center gap-3 rounded-lg border p-4"
          >
            <input
              type="checkbox"
              checked={answers[index]}
              onChange={() => handleChange(index)}
            />
            <span>{question}</span>
          </label>
        ))}
      </div>

      <button
        onClick={calculateScore}
        className="mt-6 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white"
      >
        Calculate Privacy Score
      </button>

      {score !== null && (
        <div className="mt-6 rounded-lg bg-gray-50 p-4">
          <h3 className="font-bold text-blue-900">
            Privacy Score: {score}/100
          </h3>
        </div>
      )}
    </section>
  );
}