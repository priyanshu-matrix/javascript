
/**
 *
 * @param {arguments} abc -can be mulltiple
 * @returns
 */
function fnam(abc){
  let arr = [];
  let id = 0;
  for(let i = 0 ; i < arguments.length ; i++){
    arr.push(arguments[i]+id);
    id++;
  }
  return arr;
}


const names = fnam("somya","priyanshu","ayush","shinjini");
console.log(names);