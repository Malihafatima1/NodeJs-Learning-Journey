const express = require("express");
let students=require('./students');

const app=express();
app.use(express.json());

const port=3000;

//Get all students

app.get('/students',(req,res)=>{
    res.json(students);
});

//get students by  id
app.get('/students/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    let student=students.find(s=>s.id===id);
    
    if(!student) return res.status(404).send("Student not found");
    
    res.json(student);
});


//add new student
app.post('/students',(req,res)=>{
    let newStudent={
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };
    students.push(newStudent);
    res.send("Student added successfully!")
});

//update studemt
app.put("/students/:id",(req,res)=>{
    let id=parseInt(req.params.id);
    let student=students.find(s=>s.id===id);

    if(!student) return res.status(404).send("Student not found");
    student.name=req.body.name || student.name;
    student.course=req.body.course || student.course;

    res.send("Student updated successfully!");
})

//Delete student
app.delete("/students/:id",(req,res)=>{
    let id=parseInt(req.params.id);

    students=students.filter(s=>s.id!==id);
    
    res.send("Student deleted!")
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})