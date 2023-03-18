const { verifyToken } = require("../helpers/jwt");
const Cart = require("../models/cart");
const Customer = require("../models/customer");

const customerAuthentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "loginFirst" };
    }

    const checkToken = verifyToken(access_token);
    if (!checkToken) {
      throw { name: "Invalid token" };
    }
    const { _id } = checkToken;
    const customer = await Customer.findById(_id);
    if (!customer) {
      throw { name: "Invalid token" };
    }
    req.customer = customer;
    next();
  } catch (err) {
    next(err);
  }
};

const customerAuthorization = async (req, res, next) => {
  try {
    const customer = req.customer;
    const { _id } = req.params;

    const findCart = await Cart.findById(_id);

    if (!findCart) {
      throw { name: "notFound" };
    }

    if (findCart.CustomerId !== customer._id) {
      throw { name: "forbidden" };
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { customerAuthentication, customerAuthorization };
