const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'mudkip123', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'mudkip123'
// });

// module.exports = pool.promise();

