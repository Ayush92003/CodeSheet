import { useState, useEffect } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { patternConfig } from "../data/patternConfig";

export default function AddProblem({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    difficulty: "Easy",
    links: {
      leetcode: "",
      gfg: "",
    },
    pattern: "Array",
    subPattern: patternConfig["Array"][0],
    notes: "",
    solution: "",
  });

  const [show, setShow] = useState(false);

  // 🔥 Show with animation
  useEffect(() => {
    setShow(true);
  }, []);

  // 🔥 Close with animation
  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 200); // wait animation
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:5000/api/problems", form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      onSuccess();
      handleClose();
    } catch (err) {
      console.error(err);
      alert("Error adding problem ❌");
    }
  };

  return (
    <div
      onClick={handleClose} // 🔥 click outside close
      className={`fixed inset-0 flex items-center justify-center z-50 px-4 transition-all duration-300 ${
        show ? "bg-black/70 backdrop-blur-sm" : "bg-black/0"
      }`}
    >
      {/* STOP PROPAGATION */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#0f0f0f] w-full max-w-2xl rounded-2xl border border-gray-800 shadow-xl max-h-[90vh] overflow-y-auto transition-all duration-300 ${
          show
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-5"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold">Add New Problem</h2>

          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition"
          >
            <CloseIcon />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* BASIC INFO */}
          <div className="space-y-4">
            <h3 className="text-sm text-gray-400 uppercase tracking-wide">
              Basic Info
            </h3>

            <input
              placeholder="Problem Title"
              className="w-full p-3 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <input
              placeholder="LeetCode Link"
              className="w-full p-3 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
              value={form.links.leetcode}
              onChange={(e) =>
                setForm({
                  ...form,
                  links: { ...form.links, leetcode: e.target.value },
                })
              }
            />

            <input
              placeholder="GFG Link"
              className="w-full p-3 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
              value={form.links.gfg}
              onChange={(e) =>
                setForm({
                  ...form,
                  links: { ...form.links, gfg: e.target.value },
                })
              }
            />
          </div>

          {/* CLASSIFICATION */}
          <div className="space-y-4">
            <h3 className="text-sm text-gray-400 uppercase tracking-wide">
              Classification
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <select
                className="p-3 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
                value={form.difficulty}
                onChange={(e) =>
                  setForm({ ...form, difficulty: e.target.value })
                }
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <select
                className="p-3 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
                value={form.pattern}
                onChange={(e) =>
                  setForm({
                    ...form,
                    pattern: e.target.value,
                    subPattern: patternConfig[e.target.value][0], // 🔥 auto reset
                  })
                }
              >
                {Object.keys(patternConfig).map((pattern) => (
                  <option key={pattern}>{pattern}</option>
                ))}
              </select>
            </div>

            <select
              className="w-full p-3 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
              value={form.subPattern}
              onChange={(e) => setForm({ ...form, subPattern: e.target.value })}
            >
              {patternConfig[form.pattern]?.map((sub) => (
                <option key={sub}>{sub}</option>
              ))}
            </select>
          </div>

          {/* NOTES */}
          <div className="space-y-4">
            <h3 className="text-sm text-gray-400 uppercase tracking-wide">
              Notes
            </h3>

            <textarea
              placeholder="Approach / Tricks"
              className="w-full p-3 bg-[#1a1a1a] rounded-lg border border-gray-700 h-24 focus:outline-none focus:border-green-500"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          {/* SOLUTION */}
          <div className="space-y-4">
            <h3 className="text-sm text-gray-400 uppercase tracking-wide">
              Solution
            </h3>

            <textarea
              placeholder="Code / Explanation"
              className="w-full p-3 bg-[#1a1a1a] rounded-lg border border-gray-700 h-32 focus:outline-none focus:border-green-500"
              value={form.solution}
              onChange={(e) => setForm({ ...form, solution: e.target.value })}
            />
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white"
            >
              Cancel
            </button>

            <button className="px-5 py-2 rounded-lg bg-green-500 text-black font-semibold cursor-pointer hover:bg-green-400">
              Add Problem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
