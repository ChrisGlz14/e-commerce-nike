import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';



const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cachedClient: MongoClient | null = null;
let cachedDb: typeof mongoose | null = null;

export async function connectToDataBase () {
  if (cachedClient) {
    return cachedClient
  }

  const client = new MongoClient(MONGODB_URI)
  await client.connect();
  cachedClient = client;
  return client
}

export async function dbConnect() {
  if (cachedDb) {
    return cachedDb
  }
 
  await mongoose.connect(MONGODB_URI,{
    dbName: 'shoes-nike',
  });
  cachedDb = mongoose;
  return mongoose;

}

