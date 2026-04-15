import { useState, useEffect } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

export default function EditModal({ problem, onClose, onSuccess }) {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    title: problem.title,
    difficulty: problem.difficulty,
    pattern: problem.pattern,
    subPattern: problem.subPattern,
    notes: problem.notes || "",
    solution: problem.solution || "",
    links: {
      leetcode: problem.links?.leetcode || "",
      gfg: problem.links?.gfg || "",
    },
  });

  useEffect(() => setShow(true), []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 200);
  };

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/problems/update/${problem._id}`,
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      onSuccess();
      handleClose();
    } catch {
      alert("Error updating problem ❌");
    }
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 flex items-center justify-center z-9999 px-4 transition-all duration-300 ${
        show ? "bg-black/70 backdrop-blur-sm" : "bg-black/0"
      }`}
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700/60 
        bg-linear-to-br from-[#0f0f1a] via-[#12122a] to-[#18183a] backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          show
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-5"
        }`}
      >
        {/* glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700/60">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-purple-300">
              Edit Problem
            </h2>
            <p className="text-xs text-slate-400">
              Update details and improve your sheet
            </p>
          </div>

          <button
            onClick={handleClose}
            className="cursor-pointer text-slate-400 hover:text-purple-400 transition"
          >
            <CloseIcon />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* BASIC INFO */}
          <div className="space-y-4">
            <h3 className="text-xs text-slate-400 uppercase tracking-wide">
              Basic Info
            </h3>

            <input
              className="input"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Problem Title"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className="input"
                value={form.links.leetcode}
                onChange={(e) =>
                  setForm({
                    ...form,
                    links: { ...form.links, leetcode: e.target.value },
                  })
                }
                placeholder="LeetCode Link"
              />

              <input
                className="input"
                value={form.links.gfg}
                onChange={(e) =>
                  setForm({
                    ...form,
                    links: { ...form.links, gfg: e.target.value },
                  })
                }
                placeholder="GFG Link"
              />
            </div>
          </div>

          {/* CLASSIFICATION */}
          <div className="space-y-4">
            <h3 className="text-xs text-slate-400 uppercase tracking-wide">
              Classification
            </h3>

            <select
              className="input"
              value={form.difficulty}
              onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* NOTES */}
          <div className="space-y-2">
            <h3 className="text-xs text-slate-400 uppercase">Notes</h3>
            <textarea
              className="resize-none input h-24"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Write your approach..."
            />
          </div>

          {/* SOLUTION */}
          <div className="space-y-2">
            <h3 className="text-xs text-slate-400 uppercase">Solution</h3>
            <textarea
              className="resize-none input h-32"
              value={form.solution}
              onChange={(e) => setForm({ ...form, solution: e.target.value })}
              placeholder="Code / explanation"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-700/60">
            <span className="text-xs text-slate-500">
              Changes will update instantly
            </span>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="cursor-pointer px-4 py-2 rounded-lg border border-slate-600 text-slate-400 hover:text-white transition"
              >
                Cancel
              </button>

              <button className="cursor-pointer px-5 py-2 rounded-lg bg-linear-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-md shadow-purple-500/20 hover:brightness-110 transition">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
