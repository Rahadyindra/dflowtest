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
      await Product.createProduct({ name, price, imgUrl, description });

      res.status(201).json({
        message: "Successfully created a product",
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { _id } = req.params;
      const { product } = req.body;

      await Product.updateProduct({ product, _id });

      res.status(201).json({
        message: `Successfully updated product ${_id}`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { _id } = req.params;

      await Product.delete(_id);

      res.status(201).json({
        message: `Successfully deleted product ${_id}`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
