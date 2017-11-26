//*****************************************************************************
// Fun, fun, function factory
// here we create a function factory to generate our tests functions
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz5');

  const controller = function (from, to) {
    const ar = Array.from({length: to - from + 1}, (elem, index) => index + 1);
    const results = ar.map((elem, index) => formatOutput(test(elem)));
    results.forEach(print);
  };
  // function factory to test conditions
  const testMaker = function (condition, whenTrue) {
    return function (tuple) {
      if (condition(tuple[0])) {
        tuple.push(whenTrue);
      }
      return tuple;
    }
  };
  // using es2015 arrow functions since they are prettier
  const initialize = x => [x];
  const fizz = testMaker(x => x % 3 === 0, 'Fizz');
  const buzz = testMaker(x => x % 5 === 0, 'Buzz');
  const test = num => buzz(fizz(initialize(num)));

  const formatOutput = function (ar) {
    return ar.reduce((prev, curr, ndx) => ndx === 1 ? prev + ' ' + curr : prev + curr, '');
  };

  const print = function (output) {
    console.info(output);
  };

  controller(1, 100);
}());

// think about how we would add another test function