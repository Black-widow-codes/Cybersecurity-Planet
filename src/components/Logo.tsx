export default function Logo() {
    return (
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white font-bold shadow">
          CP
        </div>
  
        <div>
          <div className="text-lg font-bold text-blue-900">
            Cybersecurity Planet
          </div>
          <div className="text-xs text-gray-500">
            Navigate Technology with Confidence
          </div>
        </div>
      </div>
    );
  }