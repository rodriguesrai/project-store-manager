// sales.model.js
const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(`
    SELECT
    s.id AS saleId,
    s.date,
    sp.product_id AS productId,
    sp.quantity
    FROM
    sales s
    JOIN
    sales_products sp ON s.id = sp.sale_id;
  `);
  return sales;
};

const getSalesById = async (id) => {
  const [sales] = await connection.execute(`SELECT
  s.date,
  sp.product_id AS productId,
  sp.quantity
FROM
  sales s
JOIN
  sales_products sp ON s.id = sp.sale_id
WHERE
  s.id = ?
ORDER BY
  s.id, sp.product_id ASC;
`, [id]);
  return sales;
};

const createSale = async (saleItems) => {
  const [sale] = await connection.execute(`
    INSERT INTO sales (date) VALUES (NOW());
  `);

  await Promise.all(saleItems.map(async (item) => {
    const { productId, quantity } = item;
    await connection.execute(`
      INSERT INTO sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?);
    `, [sale.insertId, productId, quantity]);
  }));

  return { id: sale.insertId, itemsSold: saleItems };
};

module.exports = {
  getAllSales,
  getSalesById,
  createSale,
};