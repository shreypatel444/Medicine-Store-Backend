const Product = require("../models/Product");

// Fetch all products or filter by disease
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Add a new product (Admin)
exports.addProduct = async (req, res) => {
  try {
    const { name, disease, image, description, price } = req.body;
    const product = new Product({ name, description, price, disease, image });
    await product.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const disease = req.params.disease; // Get the disease from the request parameters
    const products = await Product.find({ disease }); // Fetch products with that disease

    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for this disease" });
    }

    res.json(products); // Return the list of products for the given disease
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params; // Get the product ID from URL

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

// Update a product by its ID
exports.updateProduct = async (req, res) => {
  const { id } = req.params; // Get the product ID from URL
  const { name, disease, image, description, price } = req.body; // Get updated product details from the body

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id, // The product ID
      { name, disease, image, description, price }, // The updated product fields
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};
