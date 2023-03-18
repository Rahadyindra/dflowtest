const CustomerController = require("../controllers/customerController");
const express = require("express");
const {
  customerAuthentication,
  customerAuthorization,
} = require("../middlewares/customerAuth");
const router = express.Router();

router.post("/register", CustomerController.register);
router.post("/login", CustomerController.login);
router.use(customerAuthentication);
router.get("/cart", CustomerController.getAllCart);
router.post("/cart/:productId", CustomerController.buyProduct);
router.delete("/cart/:productId", CustomerController.deleteCart)

module.exports = router;
