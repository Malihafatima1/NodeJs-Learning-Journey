const express=require('express')
const router=express.Router();
const usesrController=require('../controllers/userController');

//Show register page

router.get('/register',usesrController.showRegisterPage);

//Handle register form submission
router.post('/register',usesrController.registerUser);

module.exports=router;