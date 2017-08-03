const page = require('page')

const main = document.getElementById('main-container')

page('/', function (context, next){
    main.innerHTML = 'HOME <a href="/signup">SIGNUP</a>'
})

page('/signup', function (context, next){
    main.innerHTML = 'SIGNUP <a href="/">HOME</a>'
})

page()
