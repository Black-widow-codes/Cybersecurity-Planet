export default function DigitalCitizenshipPage() {
    return (
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-blue-900">
          Digital Citizenship
        </h1>
  
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Digital citizenship is about using technology responsibly,
          ethically, safely, and confidently. It includes how we communicate,
          share information, protect our privacy, and participate in digital
          spaces.
        </p>
  
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Digital Footprints",
            "Online Reputation",
            "Responsible Sharing",
            "Media Literacy",
            "Online Respect",
            "Critical Thinking",
          ].map((topic) => (
            <div key={topic} className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900">{topic}</h2>
              <p className="mt-3 text-gray-600">
                Learn how this topic shapes your role as a digital citizen.
              </p>
            </div>
          ))}
        </section>
      </main>
    );
  }