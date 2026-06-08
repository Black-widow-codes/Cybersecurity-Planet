"use client";

import { useState } from "react";

const questions = [
  {
    question: "Do you use unique passwords for important accounts?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    question: "Do you enable multi-factor authentication (MFA)?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    question: "Do you review privacy settings on social media and apps?",
    options: [
      { label: "Regularly", score: 5 },
      { label: "Occasionally", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    question: "Do you limit the personal information you share online?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    question: "Do you check app permissions before installing apps?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
];

export default function PrivacyCheckupPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const completed = currentQuestion === questions.length;
  const maxScore = questions.length * 5;

  function handleAnswer(value: number) {
    setScore(score + value);
    setCurrentQuestion(currentQuestion + 1);
  }

  function getResult() {
    if (score >= 20) {
      return "Excellent privacy habits. Keep reviewing your settings and staying informed.";
    }

    if (score >= 12) {
      return "Good privacy awareness, but there are opportunities to strengthen your protection.";
    }

    return "Your privacy may be at risk. Consider improving passwords, permissions, and privacy settings.";
    }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Privacy Checkup
      </h1>

      <p className="mt-4 text-gray-700">
        Assess your privacy habits and discover ways to better protect your personal information.
      </p>

      {!completed ? (
        <section className="mt-10 rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-blue-900">
            {questions[currentQuestion].question}
          </h2>

          <div className="mt-6 space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAnswer(option.score)}
                className="w-full rounded-lg border px-4 py-3 text-left hover:bg-gray-50"
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-10 rounded-xl bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            Privacy Score: {score} / {maxScore}
          </h2>

          <p className="mt-4 text-gray-700">
            {getResult()}
          </p>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
            }}
            className="mt-6 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white"
          >
            Try Again
          </button>
        </section>
      )}
    </main>
  );
}