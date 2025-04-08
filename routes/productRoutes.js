const express = require("express");
const {
  getProducts,
  addProduct,
  updateProduct,
  getProductById,
  deleteProduct
} = require("../controllers/productController");
const router = express.Router();

// Route to get all products
router.get("/", getProducts);

// Route to add a new product (Admin)
router.post("/", addProduct);

// Route to update an existing product by ID (Admin)
router.put("/:id", updateProduct);
router.get("/:disease", getProductById);

router.delete("/:id", deleteProduct);

module.exports = router;
