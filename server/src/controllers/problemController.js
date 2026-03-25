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
