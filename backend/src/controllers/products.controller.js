// controllers/products.controller.js
const productsService = require('../services');

const getAllProducts = async (req, res) => {
  const products = await productsService.productsService.getAllProducts;
  return res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.productsService.getProductsById(id);
  return res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  getProductsById,
};