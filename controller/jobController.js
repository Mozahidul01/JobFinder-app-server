const Job = require("../model/jobModel");

//For getting all job
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//For getting job by id
exports.getJob = async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//For adding job
exports.createJob = async (req, res) => {
  try {
    const { title, type, salary, deadline } = req.body;

    const job = new Job({ title, type, salary, deadline });

    const result = await job.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//For replacing job (PUT request)
exports.replaceJob = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const options = { new: true };
    const result = await Job.findOneAndReplace({ _id: id }, data, options);
    if (!result) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//For updating job (PATCH request)
exports.updateJob = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const options = { new: true };
    const result = await Job.findOneAndUpdate({ _id: id }, data, options);
    if (!result) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//For delete job by id
exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
