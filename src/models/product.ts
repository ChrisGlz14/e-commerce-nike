import mongoose, { model, models, Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    price: Number,
    brand: String,
    images: [String],
    gender: String,
    type: String,
    tags: [String],
    variants: [
      {
        size: String,
        stock: Number,
      },
    ],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = models.Product || model('Product', productSchema);
export { Product };