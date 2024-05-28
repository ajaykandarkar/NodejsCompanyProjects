const productModel = require('../model/addProductsModel');

const createProduct = async (productData) => {

  try {
    const result = await productModel.createProduct(productData);
    return result;
  } catch (error) {
    throw new Error('Error creating product: ' + error.message);
  }
};

const getAllProducts = async () => {
    try {
      const products = await productModel.getAllProducts();
      return products;
    } catch (error) {
      throw new Error('Error fetching products: ' + error.message);
    }
  };

  const deleteProductById = async (id) => {
    const affectedRows = await productModel.deleteProductById(id);
    if (affectedRows === 0) {
        throw new Error(`Product with id ${id} not found`);
    }
    return { message: `Product with id ${id} has been deleted successfully.` };
};

const updateProductById = async (productId, productData) => {
  try {
      const result = await productModel.updateProductById(productId, productData);
      return result;
  } catch (error) {
      throw new Error('Service error: ' + error.message);
  }
};


module.exports = {
  createProduct,
  getAllProducts,
  deleteProductById,
  updateProductById
};
