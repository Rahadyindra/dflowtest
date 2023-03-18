const Product = require("../models/product");

class ProductController {
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
      const checkProduct = await Product.findById(_id);

      if (!checkProduct) {
        throw { name: "notFound" };
      }

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

      const checkProduct = await Product.findById(_id);
      if (!checkProduct) {
        throw { name: "notFound" };
      }

      await Product.delete(_id);

      res.status(204).json();
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { _id } = req.params;

      const checkProduct = await Product.findById(_id);
      if (!checkProduct) {
        throw { name: "notFound" };
      }
      res.status(200).json(checkProduct);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
