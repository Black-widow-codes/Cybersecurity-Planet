export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white px-6 py-10">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Cybersecurity Planet</h3>
            <p className="mt-3 text-blue-100">
              Helping digital citizens navigate technology with confidence.
            </p>
          </div>
  
          <div>
            <h4 className="font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-blue-100">
              <li>Learn</li>
              <li>Resources</li>
              <li>Tools</li>
              <li>Insights</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold">Project Focus</h4>
            <ul className="mt-3 space-y-2 text-blue-100">
              <li>Digital Citizenship</li>
              <li>Privacy & Rights</li>
              <li>Digital Health</li>
              <li>AI Literacy</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }