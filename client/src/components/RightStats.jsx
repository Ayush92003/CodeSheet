import { StatCard } from "./StatCard";

export default function RightStats({ easy, medium, hard, streak }) {
  return (
    <div className="grid grid-cols-2 gap-5 h-full">
      <StatCard
        type="easy"
        title="EASY"
        solved={easy.solved}
        total={easy.total}
      />
      <StatCard
        type="medium"
        title="MEDIUM"
        solved={medium.solved}
        total={medium.total}
      />
      <StatCard
        type="hard"
        title="HARD"
        solved={hard.solved}
        total={hard.total}
      />
      <StatCard type="streak" title="STREAK" solved={streak} />
    </div>
  );
}
