const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      maxlength: [150, "Company name cannot exceed 150 characters"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      trim: true,
      maxlength: [100, "Role cannot exceed 100 characters"],
    },
    companyLocation: {
      type: String,
      required: [true, "Company location is required"],
      trim: true,
      maxlength: [150, "Company location cannot exceed 150 characters"],
    },
    duration: {
      type: String,
      required: [true, "Duration of work is required"],
      trim: true,
      maxlength: [100, "Duration cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    keyAchievements: {
      type: [String],
      default: [],
    },
    techStacks: {
      type: [String],
      required: [true, "Tech stacks are required"],
      validate: {
        validator: function (arr) {
          return Array.isArray(arr) && arr.length > 0;
        },
        message: "At least one tech stack is required",
      },
    },
    current: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

experienceSchema.pre("save", function (next) {
  if (Array.isArray(this.keyAchievements)) {
    this.keyAchievements = this.keyAchievements.map((s) =>
      typeof s === "string" ? s.trim() : s
    );
  }
  if (Array.isArray(this.techStacks)) {
    this.techStacks = this.techStacks.map((s) =>
      typeof s === "string" ? s.trim() : s
    );
  }
  next();
});

module.exports = mongoose.model("Experience", experienceSchema);
