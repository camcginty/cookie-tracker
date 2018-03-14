# getFormFields

Developers should use `getFormFields` to retrieve data from html forms for API
 requests.

`getFormFields` only retrieves data from form elements with a name attribute.

The object returned can be used to validate the form data.

**in `api.js`**

```js
'use strict'

const ajaxDefaults = {
  url: 'http://localhost:4741'
}

const myRequest = (data) => {
  return $.ajax({
    method: 'POST',
    data: data,
    url: ajaxDefaults.url
  })
}

module.exports = {
  myRequest
}
```

**in `ui.js`**

```js
'use strict'

const success = (data) => {
  // handle success
}

const failure = (err) => {
  // handle failure
}

module.exports = {
  success,
  failure
}
```

**in `index.js`**

```js
'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

$(() => {
  $('#my-form').on('submit', function (e) {
    let data = getFormFields(this)
    e.preventDefault()
    api.myRequest(data)
      .then(ui.success)
      .catch(ui.failure)
  })
})
```
