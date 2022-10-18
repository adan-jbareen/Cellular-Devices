var express = require("express")
const CartRoute = express.Router();

let Cart = require("../models/Cart");

CartRoute.post("/create", (req, res) => {
    Cart.create(req.body, (error, data) => {
            res.json(data);
            console.log(req.body)
        });
    });
    
CartRoute.get("/getCart", (req, res) => {
    Cart.find((error, data) => {
      res.json(data);
    });
});

CartRoute.delete("/deleteCart/:id", (req, res) => {
    Cart.findOneAndRemove({ _id: req.params.id }, (error, data) => {
        console.log("Cart removed")
    });
});

module.exports = CartRoute;