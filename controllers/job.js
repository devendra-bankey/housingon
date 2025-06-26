const getAllJobs = async (req, res) => {
  console.log("getAllJobs called");
  res.status(200).json({ message: "Get all jobs" });
};

const createJob = async (req, res) => {
  console.log("createJob called", req.body);
  res.status(201).json({ message: "Job created" });
};

const getJobById = async (req, res) => {
  console.log("getJobById called", req.params.id);
  res.status(200).json({ message: `Get job ${req.params.id}` });
};

const updateJobById = async (req, res) => {
  console.log("updateJobById called", req.params.id, req.body);
  res.status(200).json({ message: `Updated job ${req.params.id}` });
};

const deleteJobById = async (req, res) => {
  console.log("deleteJobById called", req.params.id);
  res.status(200).json({ message: `Deleted job ${req.params.id}` });
};

const getJobStatus = async (req, res) => {
  console.log("getJobStatus called", req.params.id);
  res.status(200).json({ message: `Status for job ${req.params.id}` });
};

const updateJobStatus = async (req, res) => {
  console.log("updateJobStatus called", req.params.id, req.body);
  res.status(200).json({ message: `Updated status for job ${req.params.id}` });
};

const assignContractor = async (req, res) => {
  console.log("assignContractor called", req.body);
  res.status(200).json({ message: "Contractor assigned" });
};

const uploadAttachments = async (req, res) => {
  console.log("uploadAttachments called", req.params.id, req.body);
  res
    .status(200)
    .json({ message: `Attachments uploaded for job ${req.params.id}` });
};

const closeJob = async (req, res) => {
  console.log("closeJob called", req.params.id);
  res.status(200).json({ message: `Job ${req.params.id} closed` });
};

const openJob = async (req, res) => {
  console.log("openJob called", req.params.id);
  res.status(200).json({ message: `Job ${req.params.id} opened` });
};

const holdJob = async (req, res) => {
  console.log("holdJob called", req.params.id);
  res.status(200).json({ message: `Job ${req.params.id} put on hold` });
};

const archiveJob = async (req, res) => {
  console.log("archiveJob called", req.params.id);
  res.status(200).json({ message: `Job ${req.params.id} archived` });
};

const changePriority = async (req, res) => {
  console.log("changePriority called", req.params.id, req.body);
  res
    .status(200)
    .json({ message: `Priority changed for job ${req.params.id}` });
};

export {
  getAllJobs,
  createJob,
  getJobById,
  updateJobById,
  deleteJobById,
  getJobStatus,
  updateJobStatus,
  assignContractor,
  uploadAttachments,
  closeJob,
  openJob,
  holdJob,
  archiveJob,
  changePriority,
};
