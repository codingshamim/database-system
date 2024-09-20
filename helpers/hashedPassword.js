const bcrypt = require("bcryptjs");

const hashedPassword = async (plainpassword) => {
  const hashed = await bcrypt.hash(plainpassword, 10);
  return hashed;
};

module.exports = hashedPassword;
