//Following is the syntax to create an uninitiated Buffer of 10 octets
//var buf = new Buffer(10);
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}
//buf.toString([encoding][, start][, end])
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

//Convert Buffer to JSON
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);