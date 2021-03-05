// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

const mongoose = require('mongoose');

// This line replaces all the following lines
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String
    // required: [true, "Why so serious"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});



// It will create a new collection called Fruit
const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({
  rating: 4,
  review: "This is Mr. Peach"
});

// fruit.save();

// Fruit.updateOne({_id: put id of the thing}, {name:Whatever you want to add}, function(err){
//   if(err){whateverIsHere;}
//   else{same;}
// });


//
// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rate: 3,
//   review: "Sucks"
// });
//
// const orange = new Fruit ({
//     name : "Orange",
//     score: 6,
//     review: "Kinda sour"
// });
//
// const banana = new Fruit ({
//   name : "Banana",
//   score: 9,
//   review: "Great stuff"
// });

// Fruit.insertMany([kiwi,orange,banana], function(err){
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully saved the fruits!")
//     }
//   });

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);

// Don't forget to close the connection to the database
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "603a66c338329516b60a2f1d"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated the doc");
//   }
// });

// Fruit.deleteOne({name:"Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else{
//     console.log("Successfully deleted the document");
//   }
// });




const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Armut",
  score: 8,
  review: "Armut is great."
});

// pineapple.save();

// Person.deleteMany({name: "Ahmet"}, function(err){
//   if (err) console.log(err);
//   else console.log("Successfully deleted");
// });


const person = new Person ({
  name: "John",
  age: 23,
});

Person.updateOne({name: "John"}, {favouriteFruit: pineapple}, function(err){
  if (err){
    console.log(err);
  } else{
    console.log("Successfully updated Armut");
  }
});

// person.save();

// fruit.save();

// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'fruitsDB';
//
// // Create a new MongoClient
// const client = new MongoClient(url, {useUnifiedTopology: true} );
//
// // Use connect method to connect to the Server
// client.connect(function(err) {
//
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   // Once you add the file you can just retreive and check them
//   // insertDocuments(db, function(){
//   //   client.close();
//   // });
//
//   findDocuments(db, function(){
//     client.close();
//   });
// });
