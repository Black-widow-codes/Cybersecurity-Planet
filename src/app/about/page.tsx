import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Cybersecurity Planet",
  description:
    "Learn about Cybersecurity Planet and its mission to help digital citizens navigate technology with confidence.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-200">About</h1>

      <p className="mt-6 text-lg text-gray-700 dark:text-slate-300">
        Cybersecurity Planet helps digital citizens navigate technology with
        confidence.
      </p>
    </div>
  );
}
