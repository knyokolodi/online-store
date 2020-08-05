const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const products = require('./routes/product/products');

const app = express();

app.use(express.json());

app.use('/api/products', products);

const PORT = process.env.PORT || 6000;

app.listen(
  PORT,
  console.log(`Running server in ${process.env.NODE_ENV} on port ${PORT}`)
);
