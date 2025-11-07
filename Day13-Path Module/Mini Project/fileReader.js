
const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,'fileReader.js');

fs.readFile(filePath, 'utf-8',(err, data)=>{
    if(err) return console.log('Error:',err.message);
    console.log('File Content:\n',data);
});