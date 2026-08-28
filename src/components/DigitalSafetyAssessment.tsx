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
    recommendation:
      "Use a different strong password for each important account. A password manager can help you create and store them safely.",
  },
  {
    id: "mfa",
    question: "Do you use multi-factor authentication when available?",
    recommendation:
      "Turn on multi-factor authentication for important accounts such as email, banking, cloud storage, and social media.",
  },
  {
    id: "updates",
    question: "Do you regularly update your phone, computer, and apps?",
    recommendation:
      "Install security updates promptly and enable automatic updates when possible. Updates often fix known security weaknesses.",
  },
  {
    id: "links",
    question: "Do you avoid clicking suspicious links or unknown attachments?",
    recommendation:
      "Pause before opening unexpected links or attachments. Check the sender, web address, and message carefully before taking action.",
  },
  {
    id: "privacy",
    question: "Do you review privacy settings on your social media accounts?",
    recommendation:
      "Review who can see your posts, profile information, location, and contact details. Limit information that does not need to be public.",
  },
];

export default function DigitalSafetyAssessment() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const handleAnswer = (id: string, value: boolean) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [id]: value,
    }));
  };

  const answeredCount = Object.keys(answers).length;
  const completed = answeredCount === questions.length;

  const yesCount = Object.values(answers).filter(Boolean).length;
  const score = Math.round((yesCount / questions.length) * 100);

  const recommendations = questions.filter(
    (question) => answers[question.id] === false,
  );

  const strongHabits = questions.filter(
    (question) => answers[question.id] === true,
  );

  let riskLevel = "Not completed";
  let resultExplanation =
    "Answer all five questions to receive your digital safety result.";

  if (completed) {
    if (score >= 80) {
      riskLevel = "Low Risk";
      resultExplanation =
        "Your answers show that you already follow most important digital safety practices. Your overall exposure to common online risks is lower, but maintaining these habits and improving any remaining weak areas is still important.";
    } else if (score >= 50) {
      riskLevel = "Moderate Risk";
      resultExplanation =
        "You have several good digital safety habits, but some gaps could still expose your accounts, devices, or personal information to unnecessary risk. Improving the areas identified below can significantly strengthen your protection.";
    } else {
      riskLevel = "High Risk";
      resultExplanation =
        "Several important digital safety practices are currently missing. This may leave your accounts, devices, and personal information more vulnerable to threats such as phishing, account theft, malware, and privacy loss. Start with the recommended actions below.";
    }
  }

  return (
    <section className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-blue-900">
        Digital Safety Assessment
      </h2>

      <p className="mt-3 text-gray-600">
        Answer these questions to review some of the habits that help protect
        your accounts, devices, and personal information online.
      </p>

      <div className="mt-8 space-y-6">
        {questions.map((item) => (
          <fieldset key={item.id} className="rounded-xl border p-4">
            <legend className="px-1 font-semibold text-gray-800">
              {item.question}
            </legend>

            <div className="mt-4 flex gap-3">
              <button
                type="button"
                aria-pressed={answers[item.id] === true}
                onClick={() => handleAnswer(item.id, true)}
                className={`rounded-lg px-4 py-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 ${
                  answers[item.id] === true
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                Yes
              </button>

              <button
                type="button"
                aria-pressed={answers[item.id] === false}
                onClick={() => handleAnswer(item.id, false)}
                className={`rounded-lg px-4 py-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 ${
                  answers[item.id] === false
                    ? "bg-cyan-600 text-white"
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
        <h3 className="text-xl font-bold text-blue-900">Your Result</h3>

        {!completed ? (
          <p className="mt-3 text-gray-700">
            You have answered {answeredCount} of {questions.length} questions.
            Complete the assessment to receive your score and recommendations.
          </p>
        ) : (
          <>
            <p className="mt-3 text-lg font-semibold">Score: {score}/100</p>

            <p className="mt-2 font-semibold">Risk Level: {riskLevel}</p>

            <p className="mt-3 leading-7 text-gray-700">{resultExplanation}</p>
          </>
        )}
      </div>

      {completed && strongHabits.length > 0 && (
        <div className="mt-6 rounded-xl border p-5">
          <h3 className="text-xl font-bold text-blue-900">
            What You Are Doing Well
          </h3>

          <p className="mt-3 text-gray-700">
            You reported following {strongHabits.length} of the{" "}
            {questions.length} safety practices in this assessment. Continue
            maintaining these habits as part of your regular online routine.
          </p>
        </div>
      )}

      {completed && recommendations.length > 0 && (
        <div className="mt-6 rounded-xl border p-5">
          <h3 className="text-xl font-bold text-blue-900">
            Recommended Actions
          </h3>

          <p className="mt-3 text-gray-700">
            Focus first on the areas where you answered no. These changes can
            reduce common risks and strengthen your everyday digital safety.
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-700">
            {recommendations.map((item) => (
              <li key={item.id}>{item.recommendation}</li>
            ))}
          </ul>
        </div>
      )}

      {completed && recommendations.length === 0 && (
        <div className="mt-6 rounded-xl border p-5">
          <h3 className="text-xl font-bold text-blue-900">
            Excellent Safety Habits
          </h3>

          <p className="mt-3 leading-7 text-gray-700">
            You reported following all five safety practices in this assessment.
            Keep reviewing your account security, privacy settings, software
            updates, and online behaviour regularly because digital risks
            continue to change.
          </p>
        </div>
      )}

      <p className="mt-6 text-sm leading-6 text-gray-500">
        This assessment is an educational guide, not a complete security audit.
        Your actual level of risk can also depend on your devices, accounts,
        online activity, and the security practices of the services you use.
      </p>
    </section>
  );
}
