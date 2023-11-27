// sales.service.js
const salesModel = require('../models/sales.model');

const getAllSales = async () => {
  const salesAll = await salesModel.getAllSales();
  if (salesAll) return { status: 'SUCCESSFUL', data: salesAll };
};

const getSalesById = async (id) => {
  const salesById = await salesModel.getSalesById(id);
  if (!salesById || salesById.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'SUCCESSFUL', data: salesById };
};

const createSale = async (body) => {
  const data = await salesModel.createSale(body);
  return { status: 'CREATED', data };
};

module.exports = {
  getAllSales,
  getSalesById,
  createSale,
};