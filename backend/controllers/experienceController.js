const Experience = require("../models/Experience");

// @desc    Get all experiences
// @route   GET /api/v1/experience
// @access  Public
const getExperiences = async (req, res, next) => {
  try {
    const items = await Experience.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new experience
// @route   POST /api/v1/experience
// @access  Private (Admin only)
const createExperience = async (req, res, next) => {
  try {
    const companyName = (req.body.companyName || "").trim();
    if (!companyName) {
      return res
        .status(400)
        .json({ success: false, message: "Company name is required" });
    }

    // Prevent duplicate by companyName (case-insensitive)
    const existing = await Experience.findOne({
      companyName: new RegExp(`^${companyName}$`, "i"),
    });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: `Experience for company "${companyName}" already exists`,
      });
    }

    const item = await Experience.create({ ...req.body, companyName });
    res.status(201).json({
      success: true,
      message: "Experience created successfully",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update experience
// @route   PATCH /api/v1/experience/:id
// @access  Private (Admin only)
const updateExperience = async (req, res, next) => {
  try {
    const item = await Experience.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Experience not found" });
    }

    res.status(200).json({
      success: true,
      message: "Experience updated successfully",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete experience
// @route   DELETE /api/v1/experience/:id
// @access  Private (Admin only)
const deleteExperience = async (req, res, next) => {
  try {
    const item = await Experience.findByIdAndDelete(req.params.id);
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Experience not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Experience deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};
