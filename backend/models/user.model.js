const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: "string",
      required: true,
    },
    userName: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    phone: {
      type: String,
      required: false,
      default: "",
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
