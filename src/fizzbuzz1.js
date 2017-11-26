//*****************************************************************************
// Just make it work
// our first pass attempt works and is fairly concise,
// but no separation of concerns and no flexibility either.
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz1');

  // this is not a function, it is a procedure
  const fizzBuzz = function () {
    for (let i = 1; i <= 100; i += 1) {
      let printVal = i + ' ';
      if (i % 3 === 0) {
        printVal += 'Fizz';
      }
      if (i % 5 === 0) {
        printVal += 'Buzz';
      }
      console.info(printVal);
    }
  };

  fizzBuzz();
}());

// let's start thinking functionally
