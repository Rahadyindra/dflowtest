const { getDatabase } = require("../config/config");
const { ObjectId } = require("mongodb");

class Cart {
  static getCart() {
    const db = getDatabase();
    const cart = db.collection("Carts");
    return cart;
  }

  static async findAll(_id) {
    return this.getCart().find({ CustomerId: _id }).toArray();
  }

  static async findById(_id) {
    return this.getCart().findOne({
      _id: new ObjectId(_id),
    });
  }

  static async postCart(cart) {
    return this.getCart().insertOne(cart);
  }

  static async delete(_id) {
    return this.getCart().deleteOne({ _id: new ObjectId(_id) });
  }
}

module.exports = Cart;
