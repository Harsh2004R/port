const Education = require("../models/Education");

// @desc    Get all education entries
// @route   GET /api/v1/education
// @access  Public
const getEducation = async (req, res, next) => {
  try {
    const items = await Education.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new education
// @route   POST /api/v1/education
// @access  Private (Admin only)
const createEducation = async (req, res, next) => {
  try {
    const item = await Education.create(req.body);
    res.status(201).json({
      success: true,
      message: "Education created successfully",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update education
// @route   PATCH /api/v1/education/:id
// @access  Private (Admin only)
const updateEducation = async (req, res, next) => {
  try {
    const item = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Education not found" });
    }
    res.status(200).json({
      success: true,
      message: "Education updated successfully",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete education
// @route   DELETE /api/v1/education/:id
// @access  Private (Admin only)
const deleteEducation = async (req, res, next) => {
  try {
    const item = await Education.findByIdAndDelete(req.params.id);
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Education not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Education deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
};
