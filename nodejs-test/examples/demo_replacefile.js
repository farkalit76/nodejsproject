var fs = require('fs');

//Replace the content of the file "mywritefile.txt":
fs.writeFile('mywritefile.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

//fs.unlink() method deletes the specified file:
//fs.unlink('mynewfile2.txt', function (err) {

//fs.rename() method renames the specified file:
//fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {

//You can also use Node.js to upload files to your computer.