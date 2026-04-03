import {
  CheckCircle,
  TrendingUp,
  AutoAwesome,
  LocalFireDepartment,
} from "@mui/icons-material";

const iconMap = {
  easy: <CheckCircle className="text-purple-400" fontSize="small" />,
  medium: <TrendingUp className="text-indigo-400" fontSize="small" />,
  hard: <AutoAwesome className="text-pink-400" fontSize="small" />,
  streak: <LocalFireDepartment className="text-orange-400" fontSize="small" />,
};

export function StatCard({ type, title, solved, total }) {
  return (
    <div className="h-full bg-[#111827]/80 backdrop-blur-md p-5 rounded-2xl border border-gray-800 flex flex-col justify-between min-h-27.5 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-xs sm:text-sm tracking-wide">
          {title}
        </p>

        <div className="p-2 rounded-lg bg-[#1a1333]">{iconMap[type]}</div>
      </div>

      {/* Value */}
      <div className="mt-4 text-2xl sm:text-3xl font-bold">
        <span className="text-white">{solved}</span>

        {total !== undefined && (
          <span className="text-gray-500 text-sm sm:text-lg"> / {total}</span>
        )}
      </div>
    </div>
  );
}
