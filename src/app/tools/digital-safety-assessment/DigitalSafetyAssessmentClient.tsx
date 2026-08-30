"use client";

import { useState } from "react";

type Question = {
  id: string;
  question: string;
  recommendation: string;
};

const questions: Question[] = [
  {
    id: "passwords",
    question: "Do you use strong and unique passwords for your accounts?",
    recommendation: "Use different strong passwords for important accounts.",
  },
  {
    id: "mfa",
    question: "Do you use multi-factor authentication when available?",
    recommendation:
      "Turn on multi-factor authentication for email, banking, and social media.",
  },
  {
    id: "updates",
    question: "Do you regularly update your phone, computer, and apps?",
    recommendation:
      "Keep your devices and apps updated to fix security weaknesses.",
  },
  {
    id: "links",
    question: "Do you avoid clicking suspicious links or unknown attachments?",
    recommendation:
      "Be careful with links in emails, texts, and social media messages.",
  },
  {
    id: "privacy",
    question: "Do you review privacy settings on your social media accounts?",
    recommendation:
      "Check who can see your posts, profile, location, and contact information.",
  },
];

export default function DigitalSafetyAssessmentClient() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  function handleAnswer(id: string, value: boolean) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [id]: value,
    }));
  }

  const answeredCount = Object.keys(answers).length;
  const yesCount = Object.values(answers).filter(Boolean).length;
  const completed = answeredCount === questions.length;
  const score = Math.round((yesCount / questions.length) * 100);

  let riskLevel = "Not completed";
  let message = "Answer all questions to get your digital safety score.";

  if (completed) {
    if (score >= 80) {
      riskLevel = "Low Risk";
      message = "You have strong digital safety habits. Keep improving.";
    } else if (score >= 50) {
      riskLevel = "Moderate Risk";
      message = "You have some good habits, but there are areas to improve.";
    } else {
      riskLevel = "High Risk";
      message =
        "Your digital safety habits need attention. Start with the recommendations below.";
    }
  }

  const recommendations = questions.filter(
    (question) => answers[question.id] === false
  );

  return (
    <section
      className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 shadow-sm"
      aria-labelledby="digital-safety-assessment-title"
    >
      <h1
        id="digital-safety-assessment-title"
        className="text-3xl font-bold text-blue-900"
      >
        Digital Safety Assessment
      </h1>

      <p className="mt-3 text-gray-600">
        Answer these simple questions to check your online safety habits.
      </p>

      <div className="mt-8 space-y-6">
        {questions.map((item) => (
          <fieldset key={item.id} className="rounded-xl border p-4">
            <legend className="font-semibold text-gray-800">
              {item.question}
            </legend>

            <div className="mt-4 flex gap-3">
              <button
                type="button"
                aria-pressed={answers[item.id] === true}
                onClick={() => handleAnswer(item.id, true)}
                className={`rounded-lg px-4 py-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  answers[item.id] === true
                    ? "bg-cyan-700 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                Yes
              </button>

              <button
                type="button"
                aria-pressed={answers[item.id] === false}
                onClick={() => handleAnswer(item.id, false)}
                className={`rounded-lg px-4 py-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  answers[item.id] === false
                    ? "bg-cyan-700 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                No
              </button>
            </div>
          </fieldset>
        ))}
      </div>

      <div
        className="mt-8 rounded-xl bg-gray-50 p-5"
        aria-live="polite"
        aria-atomic="true"
      >
        <h2 className="text-xl font-bold text-blue-900">Your Result</h2>

        <p className="mt-3 text-lg font-semibold">Score: {score}/100</p>

        <p className="mt-2 font-semibold">Risk Level: {riskLevel}</p>

        <p className="mt-2 text-gray-700">{message}</p>
      </div>

      {completed && recommendations.length > 0 && (
        <div className="mt-6 rounded-xl border p-5">
          <h2 className="text-xl font-bold text-blue-900">
            Recommended Actions
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            {recommendations.map((item) => (
              <li key={item.id}>{item.recommendation}</li>
            ))}
          </ul>
        </div>
      )}

      {completed && recommendations.length === 0 && (
        <div className="mt-6 rounded-xl border p-5">
          <h2 className="text-xl font-bold text-blue-900">
            Excellent Safety Habits
          </h2>

          <p className="mt-3 text-gray-700">
            You answered yes to all safety questions. Continue reviewing your
            accounts regularly and keep your security practices up to date.
          </p>
        </div>
      )}
    </section>
  );
}