//Creating a promise method. The promise will resolved when timer times out after 6 seconds


let myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved")
    },6000)
})

//COnsole log berfore calling the promise
console.log("Before calling promise");

//calling the promise and wait for it to be resolved  and then print a message
myPromise.then((successMessage)=>{
    console.log("From Callback " + successMessage);
})

//console log after calling the promise
console.log("After calling promise");