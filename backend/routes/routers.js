const express = require('express');
const router = express();
const login = require('../controller/loginController');
const signup = require('../controller/signupController');
const singleFileUpload = require('../controller/fileUploadController');
const {upload} = require('../middleware/upload');

router.post('/login' , login )

router.post('/signup', signup )

router.post('/upload',  upload.single('file'), singleFileUpload )

module.exports = router