import contractor from "../models/contractor.js";
import landlord from "../models/landlord.js";
import tenant from "../models/tenant.js";
import user from "../models/user.js";

// ===== TENANTS =====
const addTenant = async (req, res) => {
  try {
    const { userId, fullname, email, loginAccess, stayDetails } = req.body;
    res.status(201).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getTenantList = async (req, res) => {
  try {
    const tenants = await tenant.find({});
    res.status(200).json({ message: "", data: tenants });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getTenant = async (req, res) => {
  try {
    const { id } = req.params;
    const tenant = await tenant.findById(id);
    res.status(200).json({ message: "", data: tenant });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

const updateTenant = async (req, res) => {
  try {
    const { id } = req.params; // Tenant ID
    const { fullname, loginAccess, stayDetails } = req.body;

    // Check if at least one field is valid
    if (
      !fullname &&
      typeof loginAccess === "undefined" &&
      (!stayDetails || stayDetails.length === 0)
    ) {
      return res.status(400).json({
        message: "No valid fields provided for update",
      });
    }

    // Prepare update object
    const updateData = {};
    if (fullname) updateData.fullname = fullname;
    if (typeof loginAccess !== "undefined")
      updateData.loginAccess = loginAccess;

    // Update tenant basic info
    const updatedTenant = await tenant.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedTenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }

    // Push stayDetails separately if exists
    if (stayDetails && Array.isArray(stayDetails) && stayDetails.length > 0) {
      await tenant.findByIdAndUpdate(
        id,
        { $push: { stayDetails: { $each: stayDetails } } },
        { new: true }
      );
    }

    // Update linked user if exists
    if (updatedTenant.userId) {
      const linkedUser = await user.findById(updatedTenant.userId);
      if (linkedUser) {
        if (fullname) linkedUser.fullname = fullname;
        if (typeof loginAccess !== "undefined")
          linkedUser.loginAccess = loginAccess;
        await linkedUser.save();
      }
    }

    res.status(200).json({
      message: "Tenant updated successfully",
      tenant: await tenant.findById(id), // return fresh data
    });
  } catch (err) {
    console.error("Update Tenant Error:", err);
    res.status(500).json({ message: "Failed to update tenant" });
  }
};

const deleteTenant = async (req, res) => {
  try {
    const { id } = req.params;
    const foundTenant = await tenant.findById(id);
    if (!foundTenant)
      return res.status(404).json({ message: "Tenant not found" });
    if (foundTenant.userId) await user.findByIdAndDelete(foundTenant.userId);
    await tenant.findByIdAndDelete(id);
    res.status(200).json({ message: "Tenant deleted successfully" });
  } catch (err) {
    console.error("Delete Tenant Error:", err);
    res.status(500).json({ message: "Failed to delete tenant" });
  }
};

// ===== LANDLORDS =====
const addLandlord = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getLandlordList = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getLandlord = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const updateLandlord = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const deleteLandlord = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

// ===== CONTRACTORS =====
const addContractor = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getContractorList = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const getContractor = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const updateContractor = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};
const deleteContractor = async (req, res) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

export {
  // Tenants
  addTenant,
  getTenantList,
  getTenant,
  updateTenant,
  deleteTenant,
  // Landlords
  addLandlord,
  getLandlordList,
  getLandlord,
  updateLandlord,
  deleteLandlord,
  // Contractors
  addContractor,
  getContractorList,
  getContractor,
  updateContractor,
  deleteContractor,
};
