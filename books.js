var express = require('express');
var app = express();
var fs = require("fs");
var user = {
   "book4": {
      "name" : "The 3 mistake of my life",
      "author" : "Chetan Bhagat"
      
   }
}
var name = "The girl i last loved";

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["book4"] = user["book4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["book" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})