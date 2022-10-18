var express = require("express")
const UsersRoute = express.Router();
// Users model
let Users = require("../models/Users");

UsersRoute.get("/getUser", (req, res) => {
    Users.find({},(error, data) => {
      res.json(data);
    });
});

module.exports = UsersRoute;