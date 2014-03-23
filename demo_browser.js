// below use in nodejs
//var assert = require('assert')
//var test = require('./tdd')
function assert(v, msg) {
    if (v != true) throw Error(msg || v + ' == ' + 'true')
}
test('111111', function() {
    assert(false)
})

test('2222222', function(done) {
  setTimeout(function() {
    assert(true, 'double done')
    done()
    done()
  }, 1000)
})

test('33333333', function(done) {
  assert(true, 'expect timeout')
})

test('444444', function(done) {
  setTimeout(function() {
    assert(false, 'qqqqqqqqqqq')
  }, 1200)
})

test('5555', function() {
  assert(true)
})
