const Product = require("../models/product");

class Controller {
  static async getAllProducts(req, res, next) {
    try {
      const getProduct = await Product.findAll();
      res.status(200).json(getProduct);
    } catch (err) {
      next(err);
    }
  }

  static async createProduct(req, res, next) {
    try {
      const { name, price, imgUrl, description } = req.body;
      if (!name || !price || !imgUrl || !description) {
        throw { name: "invalid" };
      }
      await Product.createProduct();
      res.status(201).json({
        message: "Successfully created a product",
      });
    } catch (err) {
      next(err);
    }
  }
}
