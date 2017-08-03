const page = require('page')
const empty = require('empty-element')
const template = require('./template')
const title = require('title')

page('/signup', function (context, next){
    title('Platzigram - Sign up')
    const main = document.getElementById('main-container')
    empty(main).appendChild(template)
})
