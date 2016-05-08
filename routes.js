module.exports = function (app) {
	app.get('/',function(req,res) {
		//res.send('HelloWorld!');
		res.render('index');
	});
	app.get('/hello',function(req,res) {
		//res.send('This is about page');
		res.render('hello');
	});
}