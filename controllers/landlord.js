const getPropertyById = (req, res) => {
  // TODO: Get my property by ID (landlordId: req.params.id, propertyId: req.params.propertyId)
  res.status(200).json({ message: "Get property by ID" });
};

const updatePropertyById = (req, res) => {
  // TODO: Update my property by ID
  res.status(200).json({ message: "Update property by ID" });
};

const deletePropertyById = (req, res) => {
  // TODO: Delete my property by ID
  res.status(200).json({ message: "Delete property by ID" });
};

const getAllProperties = (req, res) => {
  // TODO: Get all properties for this landlord
  res.status(200).json({ message: "Get all properties" });
};

const getAllJobsOnProperties = (req, res) => {
  // TODO: Get all jobs on my properties
  res.status(200).json({ message: "Get all jobs on properties" });
};

const getJobById = (req, res) => {
  // TODO: Get a single job using job ID
  res.status(200).json({ message: "Get job by ID" });
};

const getAllJobsOnProperty = (req, res) => {
  // TODO: Get all jobs on a specific property using property ID
  res.status(200).json({ message: "Get all jobs on property" });
};

const getAllTenants = (req, res) => {
  // TODO: Get all tenants for this landlord
  res.status(200).json({ message: "Get all tenants" });
};

const getTenantByProperty = (req, res) => {
  // TODO: Get tenant info for a single property
  res.status(200).json({ message: "Get tenant by property ID" });
};

export default {
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
