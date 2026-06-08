"use client";

import { useState } from "react";

const questions = [
  {
    question: "Does the health claim come from a qualified medical or public health source?",
    options: [
      { label: "Yes", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    question: "Does the claim provide evidence from credible research or health organizations?",
    options: [
      { label: "Yes", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    question: "Does it promise a miracle cure or guaranteed result?",
    options: [
      { label: "No", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "Yes", score: 0 },
    ],
  },
  {
    question: "Does it encourage you to ignore professional medical advice?",
    options: [
      { label: "No", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "Yes", score: 0 },
    ],
  },
];

export default function HealthMisinformationCheckPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const completed = currentQuestion === questions.length;
  const maxScore = questions.length * 2;

  function handleAnswer(value: number) {
    setScore(score + value);
    setCurrentQuestion(currentQuestion + 1);
  }

  function getResultMessage() {
    if (score >= 7) {
      return "This health information appears more credible, but you should still confirm it with qualified health professionals or trusted public health sources.";
    }

    if (score >= 4) {
      return "This health information has some warning signs. Review the source, evidence, and claims carefully.";
    }

    return "This health information has strong misinformation warning signs. Do not rely on it without checking trusted medical or public health sources.";
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Health Misinformation Check
      </h1>

      <p className="mt-4 text-gray-700">
        Use this tool to evaluate online health claims before trusting or sharing them.
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
            Health Claim Score: {score} / {maxScore}
          </h2>

          <p className="mt-4 text-gray-700">{getResultMessage()}</p>

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