export const toggleSaved = async (req, res) => {
  try {
    const user = req.user;
    const { problemId } = req.params;

    const index = user.solvedProblems.findIndex(
      (id) => id.toString() === problemId,
    );

    // ❌ UNSOLVE (no streak change)
    if (index > -1) {
      user.solvedProblems.splice(index, 1);
      await user.save();

      return res.json({ message: "Unmarked" });
    }

    // ✅ SOLVE (streak logic here)
    user.solvedProblems.push(problemId);

    const today = new Date().toISOString().split("T")[0];

    if (!user.lastSolvedDate) {
      user.streak = 1;
    } else {
      const last = new Date(user.lastSolvedDate);
      const current = new Date(today);

      const diff = (current - last) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        user.streak += 1; // continue
      } else if (diff > 1) {
        user.streak = 1; // reset
      }
      // diff === 0 → same day → no change
    }

    user.lastSolvedDate = today;

    await user.save();

    return res.json({ message: "Marked as done", streak: user.streak });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMe = async (req, res) => {
  res.json({
    solvedProblems: req.user.solvedProblems,
    streak: req.user.streak,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  });
};