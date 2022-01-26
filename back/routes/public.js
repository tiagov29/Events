const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  console.log("Peticion Get a /");
  res.send("Hi since public!!");
});

router.get("/success", (req, res) => {
  res.send("success");
});

router.get("/failure", (req, res) => {
  res.send("failure");
});

router.get("/pending", (req, res) => {
  res.send("pending");
});

module.exports = router;
