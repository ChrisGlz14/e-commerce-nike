import { dbConnect } from '@/lib/mongodb';
import Product from '@/models/product';

export async function getProducts() {
  await dbConnect();
  const products = await Product.find().lean();
  return JSON.parse(JSON.stringify(products));
}