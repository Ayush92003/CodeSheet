import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./config/db.js";
import problemRoutes from "./routes/problemRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import session from "express-session";
import passport from "./config/passport.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

// middleware to parse json data from request body
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, 
    cookie: {
      secure: true, 
      sameSite: "none",
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// route to add a problem to database
app.use("/api/problems", problemRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);


// server listening on port 5000

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  async function startServer() {
    try {
      await connectDB();
      console.log("Server is running on port 5000");
    } catch (error) {
      console.error("Error connecting to the database", error);
    }
  }
  startServer();
});
