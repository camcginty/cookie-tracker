'use strict'

const store = require('./store')

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

let userId = null
let userCookies = []
let dataCookies = []

const getCookiesSuccess = function (data) {
  console.log('ui.getCookieSuccess function')
  clearText()
  userId = store.user.id
  console.log('user id is ' + userId)
  console.log(userCookies)
  // makeDataCookies(data)
  debugger
  // tableDisplay(data, userId)
  document.getElementById('info').append(data.cookies.length)
  document.getElementById('add-cookie-form').reset()
  document.getElementById('change-password-form').reset()
}
//
// const makeDataCookies = function (data) {
//   for (let i = 0; i <= dataCookies.length; i++) {
//     userCookies.push(data.cookies[i])
//   } console.log('userCookies is now ' + userCookies)
// }
//
// const tableDisplay = function (data, userId) {
//   console.log('tableDisplay function')
//   debugger
//   userCookies = data.cookies.filter(dataCookies.user.id === userId)
//   console.log(userCookies)
// }
//   for (let i = 0; i <= data.cookies.length; i++) {
//     debugger
//     if (data.cookies[i].user !== userId) {
//       console.log(data.cookies[i])
//       console.log(data.cookies[i].user + " doesn't match")
//       i++
//     } else {
//       userCookies.push(data.cookies[i])
//       console.log(data.cookies[i])
//       console.log(data.cookies[i].user + ' does match')
//       console.log(userCookies)
//       i++
//     }
//     updateTable()
//   }
// }

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
  document.getElementById('info').textContent = 'Updated to ' + data.cookie.distributableUnits + ' baggies of ' + data.cookie.cookieName
  updateTable(data)
  document.getElementById('add-cookie-form').reset()
  // document.getElementById('edit-cookies-form').reset()
  document.getElementById('change-password-form').reset()
}

const editCookiesError = function () {
  console.log('ui.editCookieError function')
  clearText()
  $('#info').append('Broken! Try again.')
  // document.getElementById('sign-in-form').reset()
  // document.getElementById('edit-cookies-form').reset()
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
  editCookiesError
}
