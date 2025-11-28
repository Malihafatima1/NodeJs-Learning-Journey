const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyPaerser=require('body-parser');
const studentRoutes=require('./routes/studentRoutes')



mongoose.connect(
    "mongodb://admin:admin123@127.0.0.1:27017/student_mvc?authSource=admin"
  )
.then(()=>console.log("DB connected"))
.catch(err=>console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const methodOverride = require("method-override");
app.use(methodOverride("_method"));


app.set('view engine', 'ejs');
app.use('/',studentRoutes);

app.listen(3000,()=>console.log("Server running on 3000"))

