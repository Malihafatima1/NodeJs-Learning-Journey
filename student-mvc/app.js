const express=require('express');
const mongoose=require('mongoose')
const app=express()
const userRoutes=require('./routes/userRoutes');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}))



//Mongoose connection

mongoose.connect('mongodb://admin:admin123@127.0.0.1:27017/student_mvc?authSource=admin')
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log("MongoDB Error",err));


app.use('/',userRoutes);

app.listen(3000,()=>console.log('Server  running on port 3000'))