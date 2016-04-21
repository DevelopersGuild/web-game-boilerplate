// Load Express into our app
var express = require('express');

// Load Nunjucks into our app
var nunjucks = require('nunjucks');

// Create an instance of our Express app
var app = express();

// Make Nunjucks look for our HTML files inside the views/ directory
// and make it load itself into Express
nunjucks.configure('views', {
    express: app
});

// Tell Express to serve files in the public/ directory
app.use(express.static('public'));

// Make Express render index.html when someone visits on '/'
app.get('/', function(req, res) {
	res.render('index.html');
})

// Have our Express server listen on port 3040
app.listen(3040);

// Print this message to console
console.log('Server is now running at localhost:3040');