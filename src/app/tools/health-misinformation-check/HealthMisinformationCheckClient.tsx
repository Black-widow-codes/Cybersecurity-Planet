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
    id: "qualified-source",
    question:
      "Does the health claim come from a qualified medical or public health source?",
    recommendation:
      "Check who created the health information and whether they have relevant medical, scientific, or public health expertise. Be cautious with anonymous posts, influencers, testimonials, or sources whose qualifications cannot be verified.",
    options: [
      { label: "Yes", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "evidence",
    question:
      "Does the claim provide evidence from credible research or health organizations?",
    recommendation:
      "Look for evidence from reputable medical organizations, public health agencies, peer-reviewed research, or other reliable scientific sources. A confident claim is not the same as evidence.",
    options: [
      { label: "Yes", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "miracle-claims",
    question: "Does it promise a miracle cure or guaranteed result?",
    recommendation:
      "Be skeptical of claims that promise guaranteed cures, instant results, secret treatments, or one solution that supposedly works for everyone. Legitimate health information usually explains limitations, risks, and uncertainty.",
    options: [
      { label: "No", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "Yes", score: 0 },
    ],
  },
  {
    id: "ignore-medical-advice",
    question: "Does it encourage you to ignore professional medical advice?",
    recommendation:
      "Treat claims that tell you to stop treatment, avoid healthcare professionals, or ignore medical advice with serious caution. Decisions about diagnosis, medication, or treatment should be discussed with a qualified healthcare professional.",
    options: [
      { label: "No", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "Yes", score: 0 },
    ],
  },
];

export default function HealthMisinformationCheckClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);

  const completed = currentQuestion === questions.length;
  const maxScore = questions.length * 2;
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

  const strongAnswers = answers.filter((answer) => answer.score === 2);
  const warningAnswers = answers.filter((answer) => answer.score < 2);

  const recommendations = warningAnswers
    .map((answer) =>
      questions.find((question) => question.id === answer.questionId),
    )
    .filter((question): question is Question => Boolean(question));

  let credibilityLevel = "Not completed";
  let resultExplanation =
    "Complete all questions to receive your health-information evaluation.";

  if (completed) {
    if (score >= 7) {
      credibilityLevel = "Fewer Warning Signs";
      resultExplanation =
        "Your answers suggest that the health information shows several positive credibility signals. However, this result does not prove that the claim is medically accurate or appropriate for you. Important health information should still be confirmed through qualified healthcare professionals or trusted public health sources.";
    } else if (score >= 4) {
      credibilityLevel = "Several Warning Signs";
      resultExplanation =
        "The health claim shows a mixture of positive signals and areas that need closer examination. Review the source, supporting evidence, promises being made, and whether the information conflicts with professional medical guidance before relying on it.";
    } else {
      credibilityLevel = "Strong Warning Signs";
      resultExplanation =
        "Your answers identified several warning signs commonly associated with unreliable or misleading health information. Do not use this claim as the basis for important health decisions until it has been checked against trustworthy medical evidence and qualified professional advice.";
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Health Misinformation Check
      </h1>

      <p className="mt-4 text-gray-700">
        Use this tool to examine the source, evidence, promises, and medical
        advice behind an online health claim before trusting or sharing it.
      </p>

      {!completed ? (
        <section
          className="mt-10 rounded-xl border bg-white p-6 shadow-sm"
          aria-labelledby="health-misinformation-question"
        >
          <p className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2
            ref={questionHeadingRef}
            id="health-misinformation-question"
            tabIndex={-1}
            className="mt-3 text-2xl font-bold text-blue-900 focus:outline-none"
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
        <>
          <section
            className="mt-10 rounded-xl bg-gray-50 p-6"
            aria-live="polite"
            aria-atomic="true"
          >
            <h2
              ref={resultHeadingRef}
              tabIndex={-1}
              className="text-2xl font-bold text-blue-900 focus:outline-none"
            >
              Your Health Information Result
            </h2>

            <p className="mt-4 text-lg font-semibold">
              Health Claim Score: {score} / {maxScore}
            </p>

            <p className="mt-2 font-semibold">
              Evaluation: {credibilityLevel}
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              {resultExplanation}
            </p>
          </section>

          {strongAnswers.length > 0 && (
            <section className="mt-6 rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-blue-900">
                Positive Credibility Signals
              </h2>

              <p className="mt-3 text-gray-700">
                You identified {strongAnswers.length} of the {questions.length}{" "}
                stronger credibility signals covered by this check. These are
                useful indicators, but they do not confirm that the health claim
                is medically correct.
              </p>
            </section>
          )}

          {recommendations.length > 0 && (
            <section className="mt-6 rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-blue-900">
                What to Check Next
              </h2>

              <p className="mt-3 text-gray-700">
                Review the areas where the claim received a partial or weak
                score before relying on it or sharing it with someone else.
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-700">
                {recommendations.map((question) => (
                  <li key={question.id}>{question.recommendation}</li>
                ))}
              </ul>
            </section>
          )}

          {recommendations.length === 0 && (
            <section className="mt-6 rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold text-blue-900">
                Stronger Health Information Signals
              </h2>

              <p className="mt-3 leading-7 text-gray-700">
                The claim received the strongest response across all four
                checks. Even so, this result should not be treated as medical
                approval. Confirm important health information with trusted
                health organizations or a qualified healthcare professional.
              </p>
            </section>
          )}

          <button
            type="button"
            onClick={resetCheckup}
            className="mt-6 rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Evaluate Another Health Claim
          </button>
        </>
      )}

      <section className="mt-10 rounded-xl border bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Learn More About Digital Health
        </h2>

        <p className="mt-3 text-gray-700">
          Explore lessons about evaluating health information, telehealth,
          health data privacy, wearable devices, AI in healthcare, and health
          misinformation.
        </p>

        <Link
          href="/learn/digital-health"
          className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Explore Digital Health Lessons
        </Link>
      </section>

      <p className="mt-6 text-sm leading-6 text-gray-500">
        This tool is an educational checklist, not a medical assessment,
        diagnosis, or fact-checking service. Do not use its score to make
        decisions about medication, treatment, diagnosis, or urgent healthcare.
        Confirm important health information with qualified healthcare
        professionals or trusted public health sources.
      </p>
    </div>
  );
}