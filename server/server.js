const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mantoss:userlproject@cluster0.v1krpfd.mongodb.net/test");

app.listen(3001, () => {
    console.log('SERVER IS RUNNING!')
});