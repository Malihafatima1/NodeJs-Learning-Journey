import mongoose from 'mongoose'

const studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    course:String

})

export default studentSchema