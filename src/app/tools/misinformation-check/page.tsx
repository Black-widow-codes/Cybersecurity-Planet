"use client";

import Link from "next/link";
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
    question:
      "Does the headline or message seem exaggerated or too good to be true?",
    options: [
      { label: "No", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "Yes", score: 0 },
    ],
  },
  {
    question:
      "Is the date and context of the information clear and current?",
    options: [
      { label: "Yes", score: 2 },
      { label: "Not sure", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    question:
      "Have you considered whether the image, video, audio, or text could be AI-generated or manipulated?",
    options: [
      { label: "Yes", score: 2 },
      { label: "Not sure", score: 1 },
      { label: "No", score: 0 },
    ],
  },
];

export default function MisinformationCheckPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const completed = currentQuestion === questions.length;
  const maxScore = questions.length * 2;

  function handleAnswer(value: number) {
    setScore((currentScore) => currentScore + value);
    setCurrentQuestion((question) => question + 1);
  }

  function getResultMessage() {
    if (score >= 11) {
      return "This information appears more credible, but still verify it before sharing.";
    }

    if (score >= 7) {
      return "This information has some warning signs. Review the source and evidence carefully.";
    }

    return "This information has strong misinformation warning signs. Do not share it until verified.";
  }

  function resetCheckup() {
    setCurrentQuestion(0);
    setScore(0);
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
        <section
          className="mt-10 rounded-xl border bg-white p-6 shadow-sm"
          aria-labelledby="misinformation-question"
        >
          <p className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2
            id="misinformation-question"
            className="mt-3 text-2xl font-bold text-blue-900"
          >
            {questions[currentQuestion].question}
          </h2>

          <div className="mt-6 space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => handleAnswer(option.score)}
                className="w-full rounded-lg border px-4 py-3 text-left hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section
          className="mt-10 rounded-xl bg-gray-50 p-6"
          aria-live="polite"
        >
          <h2 className="text-2xl font-bold text-blue-900">
            Credibility Score: {score} / {maxScore}
          </h2>

          <p className="mt-4 text-gray-700">{getResultMessage()}</p>

          <button
            type="button"
            onClick={resetCheckup}
            className="mt-6 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Try Again
          </button>
        </section>
      )}

      <section className="mt-10 rounded-xl border bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Strengthen Your Media Literacy
        </h2>

        <p className="mt-3 text-gray-700">
          Explore lessons about misinformation, disinformation, fact-checking,
          evaluating online sources, manipulated content, and AI-generated
          media.
        </p>

        <Link
          href="/learn/media-literacy"
          className="mt-5 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Explore Media Literacy Lessons
        </Link>
      </section>
    </main>
  );
}