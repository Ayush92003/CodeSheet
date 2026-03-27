export default function Loader() {
  return (
    <div className="flex items-center justify-center h-[60vh] bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* CS Logo Loader */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute w-full h-full border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

          <span className="text-2xl font-bold">
            <span className="text-green-500">C</span>
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
