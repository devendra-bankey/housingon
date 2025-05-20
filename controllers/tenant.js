const getAllJobsForTenant = async (req, res) => {
  res.status(200).json({ message: "All jobs for tenant" });
};
const createJobForTenant = async (req, res) => {
  res.status(201).json({ message: "Job created by tenant" });
};
const getSingleJob = async (req, res) => {
  res.status(200).json({ message: "Single job details for tenant" });
};
const updateJobForTenant = async (req, res) => {
  res.status(200).json({ message: "Job updated by tenant" });
};
const uploadJobAttachments = async (req, res) => {
  res.status(200).json({ message: "Job attachments uploaded" });
};
const getJobStatus = async (req, res) => {
  res.status(200).json({ message: "Job status fetched" });
};
const getRentStatements = async (req, res) => {
  res.status(200).json({ message: "Rent statements fetched" });
};
const getRentDueInfo = async (req, res) => {
  res.status(200).json({ message: "Rent due info fetched" });
};
const initiateRentPayment = async (req, res) => {
  res.status(200).json({ message: "Rent payment initiated" });
};
const getMaintenanceDeductions = async (req, res) => {
  res.status(200).json({ message: "Maintenance deductions fetched" });
};
const getTenantPropertyDetails = async (req, res) => {
  res.status(200).json({ message: "Tenant property and landlord details" });
};
const getLeaseDetails = async (req, res) => {
  res.status(200).json({ message: "Lease details fetched" });
};

export {
  getAllJobsForTenant,
  createJobForTenant,
  getSingleJob,
  updateJobForTenant,
  uploadJobAttachments,
  getJobStatus,
  getRentStatements,
  getRentDueInfo,
  initiateRentPayment,
  getMaintenanceDeductions,
  getTenantPropertyDetails,
  getLeaseDetails,
};
