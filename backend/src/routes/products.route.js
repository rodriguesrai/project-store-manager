// routes/products.route.js
const route = require('express').Router();
const { productsController } = require('../controllers');

route.get('/', productsController.getAllProducts);
route.get('/:id', productsController.getProductsById);
route.post('/', productsController.createProduct);

module.exports = route;