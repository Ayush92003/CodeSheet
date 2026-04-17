export default function Dashboard({ solved, total }) {
  const percent = total === 0 ? 0 : Math.round((solved / total) * 100);
  const user = JSON.parse(localStorage.getItem("user"));

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="h-full bg-linear-to-r from-[#0f0f0f] via-[#1a1333] to-[#0f0f0f] rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border border-gray-800 shadow-md hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-md">
      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Keep pushing,{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
            {user?.name.substring(0, user?.name.indexOf(" ")) || "Coder"}
          </span>
          !
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
          You're building mastery one problem at a time. <br />
          Keep the momentum going!
        </p>

        <p className="text-xs text-gray-500 tracking-widest uppercase">
          Total Solved
        </p>

        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1">
          {solved}
          <span className="text-gray-500 text-sm sm:text-xl"> / {total}</span>
        </div>
      </div>

      {/* RIGHT PROGRESS */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 min-w-24 shrink-0">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
          {/* Background Circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="#1f2937" // subtle gray
            strokeWidth="10"
            fill="none"
          />

          {/* Progress Circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="#8B5CF6" // purple theme
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percent / 100)}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.7s ease",
              filter: "drop-shadow(0 0 6px rgba(139,92,246,0.6))",
            }}
          />
        </svg>

        {/* Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-base sm:text-xl font-bold text-purple-300">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
}
