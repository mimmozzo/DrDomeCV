var express = require("express");
var app = express();
app.use(express.logger());
app.configure(function(){
  app.use('/media', express.static(__dirname + '/media'));
  app.use(express.static(__dirname + '/public'));
});

/*
app.get('/', function(request, response) {
  response.send('Hello DrDome!');
});
*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
