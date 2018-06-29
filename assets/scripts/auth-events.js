'use strict'

const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  console.log('authEvents.onSignUp function')
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('events.onSignin function')
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  console.log('events.onChangePassword function')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event.target is ' + event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onSignOut = function (event) {
  console.log('events.onSignOut function')
  event.preventDefault()
  // gameplayEvents.endGame()
  // gameplayEvents.clearBoard()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
