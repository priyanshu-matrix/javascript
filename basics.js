/**
 *  var globally
 */


// Basic example of Declarations
var somya = "priyanshu";
var mp = {
  fruits : ["banana",'apple','coconut'],
  food : ["pasta","pizza"]
}

// function scope is different from block scope
function f(a) {
  let somya = 10;
  console.log(somya*a);
}
if(true){
  var v = 5;
}
let {fruits} = mp;
let {food} = mp;
for(x of food){
  console.log(x);
}
console.log(v);
// console.log(somya);
// f(1);

