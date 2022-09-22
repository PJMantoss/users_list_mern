const express = require("express");
const app = express();

const mongoose = require("mongoose");
const UserModel = require("./models/Users");

mongoose.connect("mongodb+srv://mantoss:userlproject@cluster0.v1krpfd.mongodb.net/userslist?retryWrites=true&w=majority");

// API requests
app.get("/getUsers", (req, res) => {
    UserModel.find({});
})

app.listen(3001, () => {
    console.log('SERVER IS RUNNING!')
});

// mongodb+srv://mantoss:userlproject@cluster0.v1krpfd.mongodb.net/test