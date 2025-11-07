const fs=require('fs');
const path = require('path');


const filePath=path.join(__dirname,'joinPath.js')
 const readFile=fs.readFileSync(filePath,'utf-8');
 console.log(readFile)
