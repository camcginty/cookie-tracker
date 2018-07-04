'use strict'

const store = require('./store')
const showCookiesTemplate = require('./templates/cookie-listing.handlebars')

let signedIn = false

const signUpSuccess = function (signUpSuccess) {
  console.log('ui.signUpsuccess function')
  formResets()
  clearText()
  $('#info').append('You now have an account. Please sign in.')
}

const signInSuccess = function (data) {
  console.log('ui.signInSuccess function')
  store.user = data.user
  formResets()
  clearText()
  signedIn = true
  $('#info').append('Welcome, ' + data.user.screen_name + '!')
  $('.pre-sign-in').hide()
  $('.signed-in').show()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  console.log('ui.changePasswordSuccess function')
  formResets()
  clearText()
  $('#info').append('Password changed.')
}

const signOutSuccess = function (signOutSuccess) {
  console.log('ui.signOutSuccess function')
  formResets()
  clearText()
  signedIn = false
  $('#info').append('Bye. Come again!')
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const addCookiesSuccess = function (data) {
  console.log('ui.addCookieSuccess function')
  formResets()
  clearText()
  // updateTable(data)
}

const getCookiesSuccess = (data) => {
  console.log('ui getCookiesSuccess function')
  console.log('data is ', data)
  const showCookiesHtml = showCookiesTemplate({ cookies: data.cookies })
  formResets()
  clearText()
  store.cookie = data.cookies
  $('#info').append(showCookiesHtml)
}

const editCookiesSuccess = function (data) {
  console.log('ui.editCookieSuccess function')
  formResets()
  clearText()
  $('#edit-cookies').hide()
  store.cookie = data.cookie
  console.log('data.cookie is ', data.cookie)
}

const deleteCookiesSuccess = function () {
  console.log('ui deleteCookiesSuccess function')
  $('#edit-cookies').hide()
  formResets()
  // remove that row from table
  clearText()
}

const error = function () {
  console.log('ui.signedInError function')
  clearText()
  formResets()
  $('#info').append('Error! Try again.')
}

const formResets = function () {
  if (signedIn === true) {
    document.getElementById('edit-cookies-form').reset()
    document.getElementById('change-password-form').reset()
    document.getElementById('add-cookie-form').reset()
  } else {
    document.getElementById('sign-in-form').reset()
    document.getElementById('sign-up-form').reset()
  }
}

const updateTable = function (data) {
  const newRow = '<tr><td>' + data.cookie.cookieName + '</td><td>' + data.cookie.amount + '</td><td>' +
  data.cookie.distributableUnits + '</td><td><button class="edit-button">Edit</button></td></tr>'
  $('tbody').append(newRow)
}

const clearText = function () {
  document.getElementById('info').textContent = ''
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  addCookiesSuccess,
  getCookiesSuccess,
  editCookiesSuccess,
  deleteCookiesSuccess,
  error
}
