//*****************************************************************************
// here recursion takes the place of a loop
// note: there is no mutation
// and this is a procedure not a function since nothing is returned
//*****************************************************************************

// loops aren't actually needed in a language so long as recursion is supported
const printNumbers = (from, to) => {
  console.info(from);
  // All recursive function must have a terminating case, or they will go on forever
  if (from !== to) {
    // note how add one to the from parameter in an immutable way
    printNumbers(from + 1, to);
  }
};

printNumbers(1, 100);


// KEY POINT
// all loops can be rewritten using recursion and vice-versa
