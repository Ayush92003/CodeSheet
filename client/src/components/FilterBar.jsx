export default function FilterBar() {
  return (
    <div className="flex gap-3 mt-6">
      <input
        placeholder="Search problems..."
        className="flex-1 bg-[#111] border border-gray-800 px-4 py-2 rounded-lg"
      />

      <button className="bg-[#111] border border-gray-800 px-4 py-2 rounded-lg">
        Difficulty
      </button>

      <button className="bg-[#111] border border-gray-800 px-4 py-2 rounded-lg">
        Topic
      </button>

      <button className="bg-[#111] border border-gray-800 px-4 py-2 rounded-lg">
        Company
      </button>
    </div>
  );
}
