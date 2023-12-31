const express = require("express");
const app = express();
const cors = require("cors");
const phones = require("./phone.json");
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Look! Iphone server running");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);

  const phone = phones.find((ph) => ph.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`iphone server running on port: ${port}`);
});
