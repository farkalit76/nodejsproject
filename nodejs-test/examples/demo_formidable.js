var http = require('http');
//to upload the file
var formd = require('formidable');
//save the uploaded file
var fs = require('fs');

http.createServer(function (req, res){

    if( req.url == '/fileupload')
    {
        //if file uploaded
        var form = new formd.IncomingForm();
        form.parse(req, function( err, fields, files){
            //saev the uploaded file
            var oldpath = files.filetoupload.path;
            var newpath= 'C:/Farkalit/temp/'+files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err){
                if (err) throw err;
                res.write('File uploaded!');
                return res.end();
            });
            
        });
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);