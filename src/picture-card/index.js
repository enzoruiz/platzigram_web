const yo = require('yo-yo')
// const moment = require('moment');
// require('moment/locale/es')
// moment.locale('es')
const translate = require('../translate')

module.exports = function (pic){
    let el
    function render(pic_render){
        return yo`<div class="card ${pic_render.liked ? 'liked' : ''}">
            <div class="card-image">
              <img class="activator" src="${pic_render.url}">
            </div>
            <div class="card-content">
              <a href="/${pic_render.user.username}" class="card-title">
                <img src="${pic_render.user.avatar}" class="avatar"/>
                <span class="username">${pic_render.user.username}</span>
              </a>
              <small class="right time">${translate.date.format(pic_render.createdAt)}</small>
              <p>
                <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
                <span class="left likes">${translate.message('likes', {likes: pic_render.likes})}</span>
              </p>
            </div>
          </div>`
    }

    function like(liked){
        pic.liked = liked
        pic.likes += liked ? 1 : -1
        const newEl = render(pic)
        yo.update(el, newEl)
        return false
    }

    el = render(pic)
    return el
}
