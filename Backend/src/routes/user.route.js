const express = require("express");
const userRouter = express.Router()

const { registerNewUser, authenticateUser } = require("../controlers/user.controler");
const User = require("../models/User");

userRouter.get("/" , async(req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err);
        res.status(500).json("internal server error")
    }
})

userRouter.post("/register" , registerNewUser);

userRouter.post("/login" , authenticateUser);

module.exports = userRouter