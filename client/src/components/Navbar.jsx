import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Logout } from "@mui/icons-material";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setOpen(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="sticky top-0 z-50 bg-[#0B0B0F]/80 backdrop-blur-md border-b border-gray-800 px-4 sm:px-6 py-3 flex justify-between items-center">
      {/* LOGO */}
      <a href="/">
        <h1 className="text-lg sm:text-xl font-bold">
          <span className="text-purple-400">Code</span>{" "}
          <span className="text-white">Sheet</span>
        </h1>
      </a>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-4 relative">
        {!token ? (
          <Link
            to="/login"
            className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-md shadow-purple-500/20 transition"
          >
            Sign In
          </Link>
        ) : (
          <>
            {/* Profile Circle */}
            <div
              onClick={() => setOpen(!open)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer font-semibold text-white bg-linear-to-r from-purple-500 to-indigo-500 shadow-md shadow-purple-500/30 hover:scale-105 transition"
            >
              {initials}
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 top-14 w-64 bg-[#111827]/90 backdrop-blur-md border border-gray-800 rounded-xl shadow-xl overflow-hidden animate-fadeIn">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-800">
                  <p className="text-sm font-semibold text-white">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-400">{user?.email}</p>
                </div>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition"
                >
                  <Logout fontSize="small" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
