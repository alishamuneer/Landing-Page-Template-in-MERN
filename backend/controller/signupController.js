const bcrypt = require('bcrypt')
const { User } = require('../model/userModel');

const signup = async (req, res) => {

    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send("User already exist")
    }
    else {
        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        res.send(user)
        console.log(user)
    }
}

module.exports = signup



