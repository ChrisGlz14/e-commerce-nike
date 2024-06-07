
const { MongoClient, ServerApiVersion } = require('mongodb');
const moongose = require('mongoose');
const config = require('./config');

//Esta variable va en la variables de entorno
const uri = "mongodb+srv://chrisglz14:christianD10S@nike-shop.obtdhin.mongodb.net/?retryWrites=true&w=majority&appName=nike-shop";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
moongose.connect(
    uri, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
        usefindAndModify: false,
        useCreateIndex: true,
    }
) .then((db) => console.log("Hola mundo"))
.catch((err) => console.log(err));



 

