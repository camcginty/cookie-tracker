'use strict'

const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')

const onAddCookies = function (event) {
  console.log('events add cookies function')
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.addCookies(data)
    .then(authUi.addCookiesSuccess)
    .catch(authUi.error)
}

const onGetCookies = function () {
  console.log('events.onGetCookies function')
  event.preventDefault()
  authApi.getCookies()
    .then(authUi.getCookiesSuccess)
    .catch(authUi.error)
}

let thisId = null
let thisName = null
let thisAmount = null
let thisUnits = null

const onEditButton = function () {
  console.log('events edit button')
  event.preventDefault()
  $('#edit-cookies').show()
  debugger
  thisId = this.id
  thisName = this.name
  thisAmount = this.amount
  thisUnits = this.distributableUnits
  autoFill(thisId, thisName, thisAmount, thisUnits)
}

const autoFill = function (thisId, thisName, thisAmount, thisUnits) {
  document.getElementById('autofill-id').value = thisId
  document.getElementById('autofill-name').value = thisName
  document.getElementById('autofill-amount').value = thisAmount
  document.getElementById('autofill-units').value = thisUnits
}

const onEditCookies = function (thisId) {
  event.preventDefault()
  console.log('events onEditCookies function')
  const data = getFormFields(event.target)
  console.log(data)
  authApi.editCookies(data)
    .then(authUi.editCookiesSuccess)
    .catch(authUi.error)
}

const onDeleteCookies = function (thisId) {
  event.preventDefault()
  console.log('events onDeleteCookies function')
  const data = getFormFields(event.target)
  console.log(data)
  authApi.deleteCookies(data)
    .then(authUi.deleteCookiesSuccess)
    .catch(authUi.error)
}

module.exports = {
  onAddCookies,
  onGetCookies,
  onEditCookies,
  onEditButton,
  onDeleteCookies
}
