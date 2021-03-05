const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+"/date.js");

console.log(date);

const app = express();
var items = ["Buy food", "Cook food", "Eat food"];
var workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
// You need to add the public pathway
app.use(express.static("public"));

app.get("/", function(req, res){

  let day = date.getDay();

  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req,res){

  var item = req.body.newItem;
  if(req.body.list == "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else{
    items.push(item);
    res.redirect("/");
  }

  items.push(item);
  res.redirect("/");
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
