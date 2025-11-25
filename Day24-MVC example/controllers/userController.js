const User = require('../models/userModel');


//show regisetr page
exports.showRegisterPage=(req,res)=>{
    res.render('register');

}


//Handldee register form

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password });
        res.status(201).json({
            message: "User Registered Successfully!",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }
};

