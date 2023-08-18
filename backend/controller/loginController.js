const bcrypt = require('bcrypt')
const { User } = require('../model/userModel')


const login = async(req,res)=>{

    let user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) return res.status(400).send("Invalid email.  ")

    const pass = await bcrypt.compare(req.body.password, user.password)
    if(!pass) return res.status(400).send("password Incorrect.  ")

    res.send("Loged In successfully")

}

module.exports = login