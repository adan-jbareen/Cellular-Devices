const mongoose = require("mongoose");
let Users = new mongoose.Schema(
{
    name: {
        type: String,
    },
    password: {
        type: String,
        unique: true,
    },
},
{
collection: "Users",
}
);
module.exports = mongoose.model("Users", Users);