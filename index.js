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

let myModule = (function () {
  let _data = []
  let _render = function () { console.log('rendered') }
  let _add = function () { }
  let _remove = function () { }
  return { render: _render }
})()

myModule.render