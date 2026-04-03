export default function FilterBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
      {/* Search */}
      <input
        placeholder="Search problems..."
        className="flex-1 min-w-0 bg-[#111] border border-gray-800 px-4 py-2 rounded-lg text-sm"
      />

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
        <button className="bg-[#111] border border-gray-800 px-3 sm:px-4 py-2 rounded-lg text-sm whitespace-nowrap">
          Difficulty
        </button>

        <button className="bg-[#111] border border-gray-800 px-3 sm:px-4 py-2 rounded-lg text-sm whitespace-nowrap">
          Topic
        </button>

        <button className="bg-[#111] border border-gray-800 px-3 sm:px-4 py-2 rounded-lg text-sm whitespace-nowrap">
          Company
        </button>
      </div>
    </div>
  );
}
