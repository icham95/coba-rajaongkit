const http = require('https')
const qs = require("querystring");
const config = require('../config')


module.exports.single = (request, response, origin, destination, weight, courier) => {

  let body = qs.stringify({
    origin: origin,
    destination: destination,
    weight: weight,
    courier: courier
  })

  var request = http.request({
    method: 'POST',
    host: config.host,
    path: config.path.cost,
    port: null,
    headers: {
      key: config.API_KEY_RAJAONGKIR,
      "content-type": "application/x-www-form-urlencoded",
      "content-length": Buffer.byteLength(body)
    }
  }, function (res) {
    let rawData = '';

    res.on("data", function (chunk) {
      rawData += chunk
    });

    res.on("end", function () {

      const parsedData = JSON.parse(rawData)
      response.send(parsedData)

    });

  });

  request.write(body);

  request.end();
}