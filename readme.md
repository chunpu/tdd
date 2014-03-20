Tdd.js
===

A really tiny TDD style test framework, support Nodejs and Browsers

simple demo

```javascript
test('test1', function() {
  assert(false)
})
```


### Support async test

```javascript
test('async test', function(done) {
  setTimeout(function() {
    assert(false, 'should true')
  }, 1200)
})
```

see more demo in `demo.js`

### TODO

all need now is a pretty reporter
