const { getDatabase } = require("../config/config");
const { ObjectId } = require("mongodb");

class Customer {
  static getCustomer() {
    const db = getDatabase();
    const customers = db.collection("Customers");
    return customers;
  }

  static async createCustomer(customer) {
    return this.getCustomer().insertOne(customer);
  }

  static async findByEmail(email) {
    return this.getCustomer().findOne({
      email: email,
    });
  }

  static async findById(_id) {
    return this.getCustomer().findOne(
      {
        _id: new ObjectId(_id),
      },
      { projection: { password: 0 } }
    );
  }
}

module.exports = Customer;
