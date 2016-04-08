var express = require('express');
var nunjucks = require('nunjucks');

var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index.html');
})

app.listen(3040);

console.log('server is running');