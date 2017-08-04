if (!window.Intl) {
    // solo en Safari
    window.Intl = require('intl')
    require('intl/locale-data/jsonp/en-US.js')
    require('intl/locale-data/jsonp/es.js')
}

window.IntlRelativeFormat = require('intl-relativeformat')
const IntlMessageFormat = require('intl-messageformat')

require('intl-relativeformat/dist/locale-data/en.js')
require('intl-relativeformat/dist/locale-data/es.js')

var rf = new IntlRelativeFormat('es')

const es = require('./es')
const en = require('./en-US')

const MESSAGES = {}
MESSAGES.es = es
MESSAGES['en-US'] = en

const locale = localStorage.locale || 'es'

module.exports = {
    message: function (text, opts){
        opts = opts || {}
        const msg = new IntlMessageFormat(MESSAGES[locale][text], locale)
        return msg.format(opts)
    },
    date: new IntlRelativeFormat(locale)
}
