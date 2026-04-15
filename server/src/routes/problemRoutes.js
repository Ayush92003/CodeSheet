import express from "express";
import { createProblem, getProblems, updateProblem } from "../controllers/problemController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, adminOnly, createProblem);
router.get("/", getProblems);
router.put("/update/:id", protect, adminOnly, updateProblem);

export default router;