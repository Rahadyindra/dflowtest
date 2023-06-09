if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const { mongoConnect } = require("./config/config");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);
app.use(errorHandler);

(async () => {
  try {
    await mongoConnect();
    app.listen(port, (_) => console.log(`Apps is listening at port ${port}`));
  } catch (err) {
    console.log(`Failed to connect to mongodb`);
  }
})();
