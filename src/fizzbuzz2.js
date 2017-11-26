//*****************************************************************************
// Separation of Concerns - SOC, still applies in functional programming
// we've broken it down to four functions:
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz2');

  // 1: a controller since it is in charge
  // let's take the range as parameters instead of hard coding
  const controller = function (from, to) {
    for (let i = from; i < to; i++) {
      print(formatOutput(test(i)));
    }
  };
  // 2: a tester
  const test = function (num) {
    let retval = [num];
    if (num % 3 === 0) {
      retval.push('Fizz');
    }
    if (num % 5 === 0) {
      retval.push('Buzz');
    }
    return retval;
  };
  // 3: formatter
  const formatOutput = function (ar) {
    let output = ar[0] + ' ';
    for (let i = 1; i < ar.length; i++) {
      output += ar[i];
    }
    return output;
  };
  // 4: display the results
  const print = function (output) {
    console.info(output);
  };

  controller(1, 100);
}());

// talk about:
// map - transforms a collection into another collection
// reduce - transforms a collection to a single value
// forEach - iterates safely over a collection
