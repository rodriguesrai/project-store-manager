// controllers/products.controller.js
const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  const products = await productsService.getAllProducts(); // problema aqui, quando chama a função quebra
  return res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getProductsById(id);
  return res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  getProductsById,
};