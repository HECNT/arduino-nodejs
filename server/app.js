var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');

app.use(bodyParser.json());
app.use(bodyParser());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static(__dirname + '/../public'));

app.engine('.hbs', exphbs({
	layoutsDir: path.join(__dirname, "/../client/views/layouts"),
  defaultLayout: 'main',
  extname: 'hbs'
}));

app.set('view engine', '.hbs');
app.set('views', __dirname + '/../client/views');

// DEFINE ROUTES
var navRoute = require("./routes/nav");
app.use('/', navRoute);

var homeRoute = require("./routes/home");
app.use('/home', homeRoute);


app.listen(4000, function () {
  console.log('Listening on port 4000');
});
