"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Option = {
  label: string;
  score: number;
};

type Question = {
  id: string;
  question: string;
  recommendation: string;
  options: Option[];
};

type Answer = {
  questionId: string;
  score: number;
};

const questions: Question[] = [
  {
    id: "passwords",
    question: "Do you use unique passwords for important accounts?",
    recommendation:
      "Use a different strong password for each important account. A password manager can help you create and store unique passwords safely.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    id: "mfa",
    question: "Do you enable multi-factor authentication (MFA)?",
    recommendation:
      "Enable multi-factor authentication on important accounts such as email, banking, cloud storage, and social media whenever it is available.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    id: "privacy-settings",
    question: "Do you review privacy settings on social media and apps?",
    recommendation:
      "Review privacy settings regularly and check who can see your posts, profile information, location, contacts, and other personal details.",
    options: [
      { label: "Regularly", score: 5 },
      { label: "Occasionally", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    id: "personal-information",
    question: "Do you limit the personal information you share online?",
    recommendation:
      "Share only the personal information that is necessary. Avoid publicly exposing details such as your home address, phone number, daily routine, or sensitive personal information.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
  {
    id: "permissions",
    question: "Do you check app permissions before installing apps?",
    recommendation:
      "Review app permissions before and after installation. Remove access to your location, camera, microphone, contacts, or files when an app does not genuinely need it.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Never", score: 0 },
    ],
  },
];

export default function PrivacyCheckupClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);

  const completed = currentQuestion === questions.length;
  const maxScore = questions.length * 5;
  const score = answers.reduce((total, answer) => total + answer.score, 0);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    if (completed) {
      resultHeadingRef.current?.focus();
    } else {
      questionHeadingRef.current?.focus();
    }
  }, [currentQuestion, completed, hasStarted]);

  function handleAnswer(value: number) {
    const question = questions[currentQuestion];

    setHasStarted(true);

    setAnswers((currentAnswers) => [
      ...currentAnswers,
      {
        questionId: question.id,
        score: value,
      },
    ]);

    setCurrentQuestion((questionIndex) => questionIndex + 1);
  }

  function resetCheckup() {
    setAnswers([]);
    setHasStarted(true);
    setCurrentQuestion(0);
  }

  const weakerAnswers = answers.filter((answer) => answer.score < 5);
  const strongAnswers = answers.filter((answer) => answer.score === 5);

  const recommendations = weakerAnswers
    .map((answer) =>
      questions.find((question) => question.id === answer.questionId),
    )
    .filter((question): question is Question => Boolean(question));

  let privacyLevel = "Not completed";
  let resultExplanation =
    "Complete all questions to receive your privacy result.";

  if (completed) {
    if (score >= 20) {
      privacyLevel = "Strong Privacy Habits";
      resultExplanation =
        "Your answers show that you follow many important privacy practices. You are taking useful steps to control access to your accounts and personal information. Continue reviewing your settings and permissions because apps, services, and privacy risks can change over time.";
    } else if (score >= 12) {
      privacyLevel = "Developing Privacy Habits";
      resultExplanation =
        "You already use some helpful privacy practices, but there are several areas where your personal information may receive less protection than it should. Strengthening the habits identified below can reduce unnecessary exposure.";
    } else {
      privacyLevel = "Privacy Needs Attention";
      resultExplanation =
        "Several important privacy practices are missing or used inconsistently. This may make it easier for accounts, apps, advertisers, or other people to access more information about you than you intend. Start with the recommended actions below.";
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        Privacy Checkup
      </h1>

      <p className="mt-4 text-gray-700 transition-colors dark:text-slate-300">
        Review some of the everyday habits that can help you protect your
        accounts, personal information, and digital privacy.
      </p>

      {!completed ? (
        <section
          className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800"
          aria-labelledby="privacy-question"
        >
          <p className="text-sm text-gray-500 transition-colors dark:text-slate-400">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2
            ref={questionHeadingRef}
            id="privacy-question"
            tabIndex={-1}
            className="mt-3 text-2xl font-bold text-blue-900 transition-colors focus:outline-none dark:text-blue-200"
          >
            {questions[currentQuestion].question}
          </h2>

          <div className="mt-6 space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => handleAnswer(option.score)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-left text-gray-800 transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus-visible:outline-cyan-400"
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>
      ) : (
        <>
          <section
            className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors dark:border-slate-700 dark:bg-slate-800"
            aria-live="polite"
            aria-atomic="true"
          >
            <h2
              ref={resultHeadingRef}
              tabIndex={-1}
              className="text-2xl font-bold text-blue-900 transition-colors focus:outline-none dark:text-blue-200"
            >
              Your Privacy Result
            </h2>

            <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-slate-100">
              Score: {score} / {maxScore}
            </p>

            <p className="mt-2 font-semibold text-gray-900 dark:text-slate-100">
              Privacy Level: {privacyLevel}
            </p>

            <p className="mt-4 leading-7 text-gray-700 transition-colors dark:text-slate-300">
              {resultExplanation}
            </p>
          </section>

          {strongAnswers.length > 0 && (
            <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
              <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                What You Are Doing Well
              </h2>

              <p className="mt-3 text-gray-700 transition-colors dark:text-slate-300">
                You reported consistently following {strongAnswers.length} of
                the {questions.length} privacy practices in this checkup. Keep
                maintaining these habits and review them periodically.
              </p>
            </section>
          )}

          {recommendations.length > 0 && (
            <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
              <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                Recommended Privacy Actions
              </h2>

              <p className="mt-3 text-gray-700 transition-colors dark:text-slate-300">
                Focus on the areas where you answered Sometimes, Occasionally,
                or Never. These changes can give you greater control over your
                personal information.
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-700 transition-colors dark:text-slate-300">
                {recommendations.map((question) => (
                  <li key={question.id}>{question.recommendation}</li>
                ))}
              </ul>
            </section>
          )}

          {recommendations.length === 0 && (
            <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
              <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                Strong Privacy Foundation
              </h2>

              <p className="mt-3 leading-7 text-gray-700 transition-colors dark:text-slate-300">
                You reported consistently following all five privacy practices.
                Continue checking account security, privacy settings, app
                permissions, and the information you share as your digital
                habits and services change.
              </p>
            </section>
          )}

          <button
            type="button"
            onClick={resetCheckup}
            className="mt-6 rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:outline-cyan-400"
          >
            Try Again
          </button>
        </>
      )}

      <section className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Strengthen Your Privacy Knowledge
        </h2>

        <p className="mt-3 text-gray-700 transition-colors dark:text-slate-300">
          Explore lessons about personal data, digital consent, online tracking,
          privacy rights, data protection, and digital surveillance.
        </p>

        <Link
          href="/learn/privacy-rights"
          className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:outline-cyan-400"
        >
          Explore Privacy &amp; Digital Rights Lessons
        </Link>
      </section>

      <p className="mt-6 text-sm leading-6 text-gray-500 transition-colors dark:text-slate-400">
        This checkup is an educational self-assessment rather than a complete
        privacy or security audit. Your actual privacy exposure also depends on
        the services you use, their data practices, your devices, and the
        information already collected about you.
      </p>
    </div>
  );
}