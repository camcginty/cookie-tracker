'use strict'

const authApi = require('./api.js')
const authUi = require('./ui.js')
const store = require('./store.js')
const getFormFields = require('../../lib/get-form-fields')

const onAddCookies = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.addCookies(data)
    .then(authUi.addCookiesSuccess)
    .then(onGetCookies)
    .catch(authUi.error)
}

const onGetCookies = function () {
  // event.preventDefault()
  authApi.getCookies()
    .then(authUi.getCookiesSuccess)
    .catch(authUi.error)
}

let thisId = null
// let thisName = null
// let thisAmount = null
// let thisUnits = null

const onEditButton = function () {
  event.preventDefault()
  $('#edit-cookies').show()
  thisId = this.id
  store.thisCookie = thisId
  // thisName = this.name
  // thisAmount = this.amount
  // thisUnits = this.distributableUnits
  document.getElementById('autofilled').value = thisId
}

const autoFill = function (thisId) {
  document.getElementById('autofill-id').value = thisId
  // document.getElementById('autofill-name').value = thisName
  // document.getElementById('autofill-amount').value = thisAmount
  // document.getElementById('autofill-units').value = thisUnits
}

const onEditCookies = function (thisId) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.editCookies(data)
    .then(authUi.editCookiesSuccess)
    .then(onGetCookies)
    .catch(authUi.error)
}

const onDeleteButton = function () {
  event.preventDefault()
  $('#delete-cookies').show()
  thisId = this.id
  store.thisCookie = thisId
  // thisName = this.name
  // thisAmount = this.amount
  // thisUnits = this.distributableUnits
  autoFill(thisId)
}

const onDeleteCookies = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.deleteCookies(data)
    .then(authUi.deleteCookiesSuccess(data))
    .then(onGetCookies)
    .catch(authUi.error)
}

module.exports = {
  onAddCookies,
  onGetCookies,
  onEditCookies,
  onEditButton,
  onDeleteCookies,
  onDeleteButton
}
