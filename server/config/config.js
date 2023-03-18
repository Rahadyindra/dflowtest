const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGO_STRING;

let db = null;

const mongoConnect = async () => {
  const client = new MongoClient(connectionString);

  try {
    const database = client.db("DflowDB");

    db = database;

    return database;
  } catch (err) {
    await client.close();
  }
};

const getDatabase = () => db;

module.exports = {
  mongoConnect,

  getDatabase,
};
