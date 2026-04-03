import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import Dashboard from "../components/Dashboard";
import RightStats from "../components/RightStats";
import FilterBar from "../components/FilterBar";
import ProblemItem from "../components/ProblemItem";
import AddProblem from "../components/AddProblem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  patternDescriptions,
  subPatternDescriptions,
} from "../data/patternDescriptions.js";

import Loader from "../components/Loader.jsx";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [openMap, setOpenMap] = useState({});

  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();

  // OAuth redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ name, email }));
      window.location.href = "/";
    }
  }, []);

  // Problems
  const { data: problems = [], isLoading } = useQuery({
    queryKey: ["problems"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/problems`,
      );
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  // User
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/me`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return res.data;
    },
    enabled: !!token,
  });

  const solved = userData?.solvedProblems || [];
  const streak = userData?.streak || 0;

  const toggleOpen = (key) => {
    setOpenMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // group data
  const groupedData = {};
  problems.forEach((p) => {
    const pattern = p.pattern || "Other";
    const sub = p.subPattern || "General";

    if (!groupedData[pattern]) groupedData[pattern] = {};
    if (!groupedData[pattern][sub]) groupedData[pattern][sub] = [];

    groupedData[pattern][sub].push(p);
  });

  // toggle solved
  const handleToggle = async (id) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/mark-done/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      queryClient.invalidateQueries(["user"]);
    } catch (err) {
      console.error(err);
    }
  };

  // stats
  const easyProblems = problems.filter((p) => p.difficulty === "Easy");
  const mediumProblems = problems.filter((p) => p.difficulty === "Medium");
  const hardProblems = problems.filter((p) => p.difficulty === "Hard");

  const easySolved = easyProblems.filter((p) => solved.includes(p._id)).length;
  const mediumSolved = mediumProblems.filter((p) =>
    solved.includes(p._id),
  ).length;
  const hardSolved = hardProblems.filter((p) => solved.includes(p._id)).length;

  return (
    <div className="bg-linear-to-br from-[#0B0B0F] via-[#0f0f1a] to-[#0B0B0F] min-h-screen text-white pt-20 overflow-x-hidden">
      {isLoading && <Loader />}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          <span className="text-white">Code Sheet for </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
            DSA Mastery
          </span>
        </h1>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          Track your journey to cracking the coding interview.
        </p>

        {userData?.isAdmin && (
          <button
            onClick={() => setShowModal(true)}
            className="mb-6 px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/20 rounded-lg font-semibold"
          >
            + Add Problem
          </button>
        )}

        {showModal && (
          <AddProblem
            onClose={() => setShowModal(false)}
            onSuccess={() => queryClient.invalidateQueries(["problems"])}
          />
        )}

        {/* Dashboard */}
        {token && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-2">
              <Dashboard solved={solved.length} total={problems.length} />
            </div>

            <RightStats
              easy={{ solved: easySolved, total: easyProblems.length }}
              medium={{ solved: mediumSolved, total: mediumProblems.length }}
              hard={{ solved: hardSolved, total: hardProblems.length }}
              streak={streak}
            />
          </div>
        )}

        {/* Filter */}
        <FilterBar />

        {/* Patterns */}
        {Object.keys(groupedData).map((pattern) => (
          <div key={pattern} className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-300">
              {pattern}
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">
              {patternDescriptions[pattern] ||
                `Master ${pattern} patterns step by step.`}
            </p>

            {Object.keys(groupedData[pattern]).map((sub) => {
              const list = groupedData[pattern][sub];

              const solvedCount = list.filter((p) =>
                solved.some((id) => id.toString() === p._id),
              ).length;

              const key = pattern + "-" + sub;
              const isOpen = openMap[key];

              return (
                <div key={sub} className="mb-3">
                  {/* Accordion Header */}
                  <div
                    onClick={() => toggleOpen(key)}
                    className="bg-[#111827]/80 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 cursor-pointer hover:bg-[#151515] transition"
                  >
                    <div className="flex items-start gap-3">
                      <KeyboardArrowRightIcon
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        } text-purple-400`}
                      />

                      <div>
                        <h3 className="font-semibold text-gray-200 text-sm sm:text-base">
                          {sub}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {subPatternDescriptions[sub]}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                      <span className="text-xs sm:text-sm text-gray-400">
                        {solvedCount}/{list.length}
                      </span>

                      <div className="w-full sm:w-32 h-2 bg-gray-800 rounded">
                        <div
                          className="h-2 bg-purple-500 shadow-md shadow-purple-500/40 rounded"
                          style={{
                            width: `${(solvedCount / list.length) * 100}%`,
                            transition: "width 0.5s ease",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-250" : "max-h-0"
                    }`}
                  >
                    <div className="bg-[#0f0f0f]/80 backdrop-blur-md rounded-xl border border-gray-800">
                      {list.map((p) => (
                        <ProblemItem
                          key={p._id}
                          problem={p}
                          solved={solved}
                          onToggle={handleToggle}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
