const mongoose = require("mongoose");
let Products = new mongoose.Schema(
{
    SerialNumber: {
        type: String,
    },
    Name: {
        type: String,
    },
    Price: {
        type: Number,
    },
    ImgUrl: {
        type: String,
    },
    Description: {
        type: String,
    },
    Category: {
        type: String,
    },
},
{
collection: "Products",
}
);
module.exports = mongoose.model("Products", Products);