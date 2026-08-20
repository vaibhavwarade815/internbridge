const express = require("express");

const {
  applyInternship,
  getUserApplications,
} = require("../controllers/applicationController");

const router = express.Router();

// Apply for internship
router.post("/apply", applyInternship);

// Get user's applications
router.get("/user/:userId", getUserApplications);

module.exports = router;