const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'StoreManager',
});

console.log('Configurações de conexão:', connection.config);

connection.on('error', (err) => {
  console.error('Erro de conexão:', err);
});

connection.on('acquire', () => {
  console.log('Conexão adquirida do pool');
});

module.exports = connection;
