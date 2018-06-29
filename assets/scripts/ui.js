'use strict'

const store = require('./store')

const signUpSuccess = function (signUpSuccess) {
  console.log('ui.signUpsuccess function')
  // clearText()
  // $('#info').append('You now have an account. Sign in to play.')
  // setTimeout(clearText, 2500)
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('sign-in-form').reset()
}

const signUpError = function (signUpError) {
  console.log('ui.SignUpError function')
  // clearText()
  // $('#info').append("That didn't work... Try again.")
  // setTimeout(clearText, 2500)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const signInSuccess = function (signInSuccess) {
  console.log('ui.signInSuccess function')
  store.user = signInSuccess.user
  // clearText()
  // document.getElementById('info').textContent = 'Welcome, ' + store.user.email + '!'
  // setTimeout(clearText, 2500)
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  // document.getElementById('change-password-form').reset()
  $('.pre-sign-in').hide()
  $('.signed-in').show()
}

const signInError = function (signInError) {
  console.log('ui.signInError function')
  // clearText()
  // $('#info').append('Broken! Try again.')
  // setTimeout(clearText, 2500)
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  // document.getElementById('change-password-form').reset()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  console.log('ui.changePasswordSuccess function')
  // clearText()
  // $('#info').append('Password changed.')
  // setTimeout(clearText, 2500)
  document.getElementById('change-password-form').reset()
  // document.getElementById('sign-up-form').reset()
  // document.getElementById('sign-in-form').reset()
}

const changePasswordError = function (changePasswordError) {
  console.log('ui.changePasswordSuccess')
  // clearText()
  // $('#info').append("That didn't work.")
  // setTimeout(clearText, 2500)
  document.getElementById('change-password-form').reset()
  // document.getElementById('sign-up-form').reset()
  // document.getElementById('sign-in-form').reset()
}

const signOutSuccess = function (signOutSuccess) {
  console.log('ui.signOutSuccess function')
  // clearText()
  // $('#info').append('Bye. Come again!')
  // setTimeout(clearText, 2500)
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const signOutError = function (signOutError) {
  console.log('ui.signOurError function')
  // clearText()
  // $('#info').append("That didn't work.")
  // setTimeout(clearText, 2500)
}

const addCookieSuccess = function () {
  console.log('ui.addCookieSuccess function')
  // clearText()
  // document.getElementById('info').textContent = 'Welcome, ' + store.user.email + '!'
  // setTimeout(clearText, 2500)
  document.getElementById('add-cookie-form').reset()
  // document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const addCookieError = function () {
  console.log('ui.addCookieError function')
  // clearText()
  // $('#info').append('Broken! Try again.')
  // setTimeout(clearText, 2500)
  // document.getElementById('sign-in-form').reset()
  // document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const getCookieSuccess = function () {
  console.log('ui.getCookieSuccess function')
  // clearText()
  // document.getElementById('info').textContent = 'Welcome, ' + store.user.email + '!'
  // setTimeout(clearText, 2500)
  document.getElementById('add-cookie-form').reset()
  // document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const getCookieError = function () {
  console.log('ui.getCookieError function')
  // clearText()
  // $('#info').append('Broken! Try again.')
  // setTimeout(clearText, 2500)
  // document.getElementById('sign-in-form').reset()
  // document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
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
  addCookieSuccess,
  addCookieError,
  getCookieSuccess,
  getCookieError
}
