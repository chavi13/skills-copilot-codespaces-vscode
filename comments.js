// Create web server
var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! From the Node.js server\n");
});
server.listen(8000);
console.log("Server running at http://