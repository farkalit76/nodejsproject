var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
//Required for multipart-form
app.use(bodyParser.urlencoded({ extended: false }));
//Handle File Uploads
//app.use(multer({ dest: './tmp'}));
app.use(multer({ dest: './tmp'}).single('file'));;
//var upload = multer({ dest: './tmp' });
// app.use(multer({
//     dest: path.join(__dirname, 'public/upload/tmp')
//   }).any());
//app.use(multer({dest:'./uploads/'}).single('fileImage'));

app.get('/indexfile.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "indexfile.htm" );
 })

//file_upload
 app.post('/file_upload', function(req, res){
    console.log("file:",req.file);
    console.log("body:",req.body);
    // console.log(req.file.originalname);
    // console.log(req.file.path);
    // console.log(req.file.mimetype);
    var file = __dirname + "/" + req.file.originalname;
    console.log('originalname:',file);

    fs.readFile( req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
           if( err ){
              console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.file.originalname
                };
            }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
     });
 })

 //Start server at port 8081
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })