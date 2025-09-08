const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "Project name is required"],
    trim: true,
    maxlength: [50, "Project name cannot be more than 50 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    maxlength: [500, "Description cannot be more than 500 characters"],
  },
  techStacks: {
    type: [String],
    required: [true, "Tech stacks are required"],
    validate: {
      validator: (arr) => arr.length >= 3,
      message: "At least three tech stack is required",
    },
  },
  liveLink: {
    type: String,
    required: [true, "Live link is required"],
    trim: true,
    maxlength: [200, "Live link cannot be more than 200 characters"],
  },
  githubLink: {
    type: String,
    required: [true, "Github link is required"],
    trim: true,
    maxlength: [200, "Github link cannot be more than 200 characters"],
  },
  projectImage: {
    type: String,
    required: [true, "Project image is required"],
    trim: true,
    maxlength: [500, "Project image URL cannot be more than 500 characters"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
projectSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Project", projectSchema);
