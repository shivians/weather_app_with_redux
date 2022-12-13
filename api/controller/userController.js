const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const userController = {
  signup: async (req, res) => {
    try {
      console.log(req.body);
      const { name, email, password } = req.body;
      //check input field

      if (!(name && email && password)) {
        res.status(401).json({ msg: "all input field is required" });
      }
      // check if user all ready  exist in database

      const oldUser = await User.findOne({ email: email });

      if (oldUser) return res.status(401).json({ msg: "user all ready exist" });
      //hash password

      const hashPassword = await bcrypt.hash(password, 10);
      // save user

      const newUser = await new User({ name, email, password: hashPassword });
      await newUser.save();
      //create auth token

      const token = await jwt.sign({user:newUser._id,email},process.env.SECRET_KEY,{expiresIn:"10h"});

      res.status(200).json({ msg: "user register succesfully", data: newUser,token:token });
    } catch (error) {
      res.status(404).json({ msg: "something is error", error: error });
    }
  },

  login: async (req, res) => {
    try {
      console.log(req.body);
      const { email, password } = req.body;

      const user = await User.findOne({ email: email });
      if (!user) return res.status(401).json({ msg: "user not exist" });
       const token = await jwt.sign({user:user._id,email},process.env.SECRET_KEY,{expiresIn:"10h"})
      if ( await bcrypt.compare(password,user.password)) {
        res
          .status(200)
          .json({ msg: "user login successfully", token:token });
      }else{
        res.json({msg:"wrong password"})
      }
    } catch (error) {
      res.status(404).json({ msg: "wrong password", error: error });
    }
  },

  users: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ msg: "all users", data: users });
    } catch (error) {
      res.status(404).json({ msg: "user not find", error: error });
    }
  },
};

module.exports = userController;
