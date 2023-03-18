const express = require("express");
const router = express.Router();
const routeProduct = require("./product");
const routeCustomer = require("./customer");

router.use("/products", routeProduct);
router.use("/customer", routeCustomer);

module.exports = router;
