//*****************************************************************************
// JS doesn't have compose built-in but it is easy to implement
//*****************************************************************************

const oldStyleCompose = function (f, g) {
  return function (x) {
    return g(f(x));
  }
};

// let's ES6 it!

const compose = (f, g) => x => g(f(x));


const mathFunc = compose(a => a * 2, b => b + 1);
const mathFunc2 = oldStyleCompose(a => a * a, b => b * b);

const results = mathFunc(10);
const results2 = mathFunc2(10);
console.log(' mathFunc(10) = ', results);
console.log('mathFunc2(10) = ', results2);
// mathFunc(10) =  21
// mathFunc2(10) =  10000

// todo: add example of using compose