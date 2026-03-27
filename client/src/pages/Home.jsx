import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "../components/Dashboard";
import RightStats from "../components/RightStats";
import FilterBar from "../components/FilterBar";
import ProblemItem from "../components/ProblemItem";
import AddProblem from "../components/AddProblem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRef } from "react";
import {
  patternDescriptions,
  subPatternDescriptions,
} from "../data/patternDescriptions.js";
import Loader from "../components/Loader.jsx";

export default function Home() {
  const [problems, setProblems] = useState([]);
  const [solved, setSolved] = useState([]);
  const [streak, setStreak] = useState(0);
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openMap, setOpenMap] = useState({});
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const contentRefs = useRef({});

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

  useEffect(() => {
    const fetchData = async () => {
      console.log("ENV:", import.meta.env.VITE_API_URL);
      setLoading(true);
      try {
        const p = await axios.get(`${import.meta.env.VITE_API_URL}/api/problems`);
        setProblems(p.data);

        if (token) {
          const u = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setSolved(u.data.solvedProblems);
          setStreak(u.data.streak);
          setUserData(u.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const toggleOpen = (key) => {
    setOpenMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const groupedData = {};

  problems.forEach((p) => {
    const pattern = p.pattern || "Other";
    const sub = p.subPattern || "General"; // 🔥 FIX

    if (!groupedData[pattern]) {
      groupedData[pattern] = {};
    }

    if (!groupedData[pattern][sub]) {
      groupedData[pattern][sub] = [];
    }

    groupedData[pattern][sub].push(p);
  });

  const handleToggle = async (id) => {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/users/mark-done/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    setSolved((prev) => {
      const exists = prev.some((x) => x.toString() === id);

      return exists ? prev.filter((x) => x.toString() !== id) : [...prev, id];
    });

    if (res.data.streak !== undefined) {
      setStreak(res.data.streak);
    }
  };

  const fetchData = async () => {
    try {
      const p = await axios.get(`${import.meta.env.VITE_API_URL}/api/problems`);
      setProblems(p.data);

      if (token) {
        const u = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setSolved(u.data.solvedProblems);
        setStreak(u.data.streak);
        setUserData(u.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const easyProblems = problems.filter((p) => p.difficulty === "Easy");
  const mediumProblems = problems.filter((p) => p.difficulty === "Medium");
  const hardProblems = problems.filter((p) => p.difficulty === "Hard");

  const easySolved = easyProblems.filter((p) => solved.includes(p._id)).length;
  const mediumSolved = mediumProblems.filter((p) =>
    solved.includes(p._id),
  ).length;
  const hardSolved = hardProblems.filter((p) => solved.includes(p._id)).length;

  if (loading) return <Loader />;

  return (
    <div className="page-enter bg-black min-h-screen text-white pt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">Code Sheet for DSA Mastery</h1>
        <p className="text-gray-400 mb-6">
          Track your journey to cracking the coding interview.
        </p>

        {userData?.isAdmin && (
          <button
            onClick={() => setShowModal(true)}
            className="mb-6 cursor-pointer px-5 py-2 bg-green-500 text-black rounded-lg font-semibold"
          >
            + Add Problem
          </button>
        )}

        {showModal && (
          <AddProblem
            onClose={() => setShowModal(false)}
            onSuccess={fetchData} // simple for now
          />
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button className="px-6 py-3 rounded-xl bg-green-900 border border-green-500">
            Pattern-Wise
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-700 text-gray-400">
            Last Minute 100
          </button>
        </div>

        {/* 🔥 CONDITIONAL DASHBOARD */}
        {token && (
          <div className="grid grid-cols-3 gap-6 mb-10 items-stretch">
            <div className="col-span-2">
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

        {/* 🔥 FILTER + LIST (always visible) */}
        <FilterBar />

        {/* 🔥 NEW PATTERN UI */}
        {Object.keys(groupedData).map((pattern) => (
          <div key={pattern} className="mt-10">
            <h2 className="text-2xl font-bold">{pattern}</h2>

            <p className="text-gray-400 text-sm mb-5">
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
                  {/* HEADER */}
                  <div
                    onClick={() => toggleOpen(key)}
                    className="bg-[#111] p-5 rounded-xl border border-gray-800 flex items-center justify-between cursor-pointer hover:bg-[#151515] transition"
                  >
                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-3">
                      {/* ICON LEFT */}
                      <KeyboardArrowRightIcon
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        } text-green-500`}
                      />

                      <div>
                        <h3 className="font-semibold text-gray-200">{sub}</h3>
                        <p className="text-sm text-gray-500">
                          {subPatternDescriptions[sub] ||
                            "Practice problems for mastery."}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">
                        {solvedCount}/{list.length}
                      </span>

                      <div className="w-32 h-2 bg-gray-800 rounded">
                        <div
                          className="h-2 bg-green-500 rounded"
                          style={{
                            width: `${(solvedCount / list.length) * 100}%`,
                            transition: "width 0.5s ease",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 🔥 ACCORDION */}
                  <div
                    style={{
                      height: isOpen
                        ? contentRefs.current[key]?.scrollHeight + "px"
                        : "0px",
                      transition: "height 0.3s ease",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      ref={(el) => (contentRefs.current[key] = el)}
                      className="bg-[#0f0f0f] rounded-xl border border-gray-800"
                    >
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
