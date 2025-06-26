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
    const { fullname, email, phone, loginAccess } = req.body;

    if (!fullname || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newUser = new user({
      fullname,
      email,
      phone,
      loginAccess,
      role: "landlord",
    });

    const savedUser = await newUser.save();

    const newLandlord = new landlord({
      fullname,
      email,
      phone,
      loginAccess,
      userId: savedUser._id,
    });

    const savedLandlord = await newLandlord.save();

    res
      .status(201)
      .json({ message: "Landlord created", landlord: savedLandlord });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create landlord" });
  }
};

const getLandlordList = async (req, res) => {
  try {
    const landlords = await landlord.find();
    res.status(200).json({ landlords });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch landlords" });
  }
};

const getLandlord = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await landlord.findById(id);
    if (!found) {
      return res.status(404).json({ message: "Landlord not found" });
    }
    res.status(200).json({ landlord: found });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch landlord" });
  }
};

const updateLandlord = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, loginAccess } = req.body;

    const updated = await landlord.findByIdAndUpdate(
      id,
      { fullname, loginAccess },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Landlord not found" });
    }

    if (updated.userId) {
      const userDoc = await user.findById(updated.userId);
      if (userDoc) {
        if (fullname) userDoc.fullname = fullname;
        if (loginAccess !== undefined) userDoc.loginAccess = loginAccess;
        await userDoc.save();
      }
    }

    res.status(200).json({ message: "Landlord updated", landlord: updated });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update landlord" });
  }
};

const deleteLandlord = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await landlord.findById(id);
    if (!found) {
      return res.status(404).json({ message: "Landlord not found" });
    }

    if (found.userId) {
      await user.findByIdAndDelete(found.userId);
    }

    await landlord.findByIdAndDelete(id);

    res.status(200).json({ message: "Landlord deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete landlord" });
  }
};

// ===== CONTRACTORS =====
const addContractor = async (req, res) => {
  try {
    const { fullname, email, phone, loginAccess, trade } = req.body;

    if (!fullname || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newUser = new user({
      fullname,
      email,
      phone,
      loginAccess,
      role: "contractor",
    });

    const savedUser = await newUser.save();

    const newContractor = new contractor({
      fullname,
      email,
      phone,
      // loginAccess,
      trade,
      userId: savedUser._id,
    });

    const savedContractor = await newContractor.save();

    res
      .status(201)
      .json({ message: "Contractor created", contractor: savedContractor });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create contractor" });
  }
};

const getContractorList = async (req, res) => {
  try {
    const contractors = await contractor.find();
    res.status(200).json({ contractors });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch contractors" });
  }
};

const getContractor = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await contractor.findById(id);
    if (!found) {
      return res.status(404).json({ message: "Contractor not found" });
    }
    res.status(200).json({ contractor: found });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch contractor" });
  }
};

const updateContractor = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, loginAccess, trade } = req.body;

    const updated = await contractor.findByIdAndUpdate(
      id,
      { fullname, loginAccess, trade },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Contractor not found" });
    }

    if (updated.userId) {
      const userDoc = await user.findById(updated.userId);
      if (userDoc) {
        if (fullname) userDoc.fullname = fullname;
        if (loginAccess !== undefined) userDoc.loginAccess = loginAccess;
        await userDoc.save();
      }
    }

    res
      .status(200)
      .json({ message: "Contractor updated", contractor: updated });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update contractor" });
  }
};

const deleteContractor = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await contractor.findById(id);
    if (!found) {
      return res.status(404).json({ message: "Contractor not found" });
    }

    if (found.userId) {
      await user.findByIdAndDelete(found.userId);
    }

    await contractor.findByIdAndDelete(id);

    res.status(200).json({ message: "Contractor deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete contractor" });
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
