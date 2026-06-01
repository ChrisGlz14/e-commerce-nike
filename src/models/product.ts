import { model, models, Schema } from "mongoose";

export interface IProduct {
  _id: string;
  title: string;
  slug: string;
  description: string;
  brand: string;
  price: number;
  images: string[];
  gender: string;
  type: string;
  tags: string[];
  variants: { size: string; stock: number }[];
  isActive: boolean;
}



const productSchema = new Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    description: String,
    brand : String,
    price: Number,
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
const filter: any = { isActive: true };
const Product = models.Product || model('Product', productSchema);
export { Product };