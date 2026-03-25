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

  const getColorFromName = (name) => {
    const colors = [
      "bg-red-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const index = Math.abs(hash % colors.length);
    return colors[index];
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setOpen(false);
    navigate("/");

    window.location.reload();
  };
  return (
    <div className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800 px-5 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <span className="text-green-400">Code</span> Sheet
      </h1>

      <div className="flex items-center gap-4">
        {!token ? (
          <Link
            to="/login"
            className="bg-green-500 px-4 py-2 rounded-full text-black font-semibold"
          >
            Sign In
          </Link>
        ) : (
          <>
            {/* Profile Circle */}
            <div
              onClick={() => setOpen(!open)}
              className={`w-10 h-10 ${getColorFromName(user?.name || "A")} rounded-full flex items-center justify-center cursor-pointer font-semibold text-white`}
            >
              {initials}
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 top-14 w-64 bg-[#111] border border-gray-700 rounded-xl shadow-xl overflow-hidden">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-800">
                  <p className="text-sm font-semibold">{user?.name}</p>
                  <p className="text-xs text-gray-400">{user?.email}</p>
                </div>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500 hover:text-white transition"
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
