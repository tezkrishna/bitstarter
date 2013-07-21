var express = require('express');
var fs= require('fs');
var app = express();
app.use(express.logger());

var buf = new Buffer(256);
buf = fs.readFileSync('index.html');
app.get('/', function(request, response) {
  response.send(buf.toString('utf8',0,buf.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
