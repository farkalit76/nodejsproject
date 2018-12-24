var fs = require('fs');

//Create a new file using the appendFile() method:
fs.appendFile('myappendfile1.txt','Hello test content!', function (err){
    if (err) throw err;
    console.log('File Saved!');
})