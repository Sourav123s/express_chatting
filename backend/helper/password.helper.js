const bcryptJs = require("bcryptjs");

async function hashPassword(password) {
  try {
    const salt = await bcryptJs.genSalt(10);
    const passwordHash = await bcryptJs.hash(password, salt);
    return passwordHash;
  } catch (error) {
    console.log(error);
    // throw new Error(new Error("Password not hased"));
  }
}

async function checkPassword(password, hashPassword) {
  return await bcryptJs.compare(password, hashPassword);
}

module.exports = {
  hashPassword,
  checkPassword,
};
