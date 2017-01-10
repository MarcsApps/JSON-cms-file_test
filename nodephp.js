var express = require('express');
var php = require("node-php"); 
var path = require("path"); 

var app = express();

app.use("/", php.cgi("/")); 
// app.use("/", php.cgi("/path/to/wordpress")); 

app.listen(8080);

console.log("Server listening!");