const date = '2023-11-22T21:31:48.000Z';

const getAllSalesDB = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date,
    productId: 3,
    quantity: 15,
  },
];

const getSalesById1DB = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
];

const createSaleDB = {
  id: 1,
  itemsSold: [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 3 },
  ],
};

const createSaleBody = [
  {
    productId: 1,
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 3,
  },
];

module.exports = {
  getAllSalesDB,
  getSalesById1DB,
  createSaleBody,
  createSaleDB,

};