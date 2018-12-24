var express = require('express');
var app = express();

//Use the static file from the folder=public
//http://localhost:8081/images/apple.png
app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
    console.log("request::",req.params);
    //console.log("response:",res);
   //res.send('Hello World');
   res.sendFile(__dirname +"/"+ 'index.htm');
})

//process_get
app.get('/process_get', function (req, res) {
    console.log("request.query::",req.query);
    
    var response ={
        firstName:req.query.first_name,
        lastNAme:req.query.last_name
    }
    console.log("response::",response);
    //res.send(response);
    //res.end(JSON.stringify(response));
    res.end(JSON.stringify(response), function(){});
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})