const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
} = require("../controllers/certificationController");

router.route("/").get(getCertifications).post(adminAuth, createCertification);

router
  .route("/:id")
  .patch(adminAuth, updateCertification)
  .delete(adminAuth, deleteCertification);

module.exports = router;
