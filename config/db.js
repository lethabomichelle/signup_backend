const { createPool } = require("mysql2/promise");
const cors = require('cors');
require('dotenv').config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectionLimit: 30
});

module.exports = pool;