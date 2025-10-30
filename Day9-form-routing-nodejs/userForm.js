function userForm(req,res){
res.write(`<form action="/submit" method="post">
    <h1>Registration Form Using NodeJs</h1>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" autofocus><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" ><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" ><br>

    <button type="submit">Submit</button>
</form>

`)
res.end();
}

module.exports=userForm;