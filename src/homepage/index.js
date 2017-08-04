const page = require('page')
const empty = require('empty-element')
const template = require('./template')
const title = require('title')
const request = require('superagent')
const header = require('../header')
const axios = require('axios')

page('/', header, loadPicturesFetch, function (context, next){
    title('Platzigram')
    const main = document.getElementById('main-container')

    empty(main).appendChild(template(context.pictures))
})

// function loadPictures(context, next){
//     request
//         .get('/api/pictures')
//         .end(function (err, res){
//             if (err) return console.log(err)
//
//             context.pictures = res.body
//             next()
//         })
// }

// function loadPicturesAxios(context, next){
//     axios
//         .get('/api/pictures')
//         .then(function (res){
//             context.pictures = res.data
//             next()
//         })
//         .catch(function (err){
//             console.log(err)
//         })
// }

function loadPicturesFetch(context, next){
    fetch('/api/pictures')
        .then(function (res){
            return res.json()
        })
        .then(function (pictures){
            context.pictures = pictures
            next()
        })
        .catch(function (err){
            console.log(err)
        })
}
