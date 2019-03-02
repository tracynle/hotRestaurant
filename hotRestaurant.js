//express file 
var express = require("express");

var app = express();
var port = 3000;

app.listen(port, function(){
    console.log("app listening " + port);
})

