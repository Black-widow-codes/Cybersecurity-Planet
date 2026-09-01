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
    id: "source",
    question: "Is the original source clearly identified?",
    recommendation:
      "Find the original source before trusting or sharing the claim. Be cautious when information is copied, reposted, cropped, or presented without a clear source.",
    options: [
      { label: "Yes", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "evidence",
    question: "Does the claim provide evidence or credible references?",
    recommendation:
      "Look for evidence that can be checked independently. Reliable claims should point to credible sources, documents, data, experts, or other verifiable information.",
    options: [
      { label: "Yes", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "confirmation",
    question: "Can the information be confirmed by other trusted sources?",
    recommendation:
      "Check whether other trustworthy and independent sources report the same information. A major claim supported by only one questionable source deserves extra caution.",
    options: [
      { label: "Yes", score: 2 },
      { label: "Not sure", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "emotion",
    question:
      "Does the message use fear, anger, or urgency to push you to react?",
    recommendation:
      "Pause when content tries to make you angry, frightened, shocked, or rushed. Emotional pressure can reduce careful thinking and is often used to increase clicks, shares, or impulsive reactions.",
    options: [
      { label: "No", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "Yes", score: 0 },
    ],
  },
  {
    id: "exaggeration",
    question:
      "Does the headline or message seem exaggerated or too good to be true?",
    recommendation:
      "Treat sensational headlines, absolute claims, miracle solutions, and unusually dramatic promises with caution. Read beyond the headline and look for evidence.",
    options: [
      { label: "No", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "Yes", score: 0 },
    ],
  },
  {
    id: "context",
    question: "Is the date and context of the information clear and current?",
    recommendation:
      "Check when the information was created and whether it is being presented in the correct context. Old stories, images, quotes, or statistics can become misleading when reused as if they were current.",
    options: [
      { label: "Yes", score: 2 },
      { label: "Not sure", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "manipulation",
    question:
      "Have you considered whether the image, video, audio, or text could be AI-generated or manipulated?",
    recommendation:
      "Consider whether digital content may have been altered, generated, edited, or taken out of context. Look for the original source and independent confirmation rather than relying only on appearance.",
    options: [
      { label: "Yes", score: 2 },
      { label: "Not sure", score: 1 },
      { label: "No", score: 0 },
    ],
  },
];

export default function MisinformationCheckClient() {
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
    "Complete all questions to receive your credibility result.";

  if (completed) {
    if (score >= 11) {
      credibilityLevel = "Fewer Warning Signs";
      resultExplanation =
        "Your answers suggest that the information shows several characteristics associated with more credible content. However, this score does not prove that the claim is true. Important information should still be checked against reliable and independent sources before you trust or share it.";
    } else if (score >= 7) {
      credibilityLevel = "Several Warning Signs";
      resultExplanation =
        "The information shows a mixture of positive signals and warning signs. Some parts may be difficult to verify, lack context, rely on emotional language, or need stronger evidence. Review the areas identified below before deciding whether the claim is trustworthy.";
    } else {
      credibilityLevel = "Strong Warning Signs";
      resultExplanation =
        "Your answers identified several signs commonly associated with unreliable or misleading information. Do not rely on or share the claim until you can verify its source, evidence, context, and supporting information independently.";
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        Misinformation Evaluation Tool
      </h1>

      <p className="mt-4 text-gray-700 transition-colors dark:text-slate-300">
        Use this tool to examine the source, evidence, context, emotional
        language, and possible manipulation behind online information before
        trusting or sharing it.
      </p>

      {!completed ? (
        <section
          className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800"
          aria-labelledby="misinformation-question"
        >
          <p className="text-sm text-gray-500 transition-colors dark:text-slate-400">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2
            ref={questionHeadingRef}
            id="misinformation-question"
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
              Your Evaluation Result
            </h2>

            <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-slate-100">
              Credibility Score: {score} / {maxScore}
            </p>

            <p className="mt-2 font-semibold text-gray-900 dark:text-slate-100">
              Evaluation: {credibilityLevel}
            </p>

            <p className="mt-4 leading-7 text-gray-700 transition-colors dark:text-slate-300">
              {resultExplanation}
            </p>
          </section>

          {strongAnswers.length > 0 && (
            <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
              <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                Positive Credibility Signals
              </h2>

              <p className="mt-3 text-gray-700 transition-colors dark:text-slate-300">
                You identified {strongAnswers.length} of the {questions.length}{" "}
                stronger credibility signals covered by this evaluation. These
                are useful signs, but no single signal proves that information
                is accurate.
              </p>
            </section>
          )}

          {recommendations.length > 0 && (
            <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
              <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
                What to Check Before Sharing
              </h2>

              <p className="mt-3 text-gray-700 transition-colors dark:text-slate-300">
                Review the areas where the information received a partial or
                weak score. These are the places where additional verification
                is most important.
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
                Stronger Credibility Signals
              </h2>

              <p className="mt-3 leading-7 text-gray-700 transition-colors dark:text-slate-300">
                The information received the strongest response across all
                seven checks. Even so, treat the result as a reason to continue
                verifying rather than proof that the information is true.
                Reliable evaluation requires checking the actual evidence and
                sources behind important claims.
              </p>
            </section>
          )}

          <button
            type="button"
            onClick={resetCheckup}
            className="mt-6 rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:outline-cyan-400"
          >
            Evaluate Another Claim
          </button>
        </>
      )}

      <section className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Strengthen Your Media Literacy
        </h2>

        <p className="mt-3 text-gray-700 transition-colors dark:text-slate-300">
          Explore lessons about misinformation, disinformation, fact-checking,
          evaluating online sources, manipulated content, and AI-generated
          media.
        </p>

        <Link
          href="/learn/media-literacy"
          className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:outline-cyan-400"
        >
          Explore Media Literacy Lessons
        </Link>
      </section>

      <p className="mt-6 text-sm leading-6 text-gray-500 transition-colors dark:text-slate-400">
        This tool is an educational checklist, not an automated fact-checker. A
        high score does not prove that a claim is true, and a low score does not
        automatically prove that it is false. Verify important claims using
        reliable evidence and independent sources.
      </p>
    </div>
  );
}