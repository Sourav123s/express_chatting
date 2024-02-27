const User = require("../models/user.model.js");

async function getUser(req, res) {
  try {
    const loggedInUser = req.user;
    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select([
      "-password",
      "-createdAt",
      "-updatedAt",
      "-userName",
      "-phone",
    ]);

    return res.json({
      result: allUsers,
      statusCode: 200,
    });
  } catch (error) {
    console.log("Error get user:", error);
    return res.json({
      error: "Something went wrong!",
      statusCode: 500,
    });
  }
}

module.exports = {
  getUser,
};
