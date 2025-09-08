const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");

router.route("/").get(getExperiences).post(adminAuth, createExperience);

router
  .route("/:id")
  .patch(adminAuth, updateExperience)
  .delete(adminAuth, deleteExperience);

module.exports = router;
