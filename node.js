var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get("/add/:num1/:num2", function(req, res){
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var sum = parseInt(num1) + parseInt(num2);
  var sumString = sum.toString();
  res.send(sumString);
});

app.get("/substract/:num1/:num2", function(req, res){
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var sum = parseInt(num1) - parseInt(num2);
  var sumString = sum.toString();
  res.send(sumString);
});

app.get("/multiply/:num1/:num2", function(req, res){
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var sum = parseInt(num1) * parseInt(num2);
  var sumString = sum.toString();
  res.send(sumString);
});

app.get("/divide/:num1/:num2", function(req, res){
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var sum = parseInt(num1) / parseInt(num2);
  var sumString = sum.toString();
  res.send(sumString);
});

app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
});