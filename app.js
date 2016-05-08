var http = require('http');
var express = require('express');

var app = express();
app.get('/',function(req,res) {
	res.send('HelloWorld!');
});
app.get('/about',function(req,res) {
	res.send('This is about page');
});


http.createServer(app).listen('3000',function() {
	console.log('The server is listening 3000');
});