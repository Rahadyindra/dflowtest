const { getDatabase } = require("../config/config");

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
}

module.exports = Customer;
