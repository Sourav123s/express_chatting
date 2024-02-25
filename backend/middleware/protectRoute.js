const JWT = require("jsonwebtoken");
const User = require("../models/user.model.js");

async function protectedRouter(req, res, next) {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });
    }

    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User Not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectedRouter:", error);
    return res.json({
      message: "Something went wrong!",
      statusCode: 500,
    });
  }
}

module.exports = {
  protectedRouter,
};
