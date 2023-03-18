const CustomerController = require("../controllers/customerController");
const express = require("express");
const router = express.Router();

router.post("/register", CustomerController.register);
router.post("/login", CustomerController.login);

module.exports = router;
