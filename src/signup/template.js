const yo = require('yo-yo')
const landing = require('../landing')

const signup_form = yo`<div class="col s12 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="platzigram">Platzigram</h1>
            <form class="signup-form" action="index.html" method="post">
                <h2>Registrate para ver fotos de tus amigos</h2>
                <div class="section">
                    <a href="#" class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                    <a href="#" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Iniciar sesión</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="email" name="email" placeholder="Correo Electronico">
                    <input type="text" name="name" placeholder="Nombre Completo">
                    <input type="text" name="username" placeholder="Usuario">
                    <input type="password" name="password" placeholder="Contraseña">
                    <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
                </div>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="login-box">
            Tienes una cuenta? <a href="/signin">Entrar</a>
        </div>
    </div>
</div>`

module.exports = landing(signup_form)
