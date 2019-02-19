const http = require('https')
const config = require('../config')

module.exports.all = (request, response) => {
  var request = http.request({
    host: config.host,
    path: config.path.province,
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

module.exports.single = (request, response, idcity, idprovince) => {
  var request = http.request({
    host: config.host,
    path: config.path.province + '?id=' + idcity + '&province=' + idprovince,
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