export default function WelcomeSection() {
    return (
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-blue-900">
          Cybersecurity Planet
        </h1>
  
        <p className="mt-6 text-xl font-semibold text-cyan-600">
          Navigate Technology with Confidence
        </p>
  
        <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto">
          Empowering digital citizens through education on digital citizenship,
          privacy, digital safety, AI literacy, digital health, and informed
          decision-making.
        </p>
  
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold">
            Start Learning
          </button>
  
          <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-semibold">
            Explore Topics
          </button>
        </div>
      </section>
    );
  }