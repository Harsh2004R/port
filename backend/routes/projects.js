const express = require("express");
const router = express.Router();
const {
  getProjects,
  getFeaturedProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  toggleFeatured,
} = require("../controllers/projectController");
const adminAuth = require("../middleware/adminAuth");

// Public routes
router.route("/").get(getProjects);

router.route("/featured").get(getFeaturedProjects);

router.route("/:id").get(getProject);

// Protected routes (Admin only)
router.route("/add").post(adminAuth, createProject);

router
  .route("/:id")
  .put(adminAuth, updateProject)
  .delete(adminAuth, deleteProject);

router.route("/:id/featured").patch(adminAuth, toggleFeatured);

module.exports = router;
