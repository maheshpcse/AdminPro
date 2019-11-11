// Require modules
// require('./config/db.js');
var express = require('express');
var app = express();
var CONFIG = require('./config/config.js');
var path = require('path');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
const Knexx = require('./config/knex.js');
const { Model } = require('objection');
Model.knex(Knexx);

// Middleware funtions
app.use(express.static(path.join(__dirname + "../../public/")));

app.engine('.hbs', exphbs({extname:'.hbs'}));
app.set('view engine', '.hbs');
app.set('views', 'src/views/');
app.enable('view cache');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, x-access-token, Content-Length, Accept");
  next();
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var routes = require('./routes/routes.js');
app.use('/', routes);


// Server Runs Method
app.listen(CONFIG.server.port, function () {
  console.log(`Express server is running on ${CONFIG.server.host}:${CONFIG.server.port}`);
});
