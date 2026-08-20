const express = require("express");

const {
  getInternships,
  getInternshipById,
  createInternship,
} = require("../controllers/internshipController");

const router = express.Router();

// Get all internships
router.get("/", getInternships);

// Get single internship
router.get("/:id", getInternshipById);

// Create internship
router.post("/", createInternship);

module.exports = router;