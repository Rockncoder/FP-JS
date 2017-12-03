//*****************************************************************************
// The step too far
// this one is a bit hard to read
// we can skip the generation of intermediate variables, with lambdas
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz9!');
  // unchanged from the last iteration
  const testMaker = (condition, whenTrue) => tuple => condition(tuple[0]) ? [...tuple, whenTrue] : tuple;
  // unchanged from the last iteration
  const compose = (fn1, fn2) => arg => fn2(fn1(arg));

  // unchanged from the last iteration
  const controllerMaker = (testFunc, formatFunc, outputFunc) => (from, to) => {
    const ar = Array.from({length: to - from + 1}, (elem, index) => index + 1);
    const mapFunc = compose(testFunc, formatFunc);
    const results = ar.map(elem => mapFunc(elem));
    results.forEach(outputFunc);
  };

  // unchanged from the last iteration
  const formatOutput = ar => ar.reduce((prev, curr, ndx) => ndx === 1 ? prev + ' ' + curr : prev + curr, '');

  // this is the only impure functions which remains, but it is to be expected
  const print = output => console.info(output);

  // this is probably the step too far - this code is much harder to read than the previous version
  controllerMaker(compose(compose(
    x => [x],
    testMaker(x => x % 3 === 0, 'Fizz')),
    testMaker(x => x % 5 === 0, 'Buzz')),
    formatOutput, print)
  (1, 106);
}());