const http = require('https')
const config = require('../config')

module.exports.all = (request, response) => {
  var request = http.request({
    host: config.host,
    path: config.path.city,
    headers: {
      key: config.API_KEY_RAJAONGKIR
    }
  }, function (res) {
    let rawData = '';

    res.on("data", function (chunk) {
      rawData += chunk
    });

    res.on("end", function () {

      const parsedData = JSON.parse(rawData)
      response.json(parsedData)

    });

  });

  request.end();
}

module.exports.single = (request, response, id) => {
  var request = http.request({
    host: config.host,
    path: config.path.city + '?id=' + id,
    headers: {
      key: config.API_KEY_RAJAONGKIR
    }
  }, function (res) {
    let rawData = '';

    res.on("data", function (chunk) {
      rawData += chunk
    });

    res.on("end", function () {

      const parsedData = JSON.parse(rawData)
      response.json(parsedData)

    });

  });

  request.end();
}