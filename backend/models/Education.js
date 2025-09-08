const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: [true, "Degree is required"],
      trim: true,
      maxlength: [150, "Degree cannot exceed 150 characters"],
    },
    institution: {
      type: String,
      required: [true, "Institution is required"],
      trim: true,
      maxlength: [200, "Institution cannot exceed 200 characters"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      maxlength: [150, "Location cannot exceed 150 characters"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
      maxlength: [100, "Duration cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    achievements: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

educationSchema.pre("save", function (next) {
  if (Array.isArray(this.achievements)) {
    this.achievements = this.achievements.map((s) =>
      typeof s === "string" ? s.trim() : s
    );
  }
  next();
});

module.exports = mongoose.model("Education", educationSchema);
