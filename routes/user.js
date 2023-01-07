const {verifyTokenAdmin } = require('./verifyToken');
const User = require('../models/User');
const router = require('express').Router();


router.get("/",async (req,res)=>{
    try{
        const user = await User.find();
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
} )
module.exports = router;