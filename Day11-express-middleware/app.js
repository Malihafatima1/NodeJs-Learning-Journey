const express=require('express');
const app=express();
const UserRoutes=require('./routes/UserRoutes');

//A simple middleware which runs for every request

app.use((req,res,next)=>{
    console.log(`[INFO] ${req.method} request made to ${req.url}`);
    next()//move to the next middleware or route
});

//Middleware to parse JSON data from request
app.use(express.json());

//Home route
app.get('/',(req,res)=>{
    res.send('Welcome to the express middleware demo!');
})

//Use the user routes 
app.use('/user', UserRoutes);

//Error handling middleware if routes not found
app.use((req,res)=>{
    res.status(404).send('Sorry! Page not found')
});

//start server
app.listen(3000,()=>{
    console.log('🚀 Server running on http://localhost:3000');
});