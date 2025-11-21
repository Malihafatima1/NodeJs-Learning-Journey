import express from "express";
const app=express();

app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')

app.get('/add-user',(req,res)=>{
res.render('addUser');
});

app.post('/submit-user',(req,res)=>{
    console.log(req.body);
res.render('SubmitUser',req.body);
})

app.get('/users',(req,res)=>{
    const users=['Maliha','Afifa','Maha','Hira']
    res.render('Users',{users:users})
})
app.listen(5000,()=>{
   console.log("Server is running on 5000") }
)