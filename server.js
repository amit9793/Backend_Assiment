const express = require("express");


const connect = require("./src/configs/db");

const citycontroler = require("./src/controllers/city.controler");

const app = express();
app.use(express.json());

app.use("/city",citycontroler);


app.listen(2244, async function () {
  await connect();
  console.log("port is running");
});