import express from 'express'
import session from 'express-session'

const app=express()

//middleware
app.use(express.urlencoded({extended:true}))

app.use(session({

    secret:'secret123',
    resave:false,
    saveUninitialized:false,
}))

app.set('view engine','ejs')

//Home
app.get('/',(req,res)=>{
    res.redirect('/login')
})

//login'
app.get('/login',(req,res)=>{
    res.render('login')
})

//login logic

app.post('/login',(req,res)=>{
    const { username, password }=req.body

    //dummy validation
    if (username==='admin124' && password=='1234'){
        req.session.isAuth=true
    req.session.username=username
    res.redirect('/profile')
    }
    else{
        res.send("Invalid credentials")
    }
})

//profile page protected

app.get('/profile',(req,res)=>{
    
    if(req.session.isAuth){
        res.render('profile',{ user:req.session.username })
    }
    else{
        res.redirect('/login')
    }
})

//logout
app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
})

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})