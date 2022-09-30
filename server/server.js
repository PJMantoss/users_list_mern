const express = require("express");
const app = express();

const mongoose = require("mongoose");
const UserModel = require("./models/Users");

mongoose.connect("mongodb+srv://mantoss:userlproject@cluster0.v1krpfd.mongodb.net/userslist?retryWrites=true&w=majority");

// API requests
app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
})

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
})

app.listen(3001, () => {
    console.log('SERVER IS RUNNING!')
});

// mongodb+srv://mantoss:userlproject@cluster0.v1krpfd.mongodb.net/test