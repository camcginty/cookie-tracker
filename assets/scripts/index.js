'use strict'

const authEvents = require('./auth-events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.pre-sign-in').show()
  $('.signed-in').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // // $('#new-baker').on('click', authEvents.onCreateGame)
  // $('#new.game').on('click', gamePlayEvents.createGame)
  // $('#get-games').on('click', authEvents.onGetGames)
  // $('.box').on('click', gamePlayEvents.playHere)
})

// to-do:
// - css
// - add CB logo?
// - add PAX logo?
// - add get cookies total (all cookies, always visible)
// - add get cookies for users (list of types and numbers)
// - add cookie totals per user (always number next to user?)
//
// done:
