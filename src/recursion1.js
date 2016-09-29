//*****************************************************************************
// here recursion takes the place of a loop
// note: there is no mutation
// and this is a procedure not a function since nothing is returned
//*****************************************************************************

function printNumbers(from, to) {
  console.info(from);
  if (from !== to) {
    printNumbers(from + 1, to);
  }
}

printNumbers(1, 100);
