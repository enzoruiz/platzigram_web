const yo = require('yo-yo')
const landing = require('../landing')
const translate = require('../translate')

const signin_form = yo`<div class="col s12 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="platzigram">Platzigram</h1>
            <form class="signup-form" action="index.html" method="post">
                <div class="section">
                    <a href="#" class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
                    <a href="#" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> ${translate.message('signup.text')}</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="text" name="username" placeholder="${translate.message('username')}">
                    <input type="password" name="password" placeholder="${translate.message('password')}">
                    <button class="btn waves-effect waves-light btn-signup" type="submit">${translate.message('signin')}</button>
                </div>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="login-box">
            ${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.text')}</a>
        </div>
    </div>
</div>`

module.exports = landing(signin_form)
