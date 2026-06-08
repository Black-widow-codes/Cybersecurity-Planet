export default function DigitalHealthPage() {
    const topics = [
      {
        title: "Health Information Online",
        description:
          "Learn how to identify credible health information and avoid misleading medical claims.",
      },
      {
        title: "Telehealth Safety",
        description:
          "Understand how to use virtual healthcare services safely and effectively.",
      },
      {
        title: "Health Data Privacy",
        description:
          "Explore how personal health information is collected, stored, shared, and protected.",
      },
      {
        title: "Wearables & Health Apps",
        description:
          "Understand the benefits and privacy considerations of fitness trackers and health applications.",
      },
      {
        title: "AI in Healthcare",
        description:
          "Learn how artificial intelligence supports diagnosis, treatment, and healthcare decision-making.",
      },
      {
        title: "Health Misinformation",
        description:
          "Develop skills to evaluate online health claims before trusting or sharing them.",
      },
    ];
  
    return (
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-blue-900">
          Digital Health & Wellbeing
        </h1>
  
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Digital health refers to the use of technology to improve healthcare,
          health education, patient engagement, and personal wellbeing.
          It includes telehealth, mobile health apps, wearable devices,
          electronic health records, and artificial intelligence.
        </p>
  
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Why Digital Health Matters
          </h2>
  
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            Technology is transforming how people access healthcare, manage
            chronic conditions, receive medical advice, and make health decisions.
            Understanding digital health helps individuals use these technologies
            safely, effectively, and responsibly.
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
            <li>
              • Booking a virtual appointment through a telehealth platform.
            </li>
            <li>
              • Using a smartwatch to monitor heart rate and physical activity.
            </li>
            <li>
              • Accessing laboratory results through a patient portal.
            </li>
            <li>
              • Using AI-powered tools to support healthcare professionals.
            </li>
          </ul>
        </section>
  
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Key Safety Tips
          </h2>
  
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✓ Protect health accounts with strong passwords.</li>
            <li>✓ Review privacy settings on health apps.</li>
            <li>✓ Verify online health information with trusted sources.</li>
            <li>✓ Understand how your health data may be used or shared.</li>
            <li>✓ Discuss major health decisions with qualified professionals.</li>
          </ul>
        </section>
  
        <section className="mt-12 rounded-2xl bg-blue-900 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Key Takeaway
          </h2>
  
          <p className="mt-4 text-blue-100 text-lg">
            Digital health can improve access, convenience, and health outcomes,
            but it also requires individuals to understand privacy, security,
            information quality, and responsible technology use.
          </p>
        </section>
      </main>
    );
  }