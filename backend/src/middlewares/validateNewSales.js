const httpErrorMap = require('../utils/mapStatusHTTP');
const { productModel } = require('../models');

const validateProductId = async (req, res, next) => {
  const arrayProducts = req.body;

  if (!arrayProducts.every((produto) => produto.productId)) {
    return res.status(httpErrorMap('BAD_REQUEST'))
      .json({ message: '"productId" is required' });
  }
  const arrayIdsPromise = arrayProducts.map((produto) => productModel.findById(produto.productId));
  const products = await Promise.all(arrayIdsPromise);

  const isValid = products.every((produto) => produto !== null);
  if (!isValid) {
    return res.status(httpErrorMap('NOT_FOUND'))
      .json({ message: 'Product not found' });
  }
  next();
};

const validateQuantity = (req, res, next) => {
  const arrayProducts = req.body;

  if (!arrayProducts.every((produto) => produto.quantity !== undefined)) {
    return res.status(httpErrorMap('BAD_REQUEST'))
      .json({ message: '"quantity" is required' });
  }
  if (arrayProducts.some((produto) => produto.quantity <= 0)) {
    return res.status(httpErrorMap('INVALID_VALUE'))
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  validateProductId,
  validateQuantity,
};