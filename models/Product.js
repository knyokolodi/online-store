const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please enter product name'],
  },
  image: {
    type: String,
    trim: true,
    required: [true, 'Please enter product image'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Please enter product description'],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, 'Please enter product price'],
  },
  categories: {
    type: Array,
    trim: true,
    required: [true, 'Please enter product categories'],
  },
  stock: {
    type: Number,
    trim: true,
    required: [true, 'Please enter product stock'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
