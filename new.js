let arr = [1,2,3,4];

/**
 *
 * @param {Array} a
 * Important IIFE ( Immediately Invoked Function Expressions)
 */

const fname = (function (a){
  for(let i = 0; i < a.length ; i++){
    a[i] *= a[i];
  }
})(arr);

console.log(arr);