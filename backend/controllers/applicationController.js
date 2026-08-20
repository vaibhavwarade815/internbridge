const Application = require("../models/Application");

// Apply for an internship
const applyInternship = async (req, res) => {
  try {
    const { userId, internshipId } = req.body;

    // Check required fields
    if (!userId || !internshipId) {
      return res.status(400).json({
        success: false,
        message: "User ID and Internship ID are required",
      });
    }

    // Check if already applied
    const existingApplication = await Application.findOne({
      user: userId,
      internship: internshipId,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this internship",
      });
    }

    // Create application
    const application = await Application.create({
      user: userId,
      internship: internshipId,
      status: "Applied",
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully 🎉",
      application,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to submit application",
    });
  }
};


// Get user's applications
const getUserApplications = async (req, res) => {
  try {
    const { userId } = req.params;

    const applications = await Application.find({
      user: userId,
    })
      .populate("internship")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
    });
  }
};


module.exports = {
  applyInternship,
  getUserApplications,
};