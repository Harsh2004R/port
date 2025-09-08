const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController");

router.route("/").get(getEducation).post(adminAuth, createEducation);

router
  .route("/:id")
  .patch(adminAuth, updateEducation)
  .delete(adminAuth, deleteEducation);

module.exports = router;
