const httpErrorMap = require('../utils/mapStatusHTTP');
const { productsService } = require('../services');

const checkProductExistence = async (req, res, next) => {
  const productIds = req.body.map((produto) => produto.productId);

  const existingProducts = await Promise.all(
    productIds.map(async (productId) => productsService.getProductsById(productId)),
  );

  if (existingProducts.some((result) => result.status === 'NOT_FOUND')) {
    return res
      .status(httpErrorMap('NOT_FOUND'))
      .json({ message: 'Product not found' });
  }

  next();
};

const validateProductId = async (req, res, next) => {
  const arrayProducts = req.body;

  if (!arrayProducts.every((produto) => produto.productId)) {
    return res
      .status(httpErrorMap('BAD_REQUEST'))
      .json({ message: '"productId" is required' });
  }

  next();
};

const validateQuantity = (req, res, next) => {
  const arrayProducts = req.body;

  if (!arrayProducts.every((produto) => produto.quantity !== undefined)) {
    return res
      .status(httpErrorMap('BAD_REQUEST'))
      .json({ message: '"quantity" is required' });
  }

  if (arrayProducts.some((produto) => produto.quantity <= 0)) {
    return res
      .status(httpErrorMap('INVALID_VALUE'))
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = {
  checkProductExistence,
  validateProductId,
  validateQuantity,
};
