const yo = require('yo-yo')
const layout = require('../layout')

const template = yo`<div class="containter timeline">
    <div class="row">
        <div class="col s12 m10 offset-m1 l6 offset-l3">
            Contenido
        </div>
    </div>
</div>`

module.exports = layout(template)
