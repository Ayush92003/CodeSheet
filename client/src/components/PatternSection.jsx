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
        className="flex justify-between items-center bg-[#111] px-5 py-4 rounded-lg cursor-pointer border border-gray-800"
      >
        <h2 className="font-semibold">{title}</h2>

        <span className="text-sm text-gray-400">
          {solvedCount} / {problems.length}
        </span>
      </div>

      {/* LIST */}
      {open && (
        <div className="mt-2 bg-[#0f0f0f] rounded-lg border border-gray-800">
          {problems.map((p) => (
            <ProblemItem
              key={p._id}
              problem={p}
              solved={solved}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
