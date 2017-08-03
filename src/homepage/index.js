const page = require('page')
const empty = require('empty-element')
const template = require('./template')
const title = require('title')

page('/', function (context, next){
    title('Platzigram')
    const main = document.getElementById('main-container')
    let pictures = [
        {
            user: {
                username: 'enzo.ruiz',
                avatar: 'http://trueautosite.com/wp-content/uploads/images/ferrari-enzo_1704.jpg'
            },
            url: 'http://trueautosite.com/wp-content/uploads/images/ferrari-enzo_1704.jpg',
            likes: 598,
            liked: true,
            createdAt: new Date()
        },
        {
            user: {
                username: 'don.tomas',
                avatar: 'https://i0.wp.com/www.mundoperro.net/wp-content/uploads/Cachorro-Labrador-6-meses.jpg'
            },
            url: 'https://i0.wp.com/www.mundoperro.net/wp-content/uploads/Cachorro-Labrador-6-meses.jpg',
            likes: 250,
            liked: true,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ]
    empty(main).appendChild(template(pictures))
})
