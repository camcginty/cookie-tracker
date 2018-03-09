'use strict'

let apiUrl
const apiUrls = {
  production: '<replace-with-heroku-url>',
  development: 'http://localhost:4741'
}

const setAPIHost = function () {
  if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
  } else {
    apiUrl = apiUrls.production
  }
}

module.exports = {
  setAPIHost: setAPIHost,
  apiUrl: apiUrl
}
