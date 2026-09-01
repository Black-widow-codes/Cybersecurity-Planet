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
    id: "think-before-sharing",
    question:
      "Do you pause and think before posting or sharing something online?",
    recommendation:
      "Before posting or sharing, consider whether the content is accurate, necessary, respectful, and something you would be comfortable having connected to your name later.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    id: "check-information",
    question:
      "Do you check whether information is credible before sharing it?",
    recommendation:
      "Check the source, evidence, date, author, and other reliable sources before sharing important information. Avoid passing along claims simply because they are popular or emotionally convincing.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    id: "privacy-settings",
    question:
      "Do you review privacy settings on your apps and social media accounts?",
    recommendation:
      "Review your privacy settings regularly and decide who can see your posts, profile details, location, contacts, and other personal information.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    id: "digital-footprint",
    question:
      "Do you think about how your online activity affects your digital footprint?",
    recommendation:
      "Remember that posts, comments, images, searches, and account activity can contribute to your digital footprint. Think about the possible long-term effects before sharing publicly.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    id: "respectful-communication",
    question:
      "Do you communicate respectfully during online disagreements?",
    recommendation:
      "Disagree with ideas without attacking people. Avoid insults, harassment, threats, or posting in anger, and step away from conversations that are becoming harmful.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
  {
    id: "digital-wellbeing",
    question:
      "Do you use technology in ways that support your wellbeing and responsibilities?",
    recommendation:
      "Pay attention to how technology affects your sleep, concentration, relationships, school, work, and other responsibilities. Set boundaries when online activity begins interfering with your wellbeing.",
    options: [
      { label: "Always", score: 5 },
      { label: "Sometimes", score: 3 },
      { label: "Rarely", score: 0 },
    ],
  },
];

export default function DigitalCitizenshipCheckupClient() {
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

  const strongAnswers = answers.filter((answer) => answer.score === 5);
  const weakerAnswers = answers.filter((answer) => answer.score < 5);

  const recommendations = weakerAnswers
    .map((answer) =>
      questions.find((question) => question.id === answer.questionId),
    )
    .filter((question): question is Question => Boolean(question));

  let citizenshipLevel = "Not completed";
  let resultExplanation =
    "Complete all questions to receive your digital citizenship result.";

  if (completed) {
    if (score >= 25) {
      citizenshipLevel = "Strong Digital Citizenship Habits";
      resultExplanation =
        "Your answers show that you regularly make thoughtful, responsible, and respectful choices online. You demonstrate awareness of information quality, privacy, digital footprints, communication, and digital wellbeing. Continue reviewing these habits as technology and online spaces change.";
    } else if (score >= 15) {
      citizenshipLevel = "Developing Digital Citizenship Habits";
      resultExplanation =
        "You already demonstrate several positive digital habits, but some areas are inconsistent. Strengthening the habits identified below can help you become a more informed, responsible, and intentional participant in digital spaces.";
    } else {
      citizenshipLevel = "Digital Citizenship Needs Attention";
      resultExplanation =
        "Several important digital citizenship habits are missing or used infrequently. This can affect your privacy, reputation, relationships, information choices, and wellbeing. Start with the recommended actions below and improve one habit at a time.";
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        Digital Citizenship Checkup
      </h1>

      <p className="mt-4 text-gray-700 transition-colors dark:text-slate-300">
        Review how you share information, communicate, protect your privacy,
        manage your digital footprint, and use technology responsibly.
      </p>

      {!completed ? (
        <section
          className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800"
          aria-labelledby="citizenship-question"
        >
          <p className="text-sm text-gray-500 transition-colors dark:text-slate-400">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2
            ref={questionHeadingRef}
            id="citizenship-question"
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
              Your Digital Citizenship Result
            </h2>

            <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-slate-100">
              Score: {score} / {maxScore}
            </p>

            <p className="mt-2 font-semibold text-gray-900 dark:text-slate-100">
              Level: {citizenshipLevel}
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
                the {questions.length} digital citizenship practices in this
                checkup. Continue maintaining these habits in your everyday
                online activity.
              </p>
            </section>
          )}

          {recommendations.length > 0 && (
            <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
              <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                Recommended Actions
              </h2>

              <p className="mt-3 text-gray-700 transition-colors dark:text-slate-300">
                Focus on the areas where you answered Sometimes or Rarely.
                Improving these habits can help you participate online more
                responsibly and intentionally.
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
                Strong Digital Citizenship Foundation
              </h2>

              <p className="mt-3 leading-7 text-gray-700 transition-colors dark:text-slate-300">
                You reported consistently following all six practices in this
                checkup. Keep evaluating information carefully, communicating
                respectfully, protecting your privacy, and maintaining healthy
                technology habits.
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
          Build Your Digital Citizenship Skills
        </h2>

        <p className="mt-3 text-gray-700 transition-colors dark:text-slate-300">
          Explore lessons about responsible sharing, digital footprints,
          respectful communication, information evaluation, and digital
          wellbeing.
        </p>

        <Link
          href="/learn/digital-citizenship"
          className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:outline-cyan-400"
        >
          Explore Digital Citizenship Lessons
        </Link>
      </section>

      <p className="mt-6 text-sm leading-6 text-gray-500 transition-colors dark:text-slate-400">
        This checkup is an educational self-assessment rather than a formal
        measure of digital citizenship. Responsible participation online also
        depends on context, judgment, changing technology, and the communities
        and services you use.
      </p>
    </div>
  );
}