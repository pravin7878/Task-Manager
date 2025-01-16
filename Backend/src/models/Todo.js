const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    deadline: {
      type: Date,
      default: Date.now(),
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    reminder: {
      type: Date,
    },

    assignedTo: {
      type: String,
    },
    progress: {
      type: String,
      enum: ["pending", "in progress", "completed"], 
      default: "pending",
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { versionKey: false , timestamps : true}
);

const Todo = new mongoose.model("Todo", todoSchema);

module.exports = Todo;
