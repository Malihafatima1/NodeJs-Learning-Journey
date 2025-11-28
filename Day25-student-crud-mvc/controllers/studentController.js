const { json } = require('body-parser');
const Student=require('../models/studentModel');


exports.getAllStudents=async (req,res)=>{

    const students=await Student.find();
    res.render('students/index',{ students });
};

exports.getStudentById=async(req,res)=>{
    const id=req.params.id;
    const student=await Student.findById(id);
    
    if(student){
        res.render('students/show',{ student })
    }
    else{
        res.status(404).json({message:"Not found"})
    }

}

exports.createStudentForm=(req,res)=>{
res.render('students/new');
};

exports.createStudent=async(req,res)=>{
    const {name, course,age } =req.body;
    await Student.create({name, course, age});
    res.redirect('/students');
};


exports.editStudentForm=async(req,res)=>{
  const id=req.params.id;

  const student=await Student.findById(id)
  if (student){
    res.render('students/edit', {student});
  }else{
    res.status(404).json({message:"Student not found.."})
  }

}

exports.updateStudent=async(req,res)=>{
    const { name, course, age } = req.body;
    const student=await Student.findByIdAndUpdate(req.params.id,{name,course,age},{new:true});

    if(student){
        res.redirect(`/students/${student._id}`);
    }else{
        res.status(404).json({message:"Student not found"});
    }

}

exports.deleteStudent=async(req,res)=>{
    const { name, course, age } = req.body;
    const student=await Student.findByIdAndDelete(req.params.id)

    if(student){
        res.redirect('/students');
    }else{
        res.status(404).json({message:"Student not found"});
    }
}