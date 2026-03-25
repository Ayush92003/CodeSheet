import { useState } from "react";
import { FaYoutube, FaLink, FaRegBookmark } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function ProblemItem({ problem, solved, onToggle }) {
  const isSolved = solved.some((id) => id.toString() === problem._id);

  const [showNotes, setShowNotes] = useState(false);
  const [note, setNote] = useState(problem.notes || "");

  return (
    <div className="px-5 py-4 border-b border-gray-800 hover:bg-[#151515] transition">
      {/* TOP ROW */}
      <div className="flex justify-between items-center">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={isSolved}
            onChange={() => onToggle(problem._id)}
            className="w-5 h-5 accent-blue-500"
          />

          <h3 className="font-normal text-zinc-300">{problem.title}</h3>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          {/* Difficulty */}
          <span
            className={`px-3 py-1 rounded-md text-sm font-medium
              ${problem.difficulty === "Easy" && "text-green-500 border border-green-500"}
              ${problem.difficulty === "Medium" && "text-orange-500 border border-orange-500"}
              ${problem.difficulty === "Hard" && "text-red-500 border border-red-500"}
            `}
          >
            {problem.difficulty}
          </span>

          {/* ICONS */}
          <div className="flex items-center gap-4 text-lg">
            {/* LeetCode */}
            <a
              href={problem.links?.leetcode || "#"}
              target="_blank"
              className={`${
                problem.links?.leetcode
                  ? "text-orange-500 hover:scale-110"
                  : "text-gray-600 cursor-not-allowed"
              }`}
            >
              <SiLeetcode />
            </a>

            {/* GFG */}
            <a
              href={problem.links?.gfg || "#"}
              target="_blank"
              className={`${
                problem.links?.gfg
                  ? "text-green-500 hover:scale-110"
                  : "text-gray-600 cursor-not-allowed"
              }`}
            >
              <SiGeeksforgeeks />
            </a>

            {/* Notes */}
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="text-gray-400 hover:text-white"
            >
              <FaRegBookmark />
            </button>

            {/* Solution */}
            <button
              onClick={() => alert(problem.solution || "No solution yet")}
              className="text-gray-400 hover:text-orange-400"
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
            className="w-full p-3 bg-[#1a1a1a] rounded border border-gray-700"
          />

          <button className="mt-2 px-4 py-1 bg-green-500 text-black rounded">
            Save Notes
          </button>
        </div>
      )}
    </div>
  );
}
