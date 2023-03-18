const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/products", Controller.getAllProducts);
router.post("/register", Controller.register);

module.exports = router;