const express = require("express");
const router = express.Router();

// Import jobController
const jobController = require("../controller/jobController");

// Define routes
router
  .get("/jobs", jobController.getAllJobs) // Route to get all jobs
  .get("/jobs/:id", jobController.getJob) // Route to get a single job by id
  .post("/jobs", jobController.createJob) // Route to create a new job
  .put("/jobs/:id", jobController.replaceJob) // Route to replace a job by id
  .patch("/jobs/:id", jobController.updateJob) // Route to update a job by id
  .delete("/jobs/:id", jobController.deleteJob); // Route to delete a job by id

// Export router
module.exports = router;
