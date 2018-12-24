var fs = require('fs');

//Create a new, empty file using the open() method:
fs.open('myopenfile1.txt','w', function (err, file){
    if (err) throw err;
    console.log('File (open) Saved!');
})