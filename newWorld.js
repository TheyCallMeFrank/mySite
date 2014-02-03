var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.listen(8008)

