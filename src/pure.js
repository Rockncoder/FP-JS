//*****************************************************************************
// a pure function
//*****************************************************************************

const minimum = 21;
// not pure since it relies on value outside of it
function impure(age) {
  return age >= minimum;
}

// pure since it is self contained
function pure(age) {
  const minimum = 21;
  return age >= minimum;
}
