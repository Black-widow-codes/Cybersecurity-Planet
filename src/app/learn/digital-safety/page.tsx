import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Safety | Cybersecurity Planet",
  description:
    "Learn practical digital safety skills for stronger passwords, phishing awareness, scam prevention, malware protection, and safer downloads.",
};

const articles = [
  {
    title: "What Makes a Strong Password?",
    description:
      "Learn how to create strong passwords, avoid password reuse, and better protect your online accounts.",
    link: "/learn/digital-safety/what-makes-a-strong-password",
  },
  {
    title: "How to Recognize a Phishing Message",
    description:
      "Learn the common warning signs of phishing emails, text messages, fake links, and fraudulent login pages.",
    link: "/learn/digital-safety/how-to-recognize-a-phishing-message",
  },
  {
    title: "How Online Scams Manipulate You",
    description:
      "Learn how scammers use urgency, fear, trust, excitement, and pressure to influence your decisions online.",
    link: "/learn/digital-safety/how-online-scams-manipulate-you",
  },
  {
    title: "What Is Malware and How Does It Spread?",
    description:
      "Learn what malware is, how it reaches devices, common warning signs, and practical ways to reduce your risk.",
    link: "/learn/digital-safety/what-is-malware-and-how-does-it-spread",
  },
  {
    title: "How to Download Files Safely",
    description:
      "Learn how to recognize risky downloads, choose trusted sources, and reduce the chance of installing malicious software.",
    link: "/learn/digital-safety/how-to-download-files-safely",
  },
];

export default function DigitalSafetyPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900">
        Digital Safety
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-700">
        Learn how to protect yourself from phishing, scams, malware, weak
        passwords, unsafe downloads, and other online threats through practical,
        beginner-friendly guidance.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900">
          Articles
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.link}
              className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {article.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {article.description}
              </p>

              <Link
                href={article.link}
                className="mt-5 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
