const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

// It is called as cityName in your html code so use that name
app.post("/", function(req,res){
  const query = req.body.cityName;
  const apiKey = "efe70debeb17cd3e1b6556b7542d2762";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+units+"&APPID="+apiKey;
  
  https.get(url, function(response){

    console.log(response.statusCode);

    response.on("data", function(data){
      // it will return you hexadecimal numbers, turn that into JSON format
      // console.log(data);
      const weatherData = JSON.parse(data);
      // console.log(weatherData);
      const temp = weatherData.main.temp;
      const weather = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
      // console.log(temp);
      res.write("<p> The weather is currently "+ weather + "</p>");
      res.write("<h1>The temperature in "+ query +" is "+ temp + " degrees Celcius.</h1>");
      res.write("<img src="+ imageURL+ ">");
      res.send();

    })
  })
})



app.listen(3000,function(){
  console.log("Server is running on port 3000");
})
