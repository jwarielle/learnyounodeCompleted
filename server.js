var http = require('http');

var server = http.createServer(function(req, res) {
  console.log('Hello!');
});

server.listen(3000, function() {
  console.log("Server Started");
});
