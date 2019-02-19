var qs = require("querystring");
var http = require("https");

let p = qs.stringify({
  origin: '501',
  destination: '114',
  weight: 1700,
  courier: 'jne'
})

let a = Buffer.byteLength(p)
console.log(a)



// var options = {
//   "method": "POST",
//   "hostname": "api.rajaongkir.com",
//   "port": null,
//   "path": "/starter/cost",
//   "headers": {
//     "key": "your-api-key",
//     "content-type": "application/x-www-form-urlencoded"
//   }
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.write(p);
// req.end();