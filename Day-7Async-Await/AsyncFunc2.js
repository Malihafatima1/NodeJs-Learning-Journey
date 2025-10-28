
async function myAsyncFunction() {
 let success=true;
 if(success){
    return "The operation was successful";
 }   else{
    throw new Error("The operation failed!");
 }
}
async function executeAsyncfunction() {
 try{
    const result=await myAsyncFunction();
    console.log(result);
 }   catch(err){
    console.error(err.message);
 }
}
executeAsyncfunction();