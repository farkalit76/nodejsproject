var http = require('http');

var upper = require('upper-case');

http.createServer(function (req, res){
    res.writeHead(200);
    res.write(upper('Hello world!'));
    res.end();
}).listen(8080);