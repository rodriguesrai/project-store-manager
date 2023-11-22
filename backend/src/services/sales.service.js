// sales.service.js
const salesModel = require('../models/sales.model');

const getAllSales = async () => {
  const salesAll = await salesModel.getAllSales();
  if (salesAll) return { status: 'SUCCESSFUL', data: salesAll };
};

const getSalesById = async (id) => {
  const salesById = await salesModel.getSalesById(id);
  if (salesById.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  return { status: 'SUCCESSFUL', data: salesById };
};

module.exports = {
  getAllSales,
  getSalesById,
};