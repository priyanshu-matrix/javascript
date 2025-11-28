let numbers = [1, 2, 3, 4];

/**
 * @param {function} f
 * @param {Array} a
 * @returns {Array}
 */
const Square = (function (f, a) {
  for (let i = 0; i < a.length; i++) {
    a[i] = f(a[i]);
  }
})(function (a) {
  return a * a;
}, numbers);



/**
 * @param {Number} a
 * @returns {Number}
 * can't be used again as IIFE is used only once
 */
Square(function (a){
  return a*a;
},numbers);



//Arrow function speciafically used to avoid this keyword
const Sq = numbers.map((x) => {
  return x*x;
})

console.log(Sq);
