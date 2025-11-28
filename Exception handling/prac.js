const bankai = function f(a){
  return a < 2 ? 1 : a * f(a-1);
}

try{
  let a = 5;
  console.log(bankai(a));
  let b = 0;
  if(b === 0){
    throw new Error("Bankai");
  }
  console.log(a/b);

  let s = "priyanshu";
  if(s==="priyanshu"){
    throw new Error("bankai");
  }
}
catch(e){
  console.error(e.message);
}

/**
 *  for(let x in arr){
 *
 * }
 *  n! = n * (n-1)!
 * if( n < 2){
 *    return 1;
 * }
 * return n*fac(n-1);
 */
