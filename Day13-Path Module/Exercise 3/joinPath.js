const path=require('path');

const joinPath=path.join('users','Maliha','Documents','NodeJs');

console.log(joinPath);// users/Maliha/Documents/NodeJs

console.log(path.normalize('users//Maliha/Documents..//NodeJs'));// users/Maliha/Documents/NodeJs

console.log(path.normalize('foo//bar/../baz'));  //  foo/baz


