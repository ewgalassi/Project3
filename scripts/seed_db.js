const mongoose = require("mongoose");
const db = require("../models");
const inquirer = require("inquirer");

// WARNING: This will clear all data from the database!
// Use this during development if changes are made to the models.
mongoose.Promise = global.Promise;
const uri = 'mongodb://localhost:27017/project3';
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.on('error', function (err) {
  console.log("-----Mongoose error: -----\n" + err);
});
mongoose.connection.once('open', function () {
  seedDB();
});

function seedDB() {
  db.User.create({
    username: "test1",
    password: "1234",
    firstName: "Test1",
    lastName: "Account1"
  }, {
    username: "test2",
    password: "1234",
    firstName: "Test2",
    lastName: "Account2"
  }).then(() => {
    console.log("\n------------\n");
    console.log("Created two users:");
    console.log("USERNAME: test1, PASSWORD: 1234");
    console.log("USERNAME: test2, PASSWORD: 1234\n");
    proces.exit(0);
  }).catch(err => {
    console.log(err);
    process.exit(1);
  });
};
