import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // generate JWT
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.redirect(
      `http://localhost:5173/?token=${token}&name=${encodeURIComponent(req.user.name)}&email=${req.user.email}`,
    );
  },
);

export default router;
