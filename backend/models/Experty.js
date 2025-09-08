const mongoose = require("mongoose");

// Expertise ("Experty") schema
const expertySchema = new mongoose.Schema(
  {
    skillName: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
      maxlength: [100, "Skill name cannot exceed 100 characters"],
    },
    skillIcon: {
      type: String,
      required: [true, "Skill icon URL is required"],
      trim: true,
      maxlength: [500, "Skill icon URL cannot exceed 500 characters"],
    },
    subSkillNames: {
      type: [String],
      required: [true, "At least one sub skill is required"],
      validate: {
        validator: function (arr) {
          return Array.isArray(arr) && arr.length > 0;
        },
        message: "At least one sub skill is required",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Normalize subSkillNames to trimmed strings before save/update
expertySchema.pre("save", function (next) {
  if (Array.isArray(this.subSkillNames)) {
    this.subSkillNames = this.subSkillNames.map((s) =>
      typeof s === "string" ? s.trim() : s
    );
  }
  next();
});

module.exports = mongoose.model("Experty", expertySchema);
