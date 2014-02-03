var express = require("express")

var app = express();
require('./route')(app);
var port = 8000;
app.listen(8000);
console.log("App listening on port" + port);