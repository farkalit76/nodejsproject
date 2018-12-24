var fs = require('fs');

//Append "This is my new text." to the end of the file "myappendfile1.txt":
fs.appendFile('myappendfile1.txt', ' This is my new text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});