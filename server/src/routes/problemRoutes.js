import express from "express";
import { createProblem, getProblems } from "../controllers/problemController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, adminOnly, createProblem);
router.get("/", getProblems);

export default router;