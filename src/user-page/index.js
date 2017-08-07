import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template'

page('/:username', header, loadUser, function (context, next){
    const main = document.getElementById('main-container')

    title(`Platzigram - ${context.user.username}`)
    empty(main).appendChild(template(context.user))
})

page('/:username/:id', header, loadUser, function (context, next){
    const main = document.getElementById('main-container')

    title(`Platzigram - ${context.user.username}`)
    empty(main).appendChild(template(context.user))
    $('.modal').modal({
        complete: function() {
            page(`/${context.user.username}`)
        }
    })
    $(`#modal${context.params.id}`).modal('open')
})

async function loadUser(context, next){
    try {
        context.user = await fetch(`/api/user/${context.params.username}`).then(res => res.json())
        next()
    } catch (err) {
        console.log(err)
    }
}
