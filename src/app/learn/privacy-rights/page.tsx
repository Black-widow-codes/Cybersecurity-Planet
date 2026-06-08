export default function PrivacyRightsPage() {
    const topics = [
      {
        title: "Personal Data",
        description:
          "Understand what personal data is and how apps, websites, and services may collect it.",
      },
      {
        title: "Consent",
        description:
          "Learn why informed consent matters when sharing information online.",
      },
      {
        title: "Tracking Technologies",
        description:
          "Explore cookies, location tracking, app permissions, and online profiling.",
      },
      {
        title: "Digital Rights",
        description:
          "Understand your rights related to privacy, access, security, and control over personal information.",
      },
      {
        title: "Data Security",
        description:
          "Learn how strong passwords, MFA, and secure habits protect personal information.",
      },
      {
        title: "Surveillance Awareness",
        description:
          "Recognize how digital systems can monitor behavior, location, communication, and online activity.",
      },
    ];
  
    return (
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-blue-900">
          Privacy & Digital Rights
        </h1>
  
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Privacy and digital rights help people understand how their personal
          information is collected, used, shared, and protected in digital
          environments. These rights are important for safety, dignity, autonomy,
          and informed participation online.
        </p>
  
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Why Privacy Matters
          </h2>
  
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            Every time people use apps, websites, social media, health platforms,
            or AI tools, data may be collected about them. Understanding privacy
            helps digital citizens make informed choices, reduce risk, and protect
            sensitive information.
          </p>
        </section>
  
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {topic.title}
              </h3>
  
              <p className="mt-3 text-gray-600">
                {topic.description}
              </p>
            </div>
          ))}
        </section>
  
        <section className="mt-12 rounded-2xl bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-blue-900">
            Real-World Examples
          </h2>
  
          <ul className="mt-6 space-y-4 text-gray-700">
            <li>• A mobile app asks for access to your location.</li>
            <li>• A website tracks your browsing behavior using cookies.</li>
            <li>• A health app collects sleep, activity, or heart rate data.</li>
            <li>• A social media platform recommends content based on your activity.</li>
            <li>• An AI tool stores prompts or uploaded information.</li>
          </ul>
        </section>
  
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900">
            What You Can Do
          </h2>
  
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✓ Review app permissions regularly.</li>
            <li>✓ Use strong passwords and multi-factor authentication.</li>
            <li>✓ Avoid sharing sensitive information unnecessarily.</li>
            <li>✓ Read privacy settings before using important platforms.</li>
            <li>✓ Be cautious when uploading personal or health information to AI tools.</li>
          </ul>
        </section>
  
        <section className="mt-12 rounded-2xl bg-blue-900 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Key Takeaway
          </h2>
  
          <p className="mt-4 text-blue-100 text-lg">
            Privacy is not about hiding something wrong. It is about having
            control over personal information, understanding how data is used,
            and protecting digital dignity and safety.
          </p>
        </section>
      </main>
    );
  }