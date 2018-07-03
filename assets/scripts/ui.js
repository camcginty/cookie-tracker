'use strict'

const store = require('./store')
const showCookiesTemplate = require('./templates/cookie-listing.handlebars')

const signUpSuccess = function (signUpSuccess) {
  console.log('ui.signUpsuccess function')
  clearText()
  $('#info').append('You now have an account. Please sign in.')
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('sign-in-form').reset()
}

const signUpError = function (signUpError) {
  console.log('ui.SignUpError function')
  clearText()
  $('#info').append("That didn't work... Try again.")
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const signInSuccess = function (data) {
  console.log('ui.signInSuccess function')
  store.user = data.user
  clearText()
  document.getElementById('info').textContent = 'Welcome, ' + data.user.screen_name + '!'
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
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  // document.getElementById('change-password-form').reset()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  console.log('ui.changePasswordSuccess function')
  clearText()
  $('#info').append('Password changed.')
  document.getElementById('change-password-form').reset()
  // document.getElementById('edit-cookies-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const changePasswordError = function (changePasswordError) {
  console.log('ui.changePasswordSuccess')
  clearText()
  $('#info').append("That didn't work.")
  document.getElementById('change-password-form').reset()
  // document.getElementById('edit-cookies-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const signOutSuccess = function (signOutSuccess) {
  console.log('ui.signOutSuccess function')
  clearText()
  $('#info').append('Bye. Come again!')
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const signOutError = function (signOutError) {
  console.log('ui.signOurError function')
  clearText()
  $('#info').append("That didn't work.")
}

const addCookiesSuccess = function (data) {
  console.log('ui.addCookieSuccess function')
  clearText()
  updateTable(data)
  document.getElementById('add-cookie-form').reset()
  // document.getElementById('edit-cookies-form').reset()
  document.getElementById('change-password-form').reset()
}

const addCookiesError = function () {
  console.log('ui.addCookieError function')
  clearText()
  $('#info').append('Broken! Try again.')
  // document.getElementById('sign-in-form').reset()
  // document.getElementById('edit-cookies-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const getCookiesSuccess = (data) => {
  console.log('ui getCookiesSuccess function')
  console.log('data is ', data)
  const showCookiesHtml = showCookiesTemplate({ cookies: data.cookies })
  clearText()
  document.getElementById('add-cookie-form').reset()
  document.getElementById('change-password-form').reset()
  store.cookie = data.cookies
  $('#info').append(showCookiesHtml)
}

const getCookiesError = function () {
  console.log('ui.getCookieError function')
  clearText()
  $('#info').append('Broken! Try again.')
  // document.getElementById('sign-in-form').reset()
  // document.getElementById('edit-cookies-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const editCookiesSuccess = function (data) {
  console.log('ui.editCookieSuccess function')
  clearText()
  updateTable(data)
  $('#edit-cookies').hide()
  store.cookie = data.cookie
  console.log('data.cookie is ', data.cookie)
  document.getElementById('add-cookie-form').reset()
  document.getElementById('edit-cookies-form').reset()
  document.getElementById('change-password-form').reset()
}

const editCookiesError = function () {
  console.log('ui.editCookieError function')
  clearText()
  $('#info').append('Broken! Try again.')
  // document.getElementById('sign-in-form').reset()
  document.getElementById('edit-cookies-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const deleteCookiesSuccess = function () {
  console.log('ui deleteCookiesSuccess function')
  $('#edit-cookies').hide()
  // remove that row from table
  clearText()
  document.getElementById('edit-cookies-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
}

const deleteCookiesError = function () {
  console.log('ui.deleteCookieError function')
  clearText()
  $('#info').append('Broken! Try again.')
  // document.getElementById('sign-in-form').reset()
  document.getElementById('edit-cookies-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('add-cookie-form').reset()
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
  editCookiesError,
  deleteCookiesSuccess,
  deleteCookiesError
}
