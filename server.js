const express = require('express')
const multer = require('multer')
const ext = require('file-extension');

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	filename: function(req, file, cb) {
		cb(null, Date.now() + '.' + ext(file.originalname))
	}
})

const upload = multer({'storage': storage}).single('picture')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', function(req, res) {
	res.render('index', {
		title: 'Platzigram'
	})
})

app.get('/signup', function(req, res) {
	res.render('index', {
		title: 'Platzigram - Sign up'
	})
})

app.get('/signin', function(req, res) {
	res.render('index', {
		title: 'Platzigram - Sign In'
	})
})

app.get('/api/pictures', function(req, res) {
	let pictures = [{
			user: {
				username: 'enzo.ruiz',
				avatar: 'http://trueautosite.com/wp-content/uploads/images/ferrari-enzo_1704.jpg'
			},
			url: 'http://trueautosite.com/wp-content/uploads/images/ferrari-enzo_1704.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date().getTime()
		},
		{
			user: {
				username: 'don.tomas',
				avatar: 'https://i0.wp.com/www.mundoperro.net/wp-content/uploads/Cachorro-Labrador-6-meses.jpg'
			},
			url: 'https://i0.wp.com/www.mundoperro.net/wp-content/uploads/Cachorro-Labrador-6-meses.jpg',
			likes: 2,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		}
	]

	setTimeout(function() {
		res.send(pictures)
	}, 2000)
})

app.post('/api/pictures', function (req, res){
	upload(req, res, function (err){
		if (err) {
			return res.send(500, "Error subiendo Imagen")
		}
		res.send(200, 'Imagen subida correctamente')
	})
})

app.listen(3000, function(err) {
	if (err) return console.log('Error!!!')
	console.log('Platzigram escuchando en el puerto 3000')
})
