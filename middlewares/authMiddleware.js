import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
  // const authHeader = req.headers.authorization;

  // console.log(req.cookies.accessToken);
  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   return res.status(401).json({ message: "No token provided" });
  // }
  // if (!accessToken || !accessToken.startsWith("accessToken=")) {
  //   return res.status(401).json({ message: "No token provided" });
  // }
  // const token = accessToken.split("=")[1]; // Splits "Bearer <token>" and extracts the token part
  try {
    const accessToken = req.cookies?.accessToken;
    // console.log(req.cookies?.accessToken);
    const token = accessToken;
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded; // contains id, userType, etc.
    next();
  } catch (err) {
    console.log(err);
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Access token expired" });
    }
    return res.status(403).json({ message: "Invalid token" });
  }
};
