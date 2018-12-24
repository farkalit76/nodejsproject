var fs = require('fs');

//Create a new file using the writeFile() method:
fs.writeFile('mywritefile.txt','Write test data.', function (err){
    if (err) throw err;
    console.log('File (write) saved!')
})