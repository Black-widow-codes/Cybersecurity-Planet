export default function PillarsSection() {
    return (
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center">
            Explore Digital Citizenship
          </h2>
  
          <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            Learn the key areas every digital citizen needs to understand in
            today’s connected world.
          </p>
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Digital Citizenship",
              "Digital Safety",
              "Privacy & Digital Rights",
              "Digital Health & Wellbeing",
              "AI & Emerging Technology",
              "Media & Information Literacy",
            ].map((title) => (
              <div
                key={title}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-blue-900">{title}</h3>
  
                <p className="mt-3 text-gray-600">
                  Clear, practical education to help you understand and
                  navigate this topic.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }