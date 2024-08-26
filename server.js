const express = require('express');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3500;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', require('./routes/userRoutes'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on ${port}`);

});
