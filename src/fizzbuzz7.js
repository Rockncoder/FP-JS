//*****************************************************************************
// composition
// removed all of our hard coded bits, everything is passed in to the controller
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz7');

  const testMaker = (condition, whenTrue) => tuple => condition(tuple[0]) ? [...tuple, whenTrue] : tuple;

  const compose = (fn1, fn2) => arg => fn2(fn1(arg));

  // let's use compose to combine the test and format functions
  const controller = (from, to, testFunc, formatFunc, outputFunc) => {
    const ar = Array.from({length: to - from + 1}, (elem, index) => index + 1);
    const mapFunc = compose(testFunc, formatFunc);
    const results = ar.map(elem => mapFunc(elem));
    results.forEach(outputFunc);
  };

  const initialize = x => [x];
  const fizz = testMaker(x => x % 3 === 0, 'Fizz');
  const buzz = testMaker(x => x % 5 === 0, 'Buzz');
  const bang = testMaker(x => x % 7 === 0, 'Bang');
  const test = num => bang(buzz(fizz(initialize(num))));

  const formatOutput = (ar) => ar.reduce((prev, curr, ndx) => ndx === 1 ? prev + ' ' + curr : prev + curr, '');

  const print = output => console.info(output);

  controller(1, 106, test, formatOutput, print);
}());