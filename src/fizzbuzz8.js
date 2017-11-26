//*****************************************************************************
// Are we done yet?
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz8');

  const testMaker = function (condition, whenTrue) {
    return function (tuple) {
      if (condition(tuple[0])) {
        tuple.push(whenTrue);
      }
      return tuple;
    }
  };

  const compose = function (fn1, fn2) {
    return function (arg) {
      return fn2(fn1(arg));
    }
  };
  // this function creates a controller
  const controllerMaker = function (testFunc, formatFunc, outputFunc) {
    return function (from, to) {
      const ar = Array.from({length: to - from + 1}, (elem, index) => index + 1);
      const mapFunc = compose(testFunc, formatFunc);
      const results = ar.map((elem, index) => mapFunc(elem));
      results.forEach(outputFunc);
    };
  };
  // unchanged from the last iteration
  const initialize = x => [x];
  const fizz = testMaker(x => x % 3 === 0, 'Fizz');
  const buzz = testMaker(x => x % 5 === 0, 'Buzz');
  const bang = testMaker(x => x % 7 === 0, 'Bang');
  const boop = testMaker(x => x % 11 === 0, 'Boop');
  const test = num => boop(bang(buzz(fizz(initialize(num)))));
  // unchanged from the last iteration
  const formatOutput = function (ar) {
    return ar.reduce((prev, curr, ndx) => ndx === 1 ? prev + ' ' + curr : prev + curr, '');
  };
  // unchanged from the last iteration
  const print = function (output) {
    console.info(output);
  };
  // now we even use a factory function to create our controller
  const fizzBuzz = controllerMaker(test, formatOutput, print);
  fizzBuzz(1, 106);
}());