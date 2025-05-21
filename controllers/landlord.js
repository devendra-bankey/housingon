const getPropertyById = (req, res) => {
  // TODO: Get my property by ID (landlordId: req.params.id, propertyId: req.params.propertyId)
  try {
    res.status(200).json({ message: "Get property by ID" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

const updatePropertyById = (req, res) => {
  // TODO: Update my property by ID
  try {
    res.status(200).json({ message: "Update property by ID" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

const deletePropertyById = (req, res) => {
  // TODO: Delete my property by ID
  try {
    res.status(200).json({ message: "Delete property by ID" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

const getAllProperties = (req, res) => {
  // TODO: Get all properties for this landlord
  try {
    res.status(200).json({ message: "Get all properties" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

const getAllJobsOnProperties = (req, res) => {
  // TODO: Get all jobs on my properties
  try {
    res.status(200).json({ message: "Get all jobs on properties" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

const getJobById = (req, res) => {
  // TODO: Get a single job using job ID
  try {
    res.status(200).json({ message: "Get job by ID" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

const getAllJobsOnProperty = (req, res) => {
  // TODO: Get all jobs on a specific property using property ID
  try {
    res.status(200).json({ message: "Get all jobs on property" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

const getAllTenants = (req, res) => {
  // TODO: Get all tenants for this landlord
  try {
    res.status(200).json({ message: "Get all tenants" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

const getTenantByProperty = (req, res) => {
  // TODO: Get tenant info for a single property
  try {
    res.status(200).json({ message: "Get tenant by property ID" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to " });
  }
};

export {
  getPropertyById,
  updatePropertyById,
  deletePropertyById,
  getAllProperties,
  getAllJobsOnProperties,
  getJobById,
  getAllJobsOnProperty,
  getAllTenants,
  getTenantByProperty,
};
