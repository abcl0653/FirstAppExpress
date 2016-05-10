var http 			= require('http');
var express 		= require('express');
var responseTime 	= require('response-time');
var errorHandler 	= require('errorhandler');
var iniParser 		= require('iniParser');
var logger			= require('morgan');


var app = express();

var config = iniParser.parseSync('./config.ini');

var configJson = require('./config.json')[app.get('env')];
console.log(configJson.db_host);

app.set('view engine', 'jade');
app.set('views','./views');

app.use(express.static('./public'));

//Add express responseTime middleware
app.use(responseTime());

app.use(express.Router());

//app.use(logger('combined'));

var routes = require('./routes.js')(app,config);

app.use(errorHandler());

http.createServer(app).listen(config.port,function() {
	console.log('The server is listening ' + config.port );
});