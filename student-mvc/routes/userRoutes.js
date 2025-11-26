const express=require('express');
const router=express.Router()
const sudentController=require('../controllers/sudentController')

//get all students
router.get('/students',sudentController.getStudents);



module.exports=router;