!function(f) {
  if ('object' == typeof exports) module.exports = f()
  else if ('function' == typeof define && define.amd) define(f)
  else if (typeof window != 'undefined') window.assert = f()
}(function() {

// main
function ok(val, msg) {
  if (!val) fail(val, true, msg, '==')
}

function AssertError(actual, expected, msg) {
  this.name = 'AssertError'
  this.actual = actual
  this.expected = expected
  this.message = msg
  Error.captureStackTrace(this, fail)
}
AssertError.prototype = Error.prototype

function fail(actual, expected, msg, operator) {
  msg = msg || [JSON.stringify(actual), operator, JSON.stringify(expected)].join(' ')
  throw new AssertError(actual, expected, msg)
}

// function include equal has an expected
//
function equal(actual, expected, msg) {
  if (actual != expected) fail(actual, expected, msg, '==')
}

return ok
})
