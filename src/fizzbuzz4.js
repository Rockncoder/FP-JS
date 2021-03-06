//*****************************************************************************
// the test function is really 4 steps
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz4');

  // unchanged from the last iteration
  const controller = (from, to) => {
    const ar = Array.from({length: to - from + 1}, (elem, index) => index + 1);
    const results = ar.map(elem => formatOutput(test(elem)));
    results.forEach(print);
  };
  // 1: convert the number into an array
  const initialize = x => [x];

  // 2: appends Fizz if the number is a multiple of 3
  const fizz = tuple => tuple[0] % 3 === 0 ? [...tuple, 'Fizz'] : tuple;
  // 3: appends Buzz if the number is a multiple of 5
  const buzz = tuple => tuple[0] % 5 === 0 ? [...tuple, 'Buzz'] : tuple;


  // 4: use composition to combine it all together
  const test = num => buzz(fizz(initialize(num)));

  // unchanged from the last iteration
  const formatOutput = (ar) => ar.reduce((prev, curr, ndx) => ndx === 1 ? prev + ' ' + curr : prev + curr, '');

  // unchanged from the last iteration
  const print = output => console.info(output);

  controller(1, 100);
}());

// steps 2 and 3 have a bad code smell, the functions are very similar
// If only there was a way to combine them...

// go to the function-factory
