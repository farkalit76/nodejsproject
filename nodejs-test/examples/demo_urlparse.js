var url= require('url');

var addr = 'http://localhost:8080/default.htm?year=2017&month=february';

var qur = url.parse(addr, true);

console.log(qur.host); //returns localhost:8080

console.log(qur.pathname);// returns /default.htm

console.log(qur.port); // returns 8080

console.log(qur.search); // returns ?year=2017&month=february

var qdata = qur.query;//returns an object: { year: 2017, month: 'february' }

console.log(qdata); // returns an object: { year: 2017, month: 'february' }

console.log(qdata.month);// returns february