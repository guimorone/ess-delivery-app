const express = require("express");
const bodyParser = require("body-parser");
const { getCart, postCart } = require("./resources/cart");
const { getTest, postTest } = require("./resources/test");
const { getUser } = require("./resources/user");
const { getRestaurants, putRestaurants } = require("./resources/restaurant");
const { getOrders, postOrders } = require("./resources/orders");

const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/cart", getCart);
app.post("/cart", postCart);

app.get("/test", getTest);
app.post("/test", postTest);

app.get("/user", getUser);

app.get("/restaurants", getRestaurants);
app.put("/restaurants", putRestaurants);

app.get("/orders", getOrders);
app.post("/orders", postOrders);

app.listen(1337, (_) => {
  console.log("Server running on port 1337");
});
