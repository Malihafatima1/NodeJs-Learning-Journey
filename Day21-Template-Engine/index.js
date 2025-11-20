import express from "express";
const app=express();


app.set('view engine','ejs')
app.get("/",(req,res)=>{
    res.render('home',{name:'Maliha Fatima',Channnel:'LetsCode Youtube Channel', age:23})
})

app.listen(5000,()=>"Server is running on 5000")