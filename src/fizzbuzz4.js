//*****************************************************************************
// the test function is really 4 steps
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz4');

  // again some incremental changes
  // getting rid of the loop and replacing it with a map
  const controller = function (from, to) {
    const ar = Array.from({length: to - from + 1}, (elem, index)=> index + 1);
    const results = ar.map((elem, index)=>formatOutput(test(elem)));
    results.forEach(print);
  };

  // 1: convert the number into an array
  const initialize = function (x) {
    return [x];
  };

  // 2: appends Fizz if the number is a multiple of 3
  const fizz = function (tuple) {
    if (tuple[0] % 3 === 0) {
      tuple.push('Fizz');
    }
    return tuple;
  };

  // 3: appends Buzz if the number is a multiple of 5
  const buzz = function (tuple) {
    if (tuple[0] % 5 === 0) {
      tuple.push('Buzz');
    }
    return tuple;
  };

  // 4: goes from step 1 to 3
  const test = function (num) {
    return buzz(fizz(initialize(num)));
  };

  const formatOutput = function (ar) {
    return ar.reduce((prev, curr, ndx) => ndx == 1 ? prev + ' ' + curr : prev + curr, '');
  };

  const print = function (output) {
    console.info(output);
  };

  controller(1, 100);
}());

// steps 2 and 3 have a bad code smell, the functions are very similar
// If only there was a way to combine them...

// go to the function-factory
