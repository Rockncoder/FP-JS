//*****************************************************************************
// Move to a higher level
// need to add a "Bang" to our code?
// no problem, our factory can generate the function and then we add it to our test
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz6');

  const testMaker = (condition, whenTrue) => tuple => condition(tuple[0]) ? [...tuple, whenTrue] : tuple;

  const controller = (from, to) => {
    const ar = Array.from({length: to - from + 1}, (elem, index) => index + 1);
    const results = ar.map(elem => formatOutput(test(elem)));
    results.forEach(print);
  };

  const initialize = x => [x];
  const fizz = testMaker(x => x % 3 === 0, 'Fizz');
  const buzz = testMaker(x => x % 5 === 0, 'Buzz');
  // adding a bang function is easy, create it
  const bang = testMaker(x => x % 7 === 0, 'Bang');
  const test = num => bang(buzz(fizz(initialize(num))));

  const formatOutput = (ar) => ar.reduce((prev, curr, ndx) => ndx === 1 ? prev + ' ' + curr : prev + curr, '');

  const print = output => console.info(output);

  controller(1, 106);
}());

// talk about composition
// go to compose.js