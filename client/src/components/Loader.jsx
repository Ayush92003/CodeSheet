export default function Loader() {
  return (
    <div className="flex items-center justify-center h-[60vh] bg-linear-to-br from-[#0B0B0F] via-[#0f0f1a] to-[#0B0B0F]">
      <div className="flex flex-col items-center gap-5">
        {/* Logo Loader */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer Glow Ring */}
          <div className="absolute w-full h-full rounded-full bg-purple-500/10 blur-xl"></div>

          {/* Spinning Ring */}
          <div className="absolute w-full h-full border-4 border-purple-500 border-t-transparent rounded-full animate-spin shadow-md shadow-purple-500/30"></div>

          {/* Center Logo */}
          <span className="text-2xl font-bold">
            <span className="text-purple-400">C</span>
            <span className="text-white">S</span>
          </span>
        </div>

        {/* Text */}
        <p className="text-gray-400 text-sm tracking-wide animate-pulse">
          Loading your problems...
        </p>
      </div>
    </div>
  );
}
