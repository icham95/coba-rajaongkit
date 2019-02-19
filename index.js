const express = require('express')
const app = express()
const port = 3000

const province = require('./rajaongkir/province')
const city = require('./rajaongkir/city')
const cost = require('./rajaongkir/cost')

app.get('/province', (request, response) => {
  province.all(request, response)
})

app.get('/province/:id', (request, response) => {
  province.single(request, response, request.params.id)
})

app.get('/city/', (request, response) => {
  city.all(request, response)
})

app.get('/city/:city/:province', (request, response) => {
  city.single(request, response, request.params.city, request.params.province)
})

app.get('/cost/:origin/:destination/:weight/:courier', (request, response) => {
  // origin id kota / kab
  // destination id kota / kab
  cost.single(request, response,
    request.params.origin,
    request.params.destination,
    request.params.weight,
    request.params.courier)
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})