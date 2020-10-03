// JavaScript Interview Question

// 1.Timeout: the amount of time set in the setTimeout function as a 'minimum delay' instead of as time used to determine priority/sequencing
// console.log('a')
// let timmy = setTimeout(function () {
//   console.log('b')
// }, 1)
// let timothy = setTimeout(function () {
//   console.log('c')
// }, 10)
// let timer = setTimeout(function () {
//   console.log('d')
// }, 0)
// console.log('e')
// Output: a, e, b, d, c

// 2.Async: num is 0 because just before the compiler got to the await keyword, num is already replaced by 0. So that line was paused as num = 0 + await 2. Doesn't matter if num was modified to 1 after line 3 was paused, it has already taken the value of 0. Hope that makes sense.
// let num = 0
// async function increment() {
//   num += await 2 // Promise.resolve(2)
//   console.log(num)
// }

// increment()
// num += 1 // num = num + 1
// console.log(num)
// Output: 1, 2

// 3.Reveal-module
// Revealing module pattern
// Turn this object literal into a module that only exposes the render method
// IIFE - Immediately Invoked Function Expression

// let myModule = {
//   data: [],
//   render: () => { },
//   add: () => { },
//   remove: () => { }
// }

// let myModule = (function () {
//   let _data = []
//   let _render = function () { console.log('rendered') }
//   let _add = function () { }
//   let _remove = function () { }
//   return { render: _render }
// })()

// myModule.render()

// 4.Params: The "arguments" is only available in functions that are declared with "function" - either named or anonymous. A.K.A. you can't use "arguments" inside an arrow function
// let f = function (a, b) {
//   if (arguments.length === f.length) {
//     console.log('We have a match')
//   } else {
//     console.log('No match')
//   }
// }

// // determine if the function received the number of params it expected
// f(1) // No match
// f(1, 2) // We have a match
// f(1, 2, 3) // No match

// 5.ASI
// ASI, object literals, square bracket syntax, hoisting
// what happends when you run this code? why?
// how would you fix it?

// let a = { a: 123 };
// [a].forEach(x => console.log(x))
// output: a is not defined.
// need a semicolon after let a = { a: 123}. Otherwise js will interprete the code as:
// let a; //undefined (hoisting)
// a = { a: 123 }[a].forEach(x => console.log(x))
// a = { a: 123 }[undefined].forEach(x => console.log(x))

/*
  Create an example of a JavaScript Singleton
  After the first object is created, it will return additional references to itself
*/

let obj = (function () {
  let objInstance; // private variable
  function create() {
    // private function to create methods and properties
    let _isRunning = false
    let start = function () {
      _isRunning = true
    }
    let stop = function () {
      _isRunning = false
    }
    let currentState = function () {
      return _isRunning
    }
    return {
      start, stop, currentState
    }
  }
  return {
    getInstance: function () {
      if (!objInstance) {
        objInstance = create()
      }
      return objInstance
    }
  }
})()

let obj1 = obj.getInstance()
let obj2 = obj.getInstance()
console.log(obj1.currentState())
console.log(obj2.currentState())
obj1.start()
console.log(obj1.currentState())
console.log(obj2.currentState())