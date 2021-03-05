const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, {useUnifiedTopology: true} );

// Use connect method to connect to the Server
client.connect(function(err) {

  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Once you add the file you can just retreive and check them
  // insertDocuments(db, function(){
  //   client.close();
  // });

  findDocuments(db, function(){
    client.close();
  });
});


const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {
      name : "Apple",
      score: 8,
      review: "Great Fruit"
    },
    {
      name : "Orange",
      score: 6,
      review: "Kinda sour"
    },
    {
      name : "Banana",
      score: 9,
      review: "Great stuff"
    }
  ], function(err, result) {
    // Make sure no errors when you insert
    assert.equal(err, null);
    // Make sure 3 results are added
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}
