import { memo, useState, useEffect } from "react";
import { FaLink, FaRegBookmark } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { fireConfetti } from "../utils/confetti";
import { FaEdit } from "react-icons/fa";
import EditModal from "./EditModal";

function ProblemItem({ problem, isSolved, onToggle, user, onEdit }) {
  const [showNotes, setShowNotes] = useState(false);
  const [note, setNote] = useState(problem.notes || "");

  const [localSolved, setLocalSolved] = useState(isSolved);

  useEffect(() => {
    setLocalSolved(isSolved);
  }, [isSolved]);

  const handleToggle = () => {
    const newState = !localSolved;

    setLocalSolved(newState);
    onToggle(problem._id);

    if (newState) {
      fireConfetti();
    }
  };

  const difficultyStyles = {
    Easy: "text-emerald-300 border-emerald-400/40 bg-emerald-500/15",
    Medium: "text-amber-300 border-amber-400/40 bg-amber-500/15",
    Hard: "text-rose-300 border-rose-400/40 bg-rose-500/15",
  };

  return (
    <div className="px-3 py-3 sm:px-4 sm:py-4">
      <div
        className={`group rounded-2xl cursor-pointer border p-5 sm:p-6 transition-all duration-300 relative overflow-hidden ${
          localSolved
            ? "border-purple-400/30 bg-linear-to-r from-purple-500/10 to-indigo-500/10 shadow-[0_0_0_1px_rgba(168,85,247,0.15),0_14px_30px_-20px_rgba(168,85,247,0.55)]"
            : "border-slate-700/70 bg-linear-to-r from-[#0f0f1a] via-[#12122a] to-[#18183a] hover:border-purple-400/40 hover:shadow-[0_14px_34px_-24px_rgba(168,85,247,0.6)]"
        }`}
      >
        {/* subtle glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-purple-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between relative z-10">
          {/* LEFT */}
          <div className="flex items-start gap-4">
            <label className="relative mt-0.5 inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={localSolved}
                onChange={handleToggle}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-500 bg-slate-900/80 checked:border-purple-300 checked:bg-purple-400 focus:outline-none"
              />
              <span className="pointer-events-none absolute left-1.5 top-1.25 h-2 w-1 rotate-45 border-b-2 border-r-2 border-slate-900 opacity-0 transition peer-checked:opacity-100" />
            </label>

            <div className="space-y-1">
              <h3
                className={`text-sm sm:text-base font-medium tracking-wide ${
                  localSolved
                    ? "text-purple-200 line-through decoration-purple-400/70 decoration-2"
                    : "text-slate-100"
                }`}
              >
                {problem.title}
              </h3>

              <p className="text-xs text-slate-400">
                {localSolved ? "Completed" : "Mark as solved"}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Difficulty */}
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${
                difficultyStyles[problem.difficulty] ||
                "text-slate-300 border-slate-500/40 bg-slate-500/10"
              }`}
            >
              {problem.difficulty}
            </span>

            {/* Icons */}
            <div className="flex items-center gap-2.5 text-lg opacity-80 hover:opacity-100 transition">
              <a
                href={problem.links?.leetcode || "#"}
                target="_blank"
                rel="noreferrer"
                className={`rounded-lg p-2 transition ${
                  problem.links?.leetcode
                    ? "text-orange-400 hover:bg-orange-400/10 hover:text-orange-300"
                    : "cursor-not-allowed text-slate-600"
                }`}
              >
                <SiLeetcode />
              </a>

              <a
                href={problem.links?.gfg || "#"}
                target="_blank"
                rel="noreferrer"
                className={`rounded-lg p-2 transition ${
                  problem.links?.gfg
                    ? "text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300"
                    : "cursor-not-allowed text-slate-600"
                }`}
              >
                <SiGeeksforgeeks />
              </a>

              <button
                onClick={() => setShowNotes(!showNotes)}
                className={`cursor-pointer rounded-lg p-2 transition ${
                  showNotes
                    ? "bg-purple-500/20 text-purple-300"
                    : "text-slate-400 hover:bg-purple-500/10 hover:text-purple-300"
                }`}
              >
                <FaRegBookmark />
              </button>

              <button
                onClick={() => alert(problem.solution || "No solution yet")}
                className="cursor-pointer rounded-lg p-2 text-slate-400 transition hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                <FaLink />
              </button>

              {user?.isAdmin && (
                <button
                  onClick={() => onEdit(problem)}
                  className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-gray-400 hover:text-purple-300 hover:bg-purple-500/10 transition"
                >
                  <FaEdit className="text-sm" />
                  <span className="hidden sm:inline">Edit</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* NOTES */}
        {showNotes && (
          <div className="mt-5 rounded-xl border border-slate-700/70 bg-slate-950/40 p-4">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write your notes..."
              className="min-h-27.5 w-full rounded-xl border border-slate-700 bg-[#0e1424] p-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
            />

            <button className="mt-3 rounded-lg bg-linear-to-r from-purple-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110">
              Save Notes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(ProblemItem);
