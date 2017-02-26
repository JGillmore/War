var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('./server/config/mongoose.js');
var app = express();


app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.json());
var routes = require('./server/config/routes.js')(app);

app.listen( 4000, function() {
  console.log( `server running on port 4000` );
});
