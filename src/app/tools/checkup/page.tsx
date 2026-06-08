"use client";

import { useState } from "react";

const questions = [
  {
    question: "Do you use multi-factor authentication?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    question: "Do you review app permissions?",
    options: [
      { label: "Regularly", score: 5 },
      { label: "Occasionally", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    question: "Do you verify information before sharing it?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
];

export default function CheckupPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const completed = currentQuestion === questions.length;

  function handleAnswer(value: number) {
    setScore(score + value);
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Digital Citizenship Checkup
      </h1>

      <p className="mt-4 text-gray-700">
        Answer a few questions to assess your digital habits.
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
            Your Score: {score} / 15
          </h2>

          <p className="mt-4 text-gray-700">
            This score gives you a basic snapshot of your digital citizenship habits.
          </p>
        </section>
      )}
    </main>
  );
}