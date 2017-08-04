const yo = require('yo-yo')
const translate = require('../translate')

const el = yo`<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col s12 l3 center-align">
                <a href="#" class="dropdown-button btn btn-flat" data-activates="dropdown1">${translate.message('language')}</a>

                <ul id="dropdown1" class="dropdown-content">
                    <li><a href="#" onclick=${lang.bind(null, 'es')}>${translate.message('spanish')}</a></li>
                    <li><a href="#" onclick=${lang.bind(null, 'en-US')}>${translate.message('english')}</a></li>
                </ul>
            </div>
            <div class="col s12 l3 push-l6 center-align">
                2017 Platzigram
            </div>
        </div>
    </div>
</footer>`

function lang(locale){
    localStorage.locale = locale
    location.reload();
}

document.body.appendChild(el)
