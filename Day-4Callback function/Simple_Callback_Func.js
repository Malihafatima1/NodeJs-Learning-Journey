function greet(name,callback){
    console.log("Hii",name);
    callback();
}

function sayBye(){
    console.log("Goodbye!");
}

greet("Maliha",sayBye);