export default function Dashboard({ solved, total }) {
  const percent = Math.round((solved / total) * 100 || 0);
  const user = JSON.parse(localStorage.getItem("user"));

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="h-full bg-linear-to-r from-[#0f0f0f] via-[#0a1a14] to-[#0f0f0f] rounded-2xl p-8 flex justify-between items-center border border-gray-800 shadow-md hover:shadow-lg transition">
      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl font-bold mb-2">
          Keep pushing, {user?.name || "Coder"}!
        </h2>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          You're building mastery one problem at a time. <br />
          Keep the momentum going!
        </p>

        <p className="text-xs text-gray-500 tracking-widest uppercase">
          Total Solved
        </p>

        <div className="text-4xl font-bold mt-1">
          {solved}
          <span className="text-gray-500 text-xl"> / {total}</span>
        </div>
      </div>

      {/* RIGHT PROGRESS */}
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90">
          {/* Background */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="#1f2937"
            strokeWidth="10"
            fill="none"
          />

          {/* Progress */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="#22c55e"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percent / 100)}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.7s ease",
            }}
          />
        </svg>

        {/* Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{percent}%</span>
        </div>
      </div>
    </div>
  );
}
