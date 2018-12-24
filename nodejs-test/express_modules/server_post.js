var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Use the static file from the folder=public
//http://localhost:8081/images/apple.png
//app.use(express.static('public'));

app.get('/index2.htm', function (req, res) {
    console.log("request::",req.params);
    //console.log("response:",res);
   //res.send('Hello World');
   res.sendFile(__dirname +"/"+ 'index2.htm');
})

//process_post
app.post('/process_post', urlencodedParser, function (req, res) {
    console.log("request.query::",req.query);
    console.log("request.body::",req.body);
    // Prepare output in JSON format
    var response ={
        firstName:req.body.first_name,
        lastNAme:req.body.last_name
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