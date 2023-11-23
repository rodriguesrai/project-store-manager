// middleware/validateProductName.js

const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateProductName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(mapStatusHTTP('BAD_REQUEST'))
      .json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res
      .status(mapStatusHTTP('INVALID_VALUE'))
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = validateProductName;