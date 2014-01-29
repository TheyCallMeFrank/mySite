var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Why does Python live on land?");
    response.write("Because it's above C level!")
    response.end();
  }

  http.createServer(onRequest).listen(8000);
  console.log("Server has started.");
}

exports.start = start;