const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const Cart = require("../models/cart");
const Customer = require("../models/customer");
const Product = require("../models/product");

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

      const access_token = createToken({
        email: loginCustomer.email,
        username: loginCustomer.username,
        _id: loginCustomer._id,
      });

      res.status(201).json({
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async buyProduct(req, res, next) {
    try {
      const { productId } = req.params;
      const checkProduct = await Product.findById(productId);
      if (!checkProduct) {
        throw { name: "notFound" };
      }
      const { _id, ...productWithoutId } = checkProduct;
      await Cart.postCart({
        ...productWithoutId,
        CustomerId: req.customer._id,
      });

      res.status(201).json({
        message: `Product ${checkProduct.status}ed`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getAllCart(req, res, next) {
    try {
      const { _id } = req.customer;
      const getCarts = await Cart.findAll(_id);
      res.status(200).json(getCarts);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteCart(req, res, next) {
    try {
      const { productId } = req.params;
      await Cart.delete(productId);
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CustomerController;
