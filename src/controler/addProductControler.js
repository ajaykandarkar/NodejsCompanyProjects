const productService = require('../services/ProductsService');

const createProduct = async (req, res) => {
    try {
      const productData = req.body;
      const image = req.file ? req.file.filename : null;
  
      await productService.createProduct({ ...productData, image });
  
      res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
      console.error('Error creating product:', error); // Log the error
      res.status(500).json({ error: error.message });
    }
  };
  

  const getAllProducts = async (req, res) => {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: error.message });
    }
  };

  const deleteProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await productService.deleteProductById(id);
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateProductById = async (req, res) => {
  try {
      const productId = req.params.id;
      const productData = req.body;
      const result = await productService.updateProductById(productId, productData);
      res.status(200).json({ success: true, message: 'Product updated successfully', data: result });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProductById,
  updateProductById
};
