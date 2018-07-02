'use strict'

const store = require('./store')

const signUpSuccess = function (signUpSuccess) {
  console.log('ui.signUpsuccess function')
  clearText()
  $('#info').append('You now have an account. Please sign in.')
  // setTimeout(clearText, 2500)
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('sign-in-form').reset()
}

const signUpError = function (signUpError) {
  console.log('ui.SignUpError function')
  clearText()
  $('#info').append("That didn't work... Try again.")
  // setTimeout(clearText, 2500)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const signInSuccess = function (signInSuccess) {
  console.log('ui.signInSuccess function')
  store.user = signInSuccess.user
  clearText()
  document.getElementById('info').textContent = 'Welcome, ' + store.user.email + '!'
  // setTimeout(clearText, 2500)
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  // document.getElementById('change-password-form').reset()
  $('.pre-sign-in').hide()
  $('.signed-in').show()
}

const signInError = function (signInError) {
  console.log('ui.signInError function')
  clearText()
  $('#info').append('Broken! Try again.')
  // setTimeout(clearText, 2500)
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  // document.getElementById('change-password-form').reset()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  console.log('ui.changePasswordSuccess function')
  clearText()
  $('#info').append('Password changed.')
  // setTimeout(clearText, 2500)
  document.getElementById('change-password-form').reset()
  document.getElementById('edit-cookies').reset()
  document.getElementById('add-cookie-form').reset()
}

const changePasswordError = function (changePasswordError) {
  console.log('ui.changePasswordSuccess')
  clearText()
  $('#info').append("That didn't work.")
  // setTimeout(clearText, 2500)
  document.getElementById('change-password-form').reset()
  document.getElementById('edit-cookies').reset()
  document.getElementById('add-cookie-form').reset()
}

const signOutSuccess = function (signOutSuccess) {
  console.log('ui.signOutSuccess function')
  clearText()
  $('#info').append('Bye. Come again!')
  // setTimeout(clearText, 2500)
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const signOutError = function (signOutError) {
  console.log('ui.signOurError function')
  clearText()
  $('#info').append("That didn't work.")
  // setTimeout(clearText, 2500)
}

const addCookiesSuccess = function () {
  console.log('ui.addCookieSuccess function')
  clearText()
  document.getElementById('info').textContent = 'cookies added'
  // setTimeout(clearText, 2500)
  document.getElementById('add-cookie-form').reset()
  document.getElementById('edit-cookies').reset()
  document.getElementById('change-password-form').reset()
}

const addCookiesError = function () {
  console.log('ui.addCookieError function')
  clearText()
  $('#info').append('Broken! Try again.')
  // setTimeout(clearText, 2500)
  // document.getElementById('sign-in-form').reset()
  document.getElementById('edit-cookies').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const getCookiesSuccess = function () {
  console.log('ui.getCookieSuccess function')
  clearText()
  document.getElementById('info').textContent = 'cookie list goes here'
  // setTimeout(clearText, 2500)
  document.getElementById('add-cookie-form').reset()
  document.getElementById('edit-cookies').reset()
  document.getElementById('change-password-form').reset()
}

const getCookiesError = function () {
  console.log('ui.getCookieError function')
  clearText()
  $('#info').append('Broken! Try again.')
  // setTimeout(clearText, 2500)
  // document.getElementById('sign-in-form').reset()
  document.getElementById('edit-cookies').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const editCookiesSuccess = function () {
  console.log('ui.editCookieSuccess function')
  clearText()
  document.getElementById('info').textContent = 'cookies updated'
  // setTimeout(clearText, 2500)
  document.getElementById('add-cookie-form').reset()
  document.getElementById('edit-cookies-form').reset()
  document.getElementById('change-password-form').reset()
}

const editCookiesError = function () {
  console.log('ui.editCookieError function')
  clearText()
  $('#info').append('Broken! Try again.')
  // setTimeout(clearText, 2500)
  // document.getElementById('sign-in-form').reset()
  document.getElementById('edit-cookies').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const clearText = function () {
  document.getElementById('info').textContent = ''
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError,
  addCookiesSuccess,
  addCookiesError,
  getCookiesSuccess,
  getCookiesError,
  editCookiesSuccess,
  editCookiesError
}
