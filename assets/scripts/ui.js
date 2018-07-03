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
const userCookies = []

const getCookiesSuccess = function (data) {
  console.log('ui.getCookieSuccess function')
  clearText()
  userId = store.user.id
  console.log('user id is ' + userId)
  document.getElementById('info').append(data.cookies.length)
  makeUserCookies(data, userId)
  populateTable()
  document.getElementById('info').append(data.cookies.length)
  document.getElementById('add-cookie-form').reset()
  document.getElementById('change-password-form').reset()
}

const makeUserCookies = function (data, userId) {
  console.log('make user cookies array function')
  for (let i = 0; i < data.cookies.length; i++) {
    if (data.cookies[i].user !== null) {
      if (data.cookies[i].user.id === userId) {
        userCookies.push(data.cookies[i])
        console.log(data.cookies[i].user + ' does match')
      } else {
        console.log(data.cookies[i].user + " doesn't match")
      }
    } else {
      console.log('user is null')
    }
  }
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

const populateTable = function () {
  console.log('populate table function')
  for (let i = 0; i < userCookies.length; i++) {
    console.log(userCookies[i].cookieName)
    const row = '<tr><td>' + userCookies[i].cookieName + '</td><td>' + userCookies[i].amount + '</td><td>' +
  userCookies[i].distributableUnits + '</td><td><button class="edit-button">Edit</button></td></tr>'
    $('tbody').append(row)
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
