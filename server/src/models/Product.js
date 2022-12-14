const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description:String,
  date: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product