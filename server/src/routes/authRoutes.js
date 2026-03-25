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
      `${process.env.FRONTEND_URL}/?token=${token}&name=${user.name}&email=${user.email}`,
    );
  },
);

export default router;
