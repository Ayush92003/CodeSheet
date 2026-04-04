import { useState, useEffect } from "react";
import { FaLink, FaRegBookmark } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function ProblemItem({ problem, solved, onToggle }) {
  const isSolved = solved.some((id) => id.toString() === problem._id);

  const [showNotes, setShowNotes] = useState(false);
  const [note, setNote] = useState(problem.notes || "");

  const [localSolved, setLocalSolved] = useState(isSolved);

  useEffect(() => {
    setLocalSolved(isSolved);
  }, [isSolved]);

  const handleToggle = () => {
    setLocalSolved((prev) => !prev); 
    onToggle(problem._id); 
  };

  return (
    <div className="px-4 sm:px-5 py-4 border-b border-gray-800 hover:bg-[#15162b] transition-all duration-200">
      {/* TOP ROW */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* LEFT */}
        <div className="flex items-center gap-3 sm:gap-4">
          <input
            type="checkbox"
            checked={localSolved} 
            onChange={handleToggle} 
            className="w-5 h-5 accent-purple-500 cursor-pointer"
          />

          <h3
            className={`font-normal text-sm sm:text-base ${
              localSolved ? "text-gray-500" : "text-zinc-300"
            }`}
          >
            {problem.title}
          </h3>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {/* Difficulty */}
          <span
            className={`px-3 py-1 rounded-md text-xs sm:text-sm font-medium border
              ${
                problem.difficulty === "Easy" &&
                "text-purple-300 border-purple-500/40 bg-purple-500/10"
              }
              ${
                problem.difficulty === "Medium" &&
                "text-indigo-300 border-indigo-500/40 bg-indigo-500/10"
              }
              ${
                problem.difficulty === "Hard" &&
                "text-pink-300 border-pink-500/40 bg-pink-500/10"
              }
            `}
          >
            {problem.difficulty}
          </span>

          {/* ICONS */}
          <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg">
            {/* LeetCode */}
            <a
              href={problem.links?.leetcode || "#"}
              target="_blank"
              rel="noreferrer"
              className={`transition ${
                problem.links?.leetcode
                  ? "text-orange-400 hover:scale-110"
                  : "text-gray-600 cursor-not-allowed"
              }`}
            >
              <SiLeetcode />
            </a>

            {/* GFG */}
            <a
              href={problem.links?.gfg || "#"}
              target="_blank"
              rel="noreferrer"
              className={`transition ${
                problem.links?.gfg
                  ? "text-green-400 hover:scale-110"
                  : "text-gray-600 cursor-not-allowed"
              }`}
            >
              <SiGeeksforgeeks />
            </a>

            {/* Notes */}
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaRegBookmark />
            </button>

            {/* Solution */}
            <button
              onClick={() => alert(problem.solution || "No solution yet")}
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaLink />
            </button>
          </div>
        </div>
      </div>

      {/* NOTES SECTION */}
      {showNotes && (
        <div className="mt-4">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your notes..."
            className="w-full p-3 bg-[#111827] rounded-lg border border-gray-700 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />

          <button className="mt-2 px-4 py-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm shadow-md shadow-purple-500/20 transition">
            Save Notes
          </button>
        </div>
      )}
    </div>
  );
}
