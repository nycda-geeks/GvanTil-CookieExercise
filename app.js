var express = require('express')

var app = express()

app.use(express.static('./resources/'));

// View engine = PUG
app.set('view engine', 'pug');
app.set('views', './views'); 

// GET request that listens on '/' and renders index.pug
app.get ('/', function (req, res){
	console.log('received a get request on /')
	res.render('index')
});

// server set up
var server = app.listen(3000, function () { 
	console.log('My Cookie exercise is listening on port: ' + server.address().port);
});