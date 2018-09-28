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
  prompt();
});


function prompt() {
  inquirer.prompt([
    {
      message: "WARNING- this will drop your entire database. Proceed?",
      type: "confirm",
      name: "confirm"
    }
  ]).then(function (answer) {
    if (answer.confirm) {
      db.User
        .remove({})
        .then(() => {
          console.log("-------------------");
          console.log("Cleared User collection!!!");
          db.Post
            .remove({})
            .then(() => {
              console.log("-------------------");
              console.log("Cleared Post collection!!!");
              process.exit(0);
            })
            .catch(err => {
              console.error(err);
              process.exit(1);
            });
        })
        .catch(err => {
          console.error(err);
          process.exit(1);
        });

    } else {
      console.log("Exiting. Did not drop database.");
      process.exit(0);
    };
  });
};
