const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req,res){
  res.send("Contact me at: babafingo@gmail.com");
});

app.get("/bio", function(req,res){
  res.send("<h1> Babafingo 1995 yilinda guzel bir bahar sabahinda dogdu</h1>");
});

app.get("/hobbies", function(req,res){
  res.send("<ul><li>Code</li><li>Ski</li></ul>");
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
