import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogle = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* GRID BG */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* CARD */}
      <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 w-95 text-center">
        {/* ICON */}
        <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          &lt;/&gt;
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-2">
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
                className="text-green-400 cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                create a new one
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-green-400 cursor-pointer"
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
          className="w-full border border-gray-700 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1a1a1a]"
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
