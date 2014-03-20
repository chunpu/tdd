!function(f) {
   if ('object' == typeof exports) module.exports = f()
   else if ('function' == typeof define && define.amd) define(f)
   else if (typeof window != 'undefined') window.test = f()
}(function() {

var isNode = true
if (typeof window !== 'undefined') {
  // browser
  isNode = false
} else if (typeof process == 'undefined') {
  // not nodejs?
  throw Error('tdd should run in Browser or Nodejs')
}

var arr = []
  , index = 0
  , currentDone
  , timer

globalCatch()

function test() {
  if (arr.push(arguments) === index + 1) next() 
}

function Done() {
  var i = index
  var start = +new Date
  function done(err) {
    if (arr[i][2]) return
    if (err && !(err instanceof Error)) err = Error(err)
    var msg = err ? err.message : ''
    arr[i][2] = {
      err: err,
      time: +new Date - start,
      msg: msg,
      title: arr[i][0]
    }
    // all else need is A pretty reporter
    console.log(arr[index][2])
    index++
    if (index !== arr.length) next()
  }
  return done
}

function next() {
  if (index === arr.length) return
  clearTimeout(timer)
  var fn = arr[index][1]
  var done = currentDone = Done()
  try {
    fn(done)
    if (fn.length) {
      timer = setTimeout(function() {
        done('timeout(2s), move to next')
      }, 2000)
    } else done()
  } catch (err) {
    done(err)
  }
}

function globalDone(err) {
  currentDone(err)
  return true // take the error
}

function globalCatch() {
  if (isNode) process.on('uncaughtException', globalDone)
  else window.onerror = globalDone
}

return test
})
