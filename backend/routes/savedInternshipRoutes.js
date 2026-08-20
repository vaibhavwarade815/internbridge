const express = require("express");

const {
  saveInternship,
  getSavedInternships,
  removeSavedInternship,
} = require("../controllers/savedInternshipController");

const router = express.Router();

// Save internship
router.post("/save", saveInternship);

// Get user's saved internships
router.get("/user/:userId", getSavedInternships);

// Remove saved internship
router.delete("/remove", removeSavedInternship);

module.exports = router;