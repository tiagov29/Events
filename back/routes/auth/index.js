const express = require("express");
const router = express.Router();
const google = require("./google");
const facebook = require("./facebook");
const linkedin = require("./linkedin");
const github = require("./github");

router.post("/sign-up", function (req, res) {
  console.log("New request POST to /sign-up");

  console.log(req.body);

  const token = "hfdasjfefee23423fewfrw24234";

  let data = {
    success: true,
    message: `User ${req.body.email} registered correctly`,
    token: token,
    data: req.body,
  };

  res.json(data);
});

router.get("/failed", (req, res) => res.send(" app failed"));

router.use("", google);
router.use("", facebook);
router.use("", linkedin);
router.use("", github);

module.exports = router;
