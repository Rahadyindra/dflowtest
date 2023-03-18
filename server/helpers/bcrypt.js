const bcryptjs = require("bcryptjs");

function hashPassword(value) {
  const salt = bcryptjs.genSaltSync(8);
  const hash = bcryptjs.hashSync(value, salt);
  return hash;
}

function comparePassword(password, hashedPassword) {
  return bcryptjs.compareSync(password, hashedPassword);
}

module.exports = { hashPassword, comparePassword };
