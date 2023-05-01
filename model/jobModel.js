const mongoose = require("mongoose");

//schema for the job model
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
});

// Job model using the jobSchema
const Job = mongoose.model("Job", jobSchema);

// Export the Job model
module.exports = Job;
