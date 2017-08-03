const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', function(req, res) {
	res.render('index', {title: 'Platzigram'})
})

app.get('/signup', function(req, res) {
	res.render('index', {title: 'Platzigram - Sign up'})
})

app.get('/signin', function(req, res) {
	res.render('index', {title: 'Platzigram - Sign In'})
})

app.listen(3000, function(err) {
	if (err) return console.log('Error!!!')
	console.log('Platzigram escuchando en el puerto 3000')
})
