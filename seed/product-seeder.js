var Product = require('../models/product');
const mongoose = require('mongoose');
const keys = require('../config/keys');
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// mongoose.connect('localhost:27017/shopping');
mongoose.connect('mongodb://localhost:27017/shopping', { useMongoClient: true });
// mongoose.connect(keys.mongodb.dbURI, () => {
//     console.log('connected to mongodb');
//   });


var products = [
    new Product({
        imagePath: 'https://static.pexels.com/photos/442577/pexels-photo-442577.jpeg',
        title: 'Gothic Video Game',
        description: 'Awesome game',
        price: 10
    }),
    new Product({
        imagePath: 'https://static.pexels.com/photos/541520/pexels-photo-541520.jpeg',
        title: 'Hey I am here',
        description: 'Awesome Products',
        price: 15
    }),
    new Product({
        imagePath: 'https://static.pexels.com/photos/784869/pexels-photo-784869.jpeg',
        title: 'Hey Pussy I am here',
        description: 'Nice Creature',
        price: 20
    })
];

var done = 0;
for (var i=0; i < products.length; i++){
products[i].save(function(err, result){
    done++;
    if (done === products.length){
      exit();
    }
});
}

function exit() {
    mongoose.disconnect();
}