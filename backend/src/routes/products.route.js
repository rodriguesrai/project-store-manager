// routes/products.route.js
const route = require('express').Router();
const { productsController } = require('../controllers');
const validateProductName = require('../middlewares/validateProductName');
const { checkProductExistenceId } = require('../middlewares/validateProductId');

route.get('/', productsController.getAllProducts);
route.get('/:id', productsController.getProductsById);
route.post('/', validateProductName, productsController.createProduct);
route.put('/:id', validateProductName, checkProductExistenceId, productsController.updateProduct);

module.exports = route;