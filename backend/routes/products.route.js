var express = require("express")
const ProductsRoute = express.Router();
const Products = require("../models/Products");

ProductsRoute.get("/getProducts", (req, res) => {
    Products.find({},(error, data) => {
      res.json(data);
    });
});

module.exports = ProductsRoute;