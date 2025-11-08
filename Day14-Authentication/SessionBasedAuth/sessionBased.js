const bodyParser = require('body-parser');
const express=require('express');
const session=require('express-session');
const path=require('path');

const app=express();

//Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Middleware to set up sesstion management
app.use(session({
    secret:'vxfugjbjjfrr',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}));

//serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

//Serve loginn page at rool URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//post endpoint for handling login
app.post('/login', (req,res)=>{
    const { username, password }=req.body;

    if(username === 'user' && password === 'password'){
        req.session.user=username;
        res.send('Logged in successfully');
    }else{
        res.send('Invalid credentials');
    }
});

//gett endpoint for accessing dashboard
app.get('/dashboard', (req,res)=>{
    if(req.session.user){
        res.sendFile(path.join(__dirname,'public', 'dashboard.html'));
    }else{ 
        res.send('<h2>⚠️ Please log in first</h2><a href="/">Back to Login</a>');
    }
});

//logout endpoint
app.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            return res.send('Error logging out');
        }
        res.redirect('/');
    });
});

//Start the server on port 3000
app.listen(3000,()=>console.log('Server running on port 3000'));