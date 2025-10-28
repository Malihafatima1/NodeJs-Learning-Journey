async function greet() {
    return "Hello!"
}

greet().then(msg=> console.log(msg));

async function showGreeting() {
    let message=await greet();
    console.log(message);
}
showGreeting()