const { productsModel } = require('../models');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductsById = async (id) => {
  const product = await productsModel.getProductsById(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductsById,
};