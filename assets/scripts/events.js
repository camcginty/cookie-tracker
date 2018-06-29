'use strict'

const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')

const onAddCookies = function (event) {
  console.log('events.onAddCookies function')
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.addCookies(data)
    .then(authUi.addCookiesSuccess)
    .catch(authUi.addCookiesError)
}

const onGetCookies = function (event) {
  console.log('events.onGetCookies function')
  event.preventDefault()
  authApi.getCookies()
    // .then(authUi.getCookiesSuccess)
    // .catch(authUi.getCookiesError)
}

module.exports = {
  onAddCookies,
  onGetCookies
}
