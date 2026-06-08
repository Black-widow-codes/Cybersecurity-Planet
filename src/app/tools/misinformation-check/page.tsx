"use client";

import { useState } from "react";

const questions = [
  {
    question: "Is the original source clearly identified?",
    options: [
      { label: "Yes", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    question: "Does the claim provide evidence or credible references?",
    options: [
      { label: "Yes", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    question: "Can the information be confirmed by other trusted sources?",
    options: [
      { label: "Yes", score: 2 },
      { label: "Not sure", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    question: "Does the message use fear, anger, or urgency to push you to react?",
    options: [
      { label: "No", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "Yes", score: 0 },
    ],
  },
  {
    question: "Does the headline or message seem exaggerated or too good to be true?",
    options: [
      { label: "No", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "Yes", score: 0 },
    ],
  },
];

export default function MisinformationCheckPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const completed = currentQuestion === questions.length;
  const maxScore = questions.length * 2;

  function handleAnswer(value: number) {
    setScore(score + value);
    setCurrentQuestion(currentQuestion + 1);
  }

  function getResultMessage() {
    if (score >= 8) {
      return "This information appears more credible, but still verify it before sharing.";
    }

    if (score >= 5) {
      return "This information has some warning signs. Review the source and evidence carefully.";
    }

    return "This information has strong misinformation warning signs. Do not share it until verified.";
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Misinformation Evaluation Tool
      </h1>

      <p className="mt-4 text-gray-700">
        Use this tool to think critically about headlines, social media posts,
        health claims, or online information before sharing.
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
            Credibility Score: {score} / {maxScore}
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