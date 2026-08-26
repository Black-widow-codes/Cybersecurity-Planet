"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    question:
      "Do you pause and think before posting or sharing something online?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    question:
      "Do you check whether information is credible before sharing it?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    question:
      "Do you review privacy settings on your apps and social media accounts?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    question:
      "Do you think about how your online activity affects your digital footprint?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    question:
      "Do you communicate respectfully during online disagreements?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    question:
      "Do you use technology in ways that support your wellbeing and responsibilities?",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
];

export default function DigitalCitizenshipCheckupPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const completed = currentQuestion === questions.length;
  const maxScore = questions.length * 5;

  function handleAnswer(value: number) {
    setScore((currentScore) => currentScore + value);
    setCurrentQuestion((question) => question + 1);
  }

  function getResult() {
    if (score >= 25) {
      return "You show strong digital citizenship habits. Keep making thoughtful, respectful, and responsible choices online.";
    }

    if (score >= 15) {
      return "You have several good digital habits, but there are still areas where you can become a more responsible and informed digital citizen.";
    }

    return "Your digital citizenship habits could use more attention. Focus on privacy, respectful communication, responsible sharing, and checking information before trusting it.";
  }

  function resetCheckup() {
    setCurrentQuestion(0);
    setScore(0);
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Digital Citizenship Checkup
      </h1>

      <p className="mt-4 text-gray-700">
        Check your everyday digital habits and learn how responsibly you
        participate in online spaces.
      </p>

      {!completed ? (
        <section
          className="mt-10 rounded-xl border bg-white p-6 shadow-sm"
          aria-labelledby="citizenship-question"
        >
          <p className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2
            id="citizenship-question"
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
            Digital Citizenship Score: {score} / {maxScore}
          </h2>

          <p className="mt-4 text-gray-700">{getResult()}</p>

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
          Build Your Digital Citizenship Skills
        </h2>

        <p className="mt-3 text-gray-700">
          Explore lessons about responsible sharing, digital footprints,
          respectful communication, information evaluation, and digital
          wellbeing.
        </p>

        <Link
          href="/learn/digital-citizenship"
          className="mt-5 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Explore Digital Citizenship Lessons
        </Link>
      </section>
    </main>
  );
}