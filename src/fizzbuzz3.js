//*****************************************************************************
// array methods
//*****************************************************************************

(function () {
  'use strict';
  console.info('fizzBuzz3');

  // getting rid of the loop and replacing it with a map, passing in the range
  const controller = (from, to) => {
    // we generate the array using ES2015
    const ar = Array.from({length: to - from + 1}, (elem, index) => index + 1);
    // we map over the array to generate the results array
    const results = ar.map(elem => formatOutput(test(elem)));
    // and finally we render the results
    results.forEach(print);
  };
  // unchanged from the last iteration
  const test = num => {
    let results = [num];
    if (num % 3 === 0) {
      results = results.concat('Fizz');
    }
    if (num % 5 === 0) {
      results = results.concat('Buzz');
    }
    return results;
  };
  // this is a reduction - taking an array and making it a single string
  const formatOutput = ar => ar.reduce((prev, curr, ndx) => ndx === 1 ? prev + ' ' + curr : prev + curr, '');

  // unchanged from the last iteration
  const print = output => console.info(output);

  controller(1, 100);
}());

// the test method is kind of a mess. All of the logic is hard coded into it