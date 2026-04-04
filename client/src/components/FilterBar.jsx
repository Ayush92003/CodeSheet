export default function FilterBar({
  searchTerm,
  setSearchTerm,
  difficulty,
  setDifficulty,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 w-full">
      {/* Search */}
      <input
        type="text"
        placeholder="Search problems..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-[60%] bg-[#0f0f0f] border border-gray-700 px-4 py-2 rounded-md text-sm text-white focus:outline-none focus:border-purple-500 transition"
      />

      {/* Difficulty Tabs */}
      <div className="flex w-full sm:w-auto bg-[#0f0f0f] border border-gray-700 rounded-md overflow-hidden">
        {["all", "easy", "medium", "hard"].map((level) => (
          <button
            key={level}
            onClick={() => setDifficulty(level)}
            className={`px-4 py-2 text-sm cursor-pointer capitalize transition ${
              difficulty === level
                ? "bg-purple-600 text-white"
                : "text-gray-400 hover:bg-[#1a1a1a]"
            }`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
}
