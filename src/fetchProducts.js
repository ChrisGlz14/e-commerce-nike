
const mongoose = require('mongoose');
const config = require('./config');
const { env } = require('node:process');

console.log("Hola")

const productSchema = new mongoose.Schema({
  title: String,
  slug: String,
  price: Number,
  brand: String,
  images: [String],
  gender: String,
  type: String,
  tags: [String],
  variants: [
    {
      size: String,
      stock: Number
    }
  ],
  isActive: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);


//Esta variable va en la variables de entorno
const uri = env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(
    uri, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
        usefindAndModify: false,
        useCreateIndex: true,
    }
) .then((db) => console.log("Hola mundo"))
.catch((err) => console.log(err));


const Product = require('./models/Product');

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({ isActive: true });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo productos" });
  }
});
 

