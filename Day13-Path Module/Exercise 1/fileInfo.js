const path=require('path');

const filePath='/Users/Maliha/Documents/resume.pdf';
console.log(path.basename(filePath));//resume.pdf

console.log(path.dirname(filePath));///Users/Maliha/Documents

console.log(path.extname(filePath));//.pdf