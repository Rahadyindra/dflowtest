const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConfig");

class Product {
  static getProduct() {
    const db = getDatabase();
    const products = db.collection("Products");
    return products;
  }

  static async findAll() {
    return this.getProduct().find().toArray();
  }

  static async findById(id) {
    return this.getProduct().findOne({
      _id: new ObjectId(id),
    });
  }

  static async createProduct(product) {
    return this.getProduct().insertOne(product);
  }

  static async delete(id) {
    return this.getProduct().deleteOne({ _id: new ObjectId(id) });
  }

  static async update(id, product) {
    return this.getProduct().update({ _id: new ObjectId(id) }, product);
  }
}

module.exports = Product;
