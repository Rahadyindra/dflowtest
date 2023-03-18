const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/products", Controller.getAllProducts);
router.post("/products", Controller.createProduct);
router.put("/products/:_id", Controller.updateProduct);
router.delete("/products/:_id", Controller.deleteProduct);

module.exports = router;
