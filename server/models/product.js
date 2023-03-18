const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/config");

class Product {
  static getProduct() {
    const db = getDatabase();
    const products = db.collection("Products");
    return products;
  }

  static async findAll() {
    return this.getProduct().find().toArray();
  }

  static async findById(_id) {
    return this.getProduct().findOne({
      _id: new ObjectId(_id),
    });
  }

  static async createProduct(product) {
    return this.getProduct().insertOne(product);
  }

  static async delete(_id) {
    return this.getProduct().deleteOne({ _id: new ObjectId(_id) });
  }

  static async updateProduct({ product, _id }) {
    return this.getProduct().updateOne(
      { _id: new ObjectId(_id) },
      { $set: product }
    );
  }
}

module.exports = Product;
