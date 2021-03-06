// below use in nodejs
var assert = require('assert')
var test = require('./tdd')
/*
function assert(v, msg) {
    if (v != true) throw Error(msg || v + ' == ' + 'true')
}
*/
test('simple false', function() {
    assert(false)
})

test('double done is ok', function(done) {
  setTimeout(function() {
    assert(true, 'double done')
    done()
    done()
  }, 1000)
})

test('timeout can be catch', function(done) {
  assert(true, 'expect timeout')
})

test('async error can be catch', function(done) {
  setTimeout(function() {
    assert(false, 'async error')
  }, 1200)
})

test('simple ok', function() {
  assert(true)
})
