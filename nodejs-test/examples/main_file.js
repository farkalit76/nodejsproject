var fs = require("fs");

//var data = fs.readFileSync('input.txt');
//console.log(data.toString());

//OR we can rewrite the code as
//Non-Blocking Code Example
fs.readFileSyncile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
 });

console.log("Program Ended");