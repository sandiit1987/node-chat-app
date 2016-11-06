var path = require("path");
var express = require("express");
var app = express();

var publicPath = path.join(__dirname, "../", "/public");

app.use(express.static(publicPath));

app.listen(3000, function(){
	console.log("Server running..");
});