import CodeIcon from "@mui/icons-material/Code";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT - BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <CodeIcon className="text-black" />
              </div>
              <h2 className="text-lg font-semibold">Code Sheet</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Master data structures and algorithms with curated problem sheets.
              Track your progress and ace technical interviews.
            </p>
          </div>

          {/* CENTER - QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">
              QUICK LINKS
            </h3>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">
                Problem Sheets
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/ayushkumar-bit"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ayushkumar_0912/"
                className="hover:text-white transition"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* RIGHT - RESOURCES */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">
              RESOURCES
            </h3>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a
                target="_blank"
                href="https://leetcode.com/"
                className="hover:text-white transition"
              >
                LeetCode
              </a>
              <a
                target="_blank"
                href="https://www.geeksforgeeks.org/"
                className="hover:text-white transition"
              >
                GeeksforGeeks
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/"
                className="hover:text-white transition"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Code Sheet. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
