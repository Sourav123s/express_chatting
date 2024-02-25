const JWT = require("jsonwebtoken");

async function generateTokenAndSetCookies(userId, userName, res) {
  try {
    const token = JWT.sign({ userId, userName }, process.env.JWT_SECRET_KEY, {
      expiresIn: "15d",
    });
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true, // prevent xss attacks cross-site scripting attacks
      sameSite: "strict", //CRSF attack cross-site request forgery protection
      secure: process.env.NODE_ENV == "production",
    });
  } catch (error) {
    throw new Error(new Error("Couldn't generate the token"));
  }
}

module.exports = {
  generateTokenAndSetCookies,
};
