const bcrypt = require("bcryptjs");

const comparePassword = async (plainpassword, hash) => {
  const compare = await bcrypt.compare(plainpassword, hash);
  return compare;
};

module.exports = comparePassword;
