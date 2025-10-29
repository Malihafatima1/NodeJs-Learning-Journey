const axios=require('axios');
async function getData() {
 try{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
 }catch(error){
    console.log("Error:".error.msg)
 }
}

getData();