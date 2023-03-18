const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const Customer = require("../models/customer");

class CustomerController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        throw { name: "invalid" };
      }
      const hashedPass = hashPassword(password);

      await Customer.createCustomer({
        username,
        email,
        password: hashedPass,
      });
      res.status(201).json({
        message: "Register Successful",
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if ((!email, !password)) {
        throw { name: "invalid" };
      }
      const loginCustomer = await Customer.findByEmail(email);
      if (!loginCustomer) {
        throw { name: "badLogin" };
      }
      const checkPass = comparePassword(password, loginCustomer.password);
      if (!checkPass) {
        throw { name: "badLogin" };
      }
      res.status(201).json({
        message: "Login Successful!",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = CustomerController;
