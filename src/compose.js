//*****************************************************************************
// JS doesn't have compose built-in but it is easy to implement
//*****************************************************************************

const compose = function(f, g){
  return function(x){
    return g(f(x));
  }
};


// todo: add example of using compose