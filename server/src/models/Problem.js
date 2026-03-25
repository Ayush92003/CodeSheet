import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    links: {
      leetcode: String,
      gfg: String,
    },
    pattern: {
      type: String,
      required: true,
    },
    subPattern: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      default: "",
    },
    solution: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
