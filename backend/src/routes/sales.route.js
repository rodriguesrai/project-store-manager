// sales.route.js
const route = require('express').Router();
const { salesController } = require('../controllers');
const { validateProductId, validateQuantity } = require('../middlewares/validateNewSales');

route.get('/', salesController.getAllSales);
route.get('/:id', salesController.getSalesById);
route.post('/', validateProductId, validateQuantity, salesController.createSale);

module.exports = route;