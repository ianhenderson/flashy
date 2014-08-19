var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./db.js');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

require('./routes.js')(app);
app.listen(port);

console.log("Server listening on port ", port);