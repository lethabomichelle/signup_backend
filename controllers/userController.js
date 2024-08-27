const expressAsyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const generateToken = require("../utils/generateToken");

const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // const userExists = await User.findOne(email);
    // if (userExists) {
    //     res.status(400);
    //     throw new Error('User already exists');
    // }

    const user = await User.create({ name, email, password });
    if (user) {
        generateToken(res, user.email);
        res.status(201).json({
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const getUserProfile = expressAsyncHandler((req, res) => {
    res.json({
        name: req.user.name,
        email: req.user.email,
        message: "Welcome"
    });
});

module.exports = {
    registerUser,
    getUserProfile
}