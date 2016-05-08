var http = require('http');
var express = require('express');


var app = express();

app.set('view engine', 'jade');
app.set('views','./views');

app.use(express.static('./public'));

var routes = require('./routes.js')(app);

http.createServer(app).listen('3000',function() {
	console.log('The server is listening 3000');
});