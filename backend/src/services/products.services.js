const productsModel = require('../models');

const getAllProducts = async () => {
  const products = await productsModel.productsModel.getAllProducts();
  return products;
};

const getProductsById = async (id) => {
  const product = await productsModel.productsModel.getProductsById(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductsById,
};