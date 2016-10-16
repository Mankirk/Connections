var express = require('express');
var router = express.Router();
var  mongodb = require ('mongodb');
/* GET home page. */
router.get('/', function(req, res, next) {


mongodb.MongoClient.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/products', function(err, db){
 
 if (err) {
    throw new Error('Database failed to connect!');
  } else {
    console.log('Successfully connected to MongoDB on port 27017.');
  }
  
  var food=db.collection('food');
food.insert({name:'vin',qunat:70})
food.find().toArray(function(err, items) {
  console.log(items);
   res.render('index', { title: items[0].name,
                         tit2:items[1].name});
   
});


  });
 
});

module.exports = router;
