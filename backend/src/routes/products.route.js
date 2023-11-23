// routes/products.route.js
const route = require('express').Router();
const { productsController } = require('../controllers');
const validateProductName = require('../middlewares/validateProductName');

route.get('/', productsController.getAllProducts);
route.get('/:id', productsController.getProductsById);
route.post('/', validateProductName, productsController.createProduct);

module.exports = route;