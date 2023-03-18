const productController = require("../controllers/productController");
const express = require("express");
const router = express.Router();

router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.get("/:_id", productController.getProductById);
router.put("/:_id", productController.updateProduct);
router.delete("/:_id", productController.deleteProduct);

module.exports = router;
