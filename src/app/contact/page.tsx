import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Cybersecurity Planet",
  description:
    "Contact Cybersecurity Planet for learning, collaboration, and project inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">Contact</h1>

      <p className="mt-6 text-lg text-gray-700">
        Connect with Cybersecurity Planet for learning, collaboration, and
        project inquiries.
      </p>
    </div>
  );
}