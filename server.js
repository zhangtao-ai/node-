var http = require('http');
var fs = require('fs');
var onRequest = function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    // response.end('Hello World\n');
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(response);
}
var server = http.createServer(onRequest);
server.listen(8888,'127.0.0.1');
console.log('server running at http://127.0.0.1:8888');