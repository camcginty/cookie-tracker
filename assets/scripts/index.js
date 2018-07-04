'use strict'

const authEvents = require('./auth-events.js')
const events = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.pre-sign-in').show()
  $('.signed-in').hide()
  $('#edit-cookies').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#add-cookie-form').on('submit', events.onAddCookies)
  $('#get-cookies').on('click', events.onGetCookies)
  $('body').on('click', '.edit-button', events.onEditButton)
  $('body').on('submit', '#edit-cookies-form', events.onEditCookies)
  $('body').on('submit', '#delete-cookies', events.onDeleteCookies)
})

const getCookies = function () {
  events.onGetCookies()
}

// to-do:
// - show cookies table automatically when user signs in
// - update cookies table in real time (refresh after edit/delete)
// - get rid of any need for show cookies button
// - delete might not be deleting object? just emptying it of data?
// - autopopulate edit form with more than just id number (store cookie?)
// - created cookies being added to cookies table twice
// - add get cookies total (all cookies, always visible) .reduce?
// - add cookie totals per user (always number next to user?)
// - log in message greets them by screenname instead of email
// - css
// - add CB logo?
// - add PAX logo?
// - add cb cookie in header next to tab name
//
// done:

module.exports = {
  getCookies
}
