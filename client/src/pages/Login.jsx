import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0B0B0F] via-[#0f0f1a] to-[#0B0B0F] flex items-center justify-center relative overflow-hidden">
      {/* GRID BG */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* GLOW EFFECT */}
      <div className="absolute w-75 h-75 bg-purple-500/20 blur-[120px] top-10 left-10"></div>
      <div className="absolute w-75 h-75 bg-indigo-500/20 blur-[120px] bottom-10 right-10"></div>

      {/* CARD */}
      <div className="relative bg-[#111827]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 sm:p-8 w-full max-w-md text-center shadow-2xl shadow-purple-500/10">
        {/* ICON */}
        <div className="w-14 h-14 bg-linear-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 text-white font-bold text-lg">
          &lt;/&gt;
        </div>

        {/* TITLE */}
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          {isLogin ? "Welcome to CodeSheet" : "Join CodeSheet"}
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          {isLogin
            ? "Master DSA & Ace Your Interviews"
            : "Start Your DSA Mastery Journey"}
        </p>

        <p className="text-gray-400 text-sm mb-6">
          {isLogin ? (
            <>
              Sign in to your account or{" "}
              <span
                className="text-purple-400 cursor-pointer hover:underline"
                onClick={() => setIsLogin(false)}
              >
                create a new one
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-purple-400 cursor-pointer hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Sign in
              </span>
            </>
          )}
        </p>

        {/* GOOGLE BUTTON */}
        <button
          onClick={handleGoogle}
          className="w-full border border-gray-700 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1a1a2e] hover:border-purple-500 transition-all duration-200"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5"
          />
          {isLogin ? "Sign in with Google" : "Sign up with Google"}
        </button>

        {/* FOOTER */}
        <p className="text-gray-500 text-xs mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
