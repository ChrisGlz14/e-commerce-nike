// models/Product.js
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    }
  ],
  inStock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sizes: [
    {
      type: String,
      required: true,
    }
  ],
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    }
  ],
  title: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  }
});


export default mongoose.models.Product || mongoose.model('Product', schema) ;
