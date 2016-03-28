var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/weekend_5_build');
mongoose.model("pets", new Schema({"name" : String, "animal" : String, "age" : Number, "imageUrl" : String}));
var Pet = mongoose.model("pets");

//DB STUFF

app.get("/pets", function(req,res){
  Pet.find({}, function(err, data){
      if(err){
          console.log(err);
      }

      res.send(data);
  });
});

app.post("/pets", function(req,res){
  var addedPet = new Pet({"name" : req.body.name, "animal" : req.body.animal, "age" : parseInt(req.body.age), "imageUrl": req.body.imageUrl});
  addedPet.save(function(err, data){
      if(err){
        console.log(err);
      }

      res.send(data);
  });
});

app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening");
});

module.exports = app;
