const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
} = require('../../controllers/product/products');

router.route('/').get(getProducts).post(addProduct);

router.route('/:id').get(getProduct);

router.route('/:id').delete(deleteProduct);

module.exports = router;
