import Problem from "../models/Problem.js";

//CREATE
export const createProblem = async (req, res) => {
  try {
    const problem = await Problem.create(req.body);
    res.status(201).json(problem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET
export const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateProblem = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Problem.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Problem not found" });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
