// products.services.js
const { productsModel } = require('../models');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductsById = async (id) => {
  const data = await productsModel.getProductsById(id);
  if (!data) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data };
};

module.exports = {
  getAllProducts,
  getProductsById,
};