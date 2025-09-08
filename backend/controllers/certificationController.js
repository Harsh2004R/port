const Certification = require("../models/Certification");

// @desc    Get all certifications
// @route   GET /api/v1/certifications
// @access  Public
const getCertifications = async (req, res, next) => {
  try {
    const items = await Certification.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new certification
// @route   POST /api/v1/certifications
// @access  Private (Admin only)
const createCertification = async (req, res, next) => {
  try {
    const name = (req.body.name || "").trim();
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Certification name is required" });
    }

    // Prevent duplicate by name (case-insensitive)
    const existing = await Certification.findOne({
      name: new RegExp(`^${name}$`, "i"),
    });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: `Certification with name "${name}" already exists`,
      });
    }

    const item = await Certification.create({ ...req.body, name });
    res.status(201).json({
      success: true,
      message: "Certification created successfully",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update certification
// @route   PATCH /api/v1/certifications/:id
// @access  Private (Admin only)
const updateCertification = async (req, res, next) => {
  try {
    const item = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Certification not found" });
    }
    res.status(200).json({
      success: true,
      message: "Certification updated successfully",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete certification
// @route   DELETE /api/v1/certifications/:id
// @access  Private (Admin only)
const deleteCertification = async (req, res, next) => {
  try {
    const item = await Certification.findByIdAndDelete(req.params.id);
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Certification not found" });
    }
    res.status(200).json({
      success: true,
      message: "Certification deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
};
