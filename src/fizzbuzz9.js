//*****************************************************************************
// The step too far
// this one is a bit hard to read
// we can skip the generation of intermediate variables, with lambdas
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz9!');

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

  const controllerMaker = function (testFunc, formatFunc, outputFunc) {
    return function (from, to) {
      const ar = Array.from({length: to - from + 1}, (elem, index)=> index + 1);
      const mapFunc = compose(testFunc, formatFunc);
      const results = ar.map((elem, index)=>mapFunc(elem));
      results.forEach(outputFunc);
    };
  };

  const formatOutput = function (ar) {
    return ar.reduce((prev, curr, ndx) => ndx == 1 ? prev + ' ' + curr : prev + curr, '');
  };

  // this is the only impure functions which remains, but it is to be expected
  const print = function (output) {
    console.info(output);
  };

  // this is probably the step too far - this code is much harder to read than the previous version
  controllerMaker(compose(compose(x => [x], testMaker(x=>x % 3 === 0, 'Fizz')), testMaker(x=>x % 5 === 0, 'Buzz')),formatOutput, print)(1, 106);
}());