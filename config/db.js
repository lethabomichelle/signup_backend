const mysql = require('mysql2/promise');

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log(`MySQL Connected: ${connection.config.host}`);
        return connection;
    } catch (error) {
        console.error(`MySQL Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;