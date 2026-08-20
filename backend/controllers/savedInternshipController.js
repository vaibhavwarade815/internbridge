const SavedInternship = require("../models/SavedInternship");

// Save internship
const saveInternship = async (req, res) => {
  try {
    const { userId, internshipId } = req.body;

    if (!userId || !internshipId) {
      return res.status(400).json({
        success: false,
        message: "User ID and Internship ID are required",
      });
    }

    const existingSaved = await SavedInternship.findOne({
      user: userId,
      internship: internshipId,
    });

    if (existingSaved) {
      return res.status(400).json({
        success: false,
        message: "Internship is already saved",
      });
    }

    const savedInternship = await SavedInternship.create({
      user: userId,
      internship: internshipId,
    });

    res.status(201).json({
      success: true,
      message: "Internship saved successfully ❤️",
      savedInternship,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to save internship",
    });
  }
};


// Get saved internships
const getSavedInternships = async (req, res) => {
  try {
    const { userId } = req.params;

    const savedInternships = await SavedInternship.find({
      user: userId,
    })
      .populate("internship")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: savedInternships.length,
      savedInternships,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch saved internships",
    });
  }
};


// Remove saved internship
const removeSavedInternship = async (req, res) => {
  try {
    const { userId, internshipId } = req.body;

    const deleted = await SavedInternship.findOneAndDelete({
      user: userId,
      internship: internshipId,
    });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Saved internship not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Internship removed from saved list",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to remove internship",
    });
  }
};


module.exports = {
  saveInternship,
  getSavedInternships,
  removeSavedInternship,
};