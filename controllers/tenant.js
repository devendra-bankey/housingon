import tenant from "../models/tenant.js";

const getAllJobsForTenant = async (req, res) => {
  try {
    res.status(200).json({ message: "All jobs for tenant" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const createJobForTenant = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
  res.status(201).json({ message: "Job created by tenant" });
};
const getSingleJob = async (req, res) => {
  try {
    res.status(200).json({ message: "Single job details for tenant" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const updateJobForTenant = async (req, res) => {
  try {
    res.status(200).json({ message: "Job updated by tenant" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const uploadJobAttachments = async (req, res) => {
  try {
    res.status(200).json({ message: "Job attachments uploaded" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getJobStatus = async (req, res) => {
  try {
    res.status(200).json({ message: "Job status fetched" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getRentStatements = async (req, res) => {
  try {
    res.status(200).json({ message: "Rent statements fetched" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getRentDueInfo = async (req, res) => {
  try {
    res.status(200).json({ message: "Rent due info fetched" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const initiateRentPayment = async (req, res) => {
  try {
    res.status(200).json({ message: "Rent payment initiated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getMaintenanceDeductions = async (req, res) => {
  try {
    res.status(200).json({ message: "Maintenance deductions fetched" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getTenantPropertyDetails = async (req, res) => {
  try {
    res.status(200).json({ message: "Tenant property and landlord details" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getLeaseDetails = async (req, res) => {
  try {
    res.status(200).json({ message: "Lease details fetched" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
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
