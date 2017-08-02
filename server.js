const express = require('express')

const app = express()

app.get('/', function (req, res){
  res.send('Hola mundo!')
})

app.listen(3000, function (err){
  if (err) return console.log('Error!!!')
  console.log('Platzigram escuchando en el puerto 3000')
})
