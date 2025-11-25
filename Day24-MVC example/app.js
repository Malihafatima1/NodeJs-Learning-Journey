
const express=require('express')
const mongoose = require('mongoose');
const app=express();

app.set('view engine', 'ejs'); 

app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// MongoDB Connection
mongoose.connect('mongodb://admin:admin123@127.0.0.1:27017/mvc_demo?authSource=admin')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

const userRoutes=require("./routes/userRoutes");
app.use('/users',userRoutes);

app.listen(3000,()=>console.log("Server running on port 3000"))