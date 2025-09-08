const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const {
  getExperties,
  createExperty,
  updateExperty,
  deleteExperty,
} = require("../controllers/expertiesController");

// Public: GET all experties
router.route("/").get(getExperties).post(adminAuth, createExperty);

// Protected: PATCH and DELETE by id
router
  .route("/:id")
  .patch(adminAuth, updateExperty)
  .delete(adminAuth, deleteExperty);

module.exports = router;
