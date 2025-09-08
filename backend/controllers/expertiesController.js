const Experty = require("../models/Experty");

// @desc    Get all experties
// @route   GET /api/v1/experties
// @access  Public
const getExperties = async (req, res, next) => {
  try {
    const items = await Experty.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new experty
// @route   POST /api/v1/experties
// @access  Private (Admin only)
const createExperty = async (req, res, next) => {
  try {
    const item = await Experty.create(req.body);
    res
      .status(201)
      .json({
        success: true,
        message: "Experty created successfully",
        data: item,
      });
  } catch (error) {
    next(error);
  }
};

// @desc    Update experty
// @route   PATCH /api/v1/experties/:id
// @access  Private (Admin only)
const updateExperty = async (req, res, next) => {
  try {
    const item = await Experty.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Experty not found" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Experty updated successfully",
        data: item,
      });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete experty
// @route   DELETE /api/v1/experties/:id
// @access  Private (Admin only)
const deleteExperty = async (req, res, next) => {
  try {
    const item = await Experty.findByIdAndDelete(req.params.id);
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Experty not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Experty deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getExperties,
  createExperty,
  updateExperty,
  deleteExperty,
};
