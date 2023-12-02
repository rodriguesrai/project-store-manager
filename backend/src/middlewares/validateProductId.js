const httpErrorMap = require('../utils/mapStatusHTTP');
const { productsService } = require('../services');

const checkProductExistenceId = async (req, res, next) => {
  const { id } = req.params;
  const existingProduct = await productsService.getProductsById(id);
  if (existingProduct.status === 'NOT_FOUND') {
    return res
      .status(httpErrorMap('NOT_FOUND'))
      .json({ message: 'Product not found' });
  }

  next();
};

module.exports = {
  checkProductExistenceId,
};