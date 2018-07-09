'use strict'

const store = require('./store')
const showCookiesTemplate = require('./templates/baker-cookies.handlebars')

let signedIn = false

const signUpSuccess = function (signUpSuccess) {
  formResets()
  clearText()
  $('#info').append('You now have an account. Please sign in.')
}

const signInSuccess = function (data) {
  store.user = data.user
  formResets()
  clearText()
  signedIn = true
  $('.pre-sign-in').hide()
  $('.signed-in').show()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  formResets()
  clearText()
  $('#info').append('Password changed.')
}

const signOutSuccess = function (signOutSuccess) {
  formResets()
  clearText()
  signedIn = false
  $('#info').append('Bye. Come again!')
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const addCookiesSuccess = function (data) {
  formResets()
  clearText()
  $('#info').append('Noted!')
}

const getCookiesSuccess = (data) => {
  cookieTable(data)
  formResets()
  clearText()
  store.cookie = data.cookies
}

const cookieTable = function (data) {
  $('td').remove()
  const showCookiesHtml = showCookiesTemplate({ cookies: data.cookies })
  $('thead').append(showCookiesHtml)
}

const editCookiesSuccess = function (data) {
  formResets()
  clearText()
  $('#edit-cookies').hide()
  $('#delete-cookies').hide()
  $('#info').append('Noted!')
}

const deleteCookiesSuccess = function (data) {
  $('#edit-cookies').hide()
  $('#delete-cookies').hide()
  formResets()
  clearText()
  $('#info').append('Noted!')
}

const error = function () {
  clearText()
  formResets()
  $('#info').append('Error! Try again.')
}

const formResets = function () {
  if (signedIn === true) {
    document.getElementById('edit-cookies-form').reset()
    document.getElementById('change-password-form').reset()
    document.getElementById('add-cookie-form').reset()
    document.getElementById('delete-cookies-form').reset()
  } else {
    document.getElementById('sign-in-form').reset()
    document.getElementById('sign-up-form').reset()
  }
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
