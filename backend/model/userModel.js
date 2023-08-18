const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model('User', new mongoose.Schema({

    username : String,
    email:String,
    password : String

}))

exports.User = User
