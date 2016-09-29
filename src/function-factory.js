//*****************************************************************************
// fizz buzz - partial applications - aka function factory
// functions in JavaScript are super-powered
//*****************************************************************************

(function(){
  'use strict';

  // a simple function factory
  function addN(n){

    // a function is returned!!!
    return function(x){
      return n + x;
    }
  }

  // let's create two functions, add10 and add50
  const add10 = addN(10);
  const add50 = addN(50);

  // they don't interfere with each other or share variable or state
  console.info(add10(1));
  console.info(add50(1));
  console.info(add10(5));
}());
