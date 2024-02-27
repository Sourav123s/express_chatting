const User = require("../models/user.model.js");
const { hashPassword, checkPassword } = require("../helper/password.helper.js");
const {
  generateTokenAndSetCookies,
} = require("../utils/generateToken.utils.js");

async function login(req, res) {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName: userName });

    if (!user) {
      return res.json({
        message: "Invalid username!",
        status: 401,
      });
    }

    //check password
    const isPasswordsValid = await checkPassword(password, user.password);

    if (!isPasswordsValid) {
      return res.json({
        message: "Invalid password!",
        status: 401,
      });
    }

    generateTokenAndSetCookies(user._id, user.userName, res);
    return res.json({
      result: {
        fullName: user.fullName,
        userName: user.userName,
        profilePicture: user.profilePicture,
        _id: user._id,
      },
      message: "Login successful",
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "Something went wrong!",
      statusCode: 500,
    });
  }
}
async function signUp(req, res) {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.json({
        message: "password not match with confirm password",
        statusCode: 400,
      });
    }
    const user = await User.findOne({ userName });

    if (user) {
      return res.json({
        message: "User already exists with this username",
        statusCode: 400,
      });
    }

    //Hash the password
    const haspPassword = await hashPassword(password);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      gender,
      password: haspPassword,
      profilePicture: gender == "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generate token
      await generateTokenAndSetCookies(newUser._id, newUser.userName, res);
      await newUser.save();

      return res.json({
        result: {
          fullName: newUser.fullName,
          userName: newUser.userName,
          profilePicture: newUser.profilePicture,
          _id: newUser._id,
        },
        message: "User created successfully",
        statusCode: 201,
      });
    } else {
      return res.json({
        message: "Invalid user data",
        statusCode: 400,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      error: "Something went wrong!",
      statusCode: 500,
    });
  }
}
async function logout(req, res) {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.json({
      message: "Logout successful",
      statusCode: 200,
    });
  } catch (error) {
    return res.json({
      error: "Something went wrong!",
      statusCode: 500,
    });
  }
}

module.exports = {
  login,
  signUp,
  logout,
};
