const express = require('express');
const router = express.Router();

const registerMiddlewares = require("./middlewares/registerMiddlewares")

const path = require("path");

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../frontend/index.html'));
})

router.post('/register', registerMiddlewares.validatePassword,(req,res)=>{
    const {name,email, password, confirmPass} = req.body;
    console.log(name + email + password + confirmPass);
})
module.exports = router;