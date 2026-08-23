import Link from "next/link";

export default function DigitalSafetyPage() {
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
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
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
              key={article.title}
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
                className="inline-block mt-5 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}