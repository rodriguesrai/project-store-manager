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

module.exports = {
  getAllSales,
  getSalesById,
};