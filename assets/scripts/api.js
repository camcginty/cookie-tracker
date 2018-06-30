'use strict'

const config = require('./config.js')
const store = require('./store')
// const ui = require('./ui.js')

const signUp = function (data) {
  console.log('api.signup function')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  console.log('api.signIn function')
  console.log('data is ' + data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  console.log('api.changePassword function')
  console.log('data is ' + data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  console.log('api.signOut function')
  console.log('store.user.token is ' + store.user.token)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addCookies = function (data) {
  console.log('api.addCookies function')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/cookies',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCookies = function () {
  console.log('api.getCookies function')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/cookies',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addCookies,
  getCookies
}
