const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Certification name is required"],
      trim: true,
      maxlength: [200, "Certification name cannot exceed 200 characters"],
    },
    issuer: {
      type: String,
      required: [true, "Issuer is required"],
      trim: true,
      maxlength: [200, "Issuer cannot exceed 200 characters"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
      trim: true,
      maxlength: [100, "Date cannot exceed 100 characters"],
    },
    credential: {
      type: String,
      required: [true, "Credential is required"],
      trim: true,
      maxlength: [300, "Credential cannot exceed 300 characters"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Certification", certificationSchema);
