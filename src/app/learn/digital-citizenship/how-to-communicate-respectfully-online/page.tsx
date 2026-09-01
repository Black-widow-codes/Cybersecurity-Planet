import Link from "next/link";

export const metadata = {
  title: "How to Communicate Respectfully Online | Cybersecurity Planet",
  description:
    "Learn practical ways to communicate respectfully online, manage disagreements, and contribute to healthier digital spaces.",
};

export default function RespectfulCommunicationArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 transition-colors dark:text-blue-200">
        How to Communicate Respectfully Online
      </h1>

      <p className="mt-4 text-gray-600 transition-colors dark:text-slate-300">
        Online communication can be fast and informal, but the way we speak to
        others still matters. Respectful communication helps reduce conflict,
        protect relationships, and create healthier digital communities.
      </p>

      <section className="mt-10 space-y-6 text-gray-700 transition-colors dark:text-slate-300">
        <p>
          Messages, comments, group chats, forums, gaming communities, and
          social media can make it easy to forget that there is a real person
          on the other side of the screen. Digital citizenship includes
          communicating in ways that are thoughtful, fair, and responsible.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Pause Before Responding
        </h2>

        <p>
          If a message makes you angry or frustrated, avoid replying
          immediately. Taking time to calm down can help you respond to the
          issue rather than reacting to the emotion.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Disagree Without Attacking
        </h2>

        <p>
          You can disagree with someone without insulting them. Focus on the
          idea, claim, or behaviour rather than attacking the person.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Explain your point clearly.</li>
          <li>Avoid name-calling and personal attacks.</li>
          <li>Ask questions when something is unclear.</li>
          <li>Recognize that people may have different experiences.</li>
          <li>Know when a conversation is no longer productive.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Remember That Tone Can Be Misunderstood
        </h2>

        <p>
          Text does not always communicate tone clearly. A short message,
          joke, or sarcastic comment may be interpreted differently than you
          intended. When a topic is sensitive, use clear language and avoid
          unnecessary ambiguity.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Do Not Join Online Harassment
        </h2>

        <p>
          Sharing humiliating content, encouraging attacks, repeatedly
          targeting someone, or joining a pile-on can cause real harm. If you
          see harassment, avoid adding to it and use available reporting or
          moderation tools when appropriate.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          Respect Boundaries and Privacy
        </h2>

        <p>
          Do not pressure people to share personal information, private
          messages, photos, or other content they do not want to share.
          Respecting digital boundaries is part of respecting the person.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 transition-colors dark:text-blue-200">
          You Can Leave a Conversation
        </h2>

        <p>
          Being respectful does not mean you must remain in every discussion.
          Muting, blocking, reporting, or leaving a conversation can be a
          responsible choice when communication becomes abusive, threatening,
          or harmful.
        </p>

        <div className="rounded-xl border bg-gray-50 transition-colors dark:bg-slate-900 p-6">
          <h3 className="text-xl font-bold text-blue-900 transition-colors dark:text-blue-200">
            Check Your Digital Citizenship Habits
          </h3>

          <p className="mt-2">
            Use the Digital Citizenship Checkup to reflect on how you
            communicate, share information, manage privacy, and participate in
            online spaces.
          </p>

          <Link
            href="/tools/digital-citizenship-checkup"
            className="mt-4 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-800"
          >
            Open Digital Citizenship Checkup
          </Link>
        </div>
      </section>
    </div>
  );
}



