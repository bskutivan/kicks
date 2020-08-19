const mongoose = require('mongoose');
// const Product = require('Product');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
  // products: [Product.schema]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;