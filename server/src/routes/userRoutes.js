import express from "express";
import { getMe, toggleSaved } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/mark-done/:problemId", protect, toggleSaved);
router.get("/me", protect, getMe);

export default router;