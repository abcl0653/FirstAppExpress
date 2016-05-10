module.exports = function (app,config) {
	//console.log(config);
	app.get('/',function(req,res) {
		//console.log(config);
		res.render('index', {title:config.title, message:config.message});
		//fail();
	});
	app.get('/hello',function(req,res) {
		//res.send('This is about page');
		res.render('hello');
	});
}