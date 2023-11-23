// products.services.js
const { productsModel } = require('../models');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  if (products) return { status: 'SUCCESSFUL', data: products };
};

const getProductsById = async (id) => {
  const data = await productsModel.getProductsById(id);
  if (!data) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data };
};

const createProduct = async (body) => {
  const { name } = body;
  const data = await productsModel.createProduct(name);
  return { status: 'CREATED', data };
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};