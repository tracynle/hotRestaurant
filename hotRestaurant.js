//express file 
var express = require("express");
var path = require("path");

var app = express();
var port = 3000;

var reservations = [{
    name:"blahblah",
    age:21
    }];

var waitlist = [{

}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
app.get("/makeReservation", function(req, res) {
    res.sendFile(path.join(__dirname, "makeReservation.html"));
  });

app.get("/viewTables", function(req, res) {
    res.sendFile(path.join(__dirname, "viewTables.html"));
  });  


app.get("/api/reservations",function(req,res){
    res.json(reservations);
})

app.get("/api/waitlist",function(req,res){
    res.json(waitlist);
})

app.listen(port, function(){
    console.log("app listening " + port);
})

app.post("/api/reservations", function(req,res){
  var newReservation = req.body;

  if (reservations.length < 5){
    reservations.push(newReservation)
    alert("Your Reservation Has Been Placed!")
  }
  else {
    waitlist.push(newReservation);
    alert("You have been place on the waitlist")
  };
    res.json(newReservation);
  });



