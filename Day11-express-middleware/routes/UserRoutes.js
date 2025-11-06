const express=require('express');
const router=express.Router();

//Middleware specific to this router

router.use((req, res, next)=>{
    console.log("User route accessed!");
    next();
});

//Get route
router.get('/profile', (req, res)=>{
    res.send('Welcome to your user profile page.');
})

//post route
router.post('/login', (req,res)=>{
    const { username }=req.body;
    res.send(`Hello, ${username}! You are now logged in.`)
});

module.exports=router;
