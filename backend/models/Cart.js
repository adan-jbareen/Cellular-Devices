const mongoose = require("mongoose");
let Cart = new mongoose.Schema(
{
    Name: {
        type: String,
    },
    Price: {
        type: Number,
    },
    nameUser: {
        type: String,
    },
},
{
collection: "Cart",
}
);
module.exports = mongoose.model("Cart", Cart);