const fs=require('fs');

//CREAT (write data)
//fs.writeFileSync('data.json',JSON.stringify([{name:"Maliha",age:22}], null, 2));
//console.log('File created and data added');

//READ file
//const data=fs.readFileSync('data.json', 'utf-8');
//console.log('File Data:', JSON.parse(data));

//UPDATE file
//const dataBuffer=fs.readFileSync('data.json', 'utf-8');
//const dataObject=JSON.parse(dataBuffer);

//Add a new Record
//dataObject.push({name:"Fatima",age:21});

//Write updated dta back
//fs.writeFileSync('data.json',JSON.stringify(dataObject, null, 2));

//console.log('Data updated successfully');

//DELETE file
const dataContent=fs.readFileSync('data.json', 'utf-8');
let users=JSON.parse(dataContent);

//Delete record where name is 'MAliha'
users=users.filter(user=>user.name !=="Maliha");

//Save updated file
fs.writeFileSync('data.json', JSON.stringify(users, null, 2));
console.log('Record deleted');






