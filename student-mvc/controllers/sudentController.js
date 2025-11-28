const Student=require('../models/Student');

exports.getStudents= async(req,res)=>{
   
    try{
        const students=await Student.find();
        res.render('students',{ students})
    }catch(err){
        res.status(500).json({message:err.message})
    }
};

