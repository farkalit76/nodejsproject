var http = require('http');

// Options to be used by request 
var options ={
    host: 'localhost',
    port: '8080',
    path: '/summer.html'  
};

//Callback function is used to deal with response
var callback = function(response){
    var body = '';
    response.on('data', function(data){
        body += data;
    });

    response.on('end', function(){
        console.log(body);
    });
}

//Make a request to the server
var req = http.request(options,callback);
req.end();

console.log("Program ended.....");
