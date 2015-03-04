var express = require('express');
var router = express.Router();
var http =require('http');
//midlleware
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
/* GET home page. */
router.get('/', function(req, res, next) {
	next()
},function(req, res, next){
	res.render('index', { title: 'My App' });
});
//ajax from home page
router.get('/pnr', function(req, res, next) {
	// Accept: text/*, application/json
	req.accepts('html');
	// => "html"
	req.accepts('text/html');
	// => "text/html"
	req.accepts('json, text');
	// => "json"
	req.accepts('application/json');
	var response = res;
	http.get("http://api.erail.in/live/?key=c488acb9-4f22-4f77-97b6-7b90835d7494&trainno=12138&stnfrom=NDLS&date=03-FEB-2015", function(res) {
		  console.log("Got response: " + res.statusCode);
		   res.on("data", function(chunk) {
		   	 var data= JSON.parse(chunk);
			     response.send(data)
			});
		  next()
		}).on('error', function(e) {
		  console.log("Got error: " + e.message);
		});

},function(req, res, next){
	console.log("next method");

});

module.exports = router;
