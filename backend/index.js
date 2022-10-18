const express = require("express")
const app = express()
const PORT = 8000
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

var mongoose = require('mongoose');
var mongoDB= "mongodb://localhost:27017/CellularDevices";
mongoose.connect(mongoDB, {useNewUrlParser: true});

const path = require('path');
app.use(express.static(path.join(__dirname, "dist/CellularDevices")));

app.use("/api", require('./routes/cart.route'));
app.use("/api", require('./routes/users.route'));
app.use("/api", require('./routes/products.route'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/CellularDevices/index.html"));
});

const cors = require("cors")
app.use(cors());
app.listen(PORT, () => console.log("Server started on port ", PORT))


