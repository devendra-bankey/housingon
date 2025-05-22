export const authorizeRoles = (...allowedRoles) => {
  // rest operator for handling multiple roles(parameters)
  // args = ["1", "2", "3"]
  (req, res, next) => {
    const userType = req.user?.userType;
    if (!allowedRoles.includes(userType))
      return res.status(403).json({ message: "Access denied" });
    next();
  };
};

export const Roles = {
  PROPERTY_MANAGER: "1",
  CONTRACTOR: "2",
  TENANT: "3",
  LANDLORD: "4",
};

// it's a higher order function that accepts a function as an argument or returns a fnc
// commonly used for middlewares
