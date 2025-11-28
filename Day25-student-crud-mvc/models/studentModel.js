const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{type: String, require:true},
    course:{type: String, require:true},
    age:{type: Number}

});

module.exports=mongoose.model('Student',studentSchema);