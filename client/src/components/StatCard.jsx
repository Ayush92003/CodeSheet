import {
  CheckCircle,
  TrendingUp,
  AutoAwesome,
  LocalFireDepartment,
} from "@mui/icons-material";

const iconMap = {
  easy: <CheckCircle className="text-green-400" fontSize="small" />,
  medium: <TrendingUp className="text-yellow-400" fontSize="small" />,
  hard: <AutoAwesome className="text-pink-400" fontSize="small" />,
  streak: <LocalFireDepartment className="text-orange-400" fontSize="small" />,
};

export function StatCard({ type, title, solved, total }) {
  return (
    <div className="h-full bg-[#111] p-5 rounded-2xl border border-gray-800 flex flex-col justify-between min-h-30 hover:border-gray-600 transition">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm tracking-wide">{title}</p>
        {iconMap[type]}
      </div>

      {/* Value */}
      <div className="mt-4 text-3xl font-bold">
        {solved}
        {total !== undefined && (
          <span className="text-gray-500 text-lg"> / {total}</span>
        )}
      </div>
    </div>
  );
}
