const path=require('path');

//const filePath='/Users/Maliha/Documents/resume.pdf';

console.log(path.isAbsolute('pathCheck.js'));//true

console.log(path.resolve('pathCheck.js'));

const absPath='/Users/Maliha/Documents/resume.pdf';

const relPath='./resume.pdf';

console.log("Absolute Path:", absPath);
console.log("Relative Path:",relPath);
console.log("Resolved Absolute Path:",path.resolve(relPath))
