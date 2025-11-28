/**
 * @param {function} f
 * @param {Array} a
 * @returns {Array}
 */
let numbers = [1, 2, 3, 4];
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
 */
// let ans = badmosh(function (a){
//   return a*a;
// },numbers);

console.log(numbers);
