//*****************************************************************************
// JS doesn't have compose built-in but it is easy to implement
//*****************************************************************************

let compose = function(f, g){
  return function(x){
    return g(f(x));
  }
};


