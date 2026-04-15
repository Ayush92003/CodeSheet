import { useState } from "react";
import ProblemItem from "./ProblemItem";

export default function PatternSection({ title, problems, solved, onToggle }) {
  const [open, setOpen] = useState(true);

  const solvedCount = problems.filter((p) =>
    solved.some((id) => id.toString() === p._id),
  ).length;

  return (
    <div className="mt-8">
      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1 bg-[#111] px-5 py-4 rounded-xl cursor-pointer border border-gray-800 hover:border-purple-500/30 transition"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-zinc-200">{title}</h2>

          <span className="text-sm text-gray-400">
            {solvedCount} / {problems.length}
          </span>
        </div>

        {/* optional description */}
        {problems[0]?.subPattern && (
          <p className="text-xs sm:text-sm text-gray-500">
            {problems[0].subPattern}
          </p>
        )}
      </div>

      {/* LIST */}
      {open && (
        <div className="mt-4 flex flex-col gap-4">
          {problems.map((p) => (
            <ProblemItem
              key={p._id}
              problem={p}
              isSolved={solved.some((id) => id.toString() === p._id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
