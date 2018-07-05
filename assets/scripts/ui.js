'use strict'

const store = require('./store')
const showCookiesTemplate = require('./templates/cookie-listing.handlebars')

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
  console.log('ui.addCookieSuccess function')
  formResets()
  clearText()
  $('#info').append('Noted! Press refresh to see your updated cookie list.')
  // addToTable(data)
}

const getCookiesSuccess = (data) => {
  cookieTable(data)
  formResets()
  clearText()
  store.cookie = data.cookies
  $('#show').hide()
  $('#refresh').show()
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
  $('#info').append('Noted! Press refresh to see your updated cookie list.')
}

const deleteCookiesSuccess = function (data) {
  $('#edit-cookies').hide()
  $('#delete-cookies').hide()
  formResets()
  // deleteRow(data)
  clearText()
  $('#info').append('Noted! Press refresh to see your updated cookie list.')
}

const error = function () {
  console.log('ui.error function')
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

// const addToTable = function (data) {
//   const newRow = '<tr><td>' + data.cookie.cookieName + '</td><td>' + data.cookie.amount + '</td><td>' +
//   data.cookie.distributableUnits + '</td><td><button class="edit-button">Edit</button></td></tr>'
//   $('thead').append(newRow)
// }
//
// const deleteRow = function (data) {
//   console.log('delete row function')
//   if (data.cookie.cookieName === '') {
//     $(this).parents('tr').remove()
//   }
// }
//
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
