const express = require("express");
const path = require("path");
const rootPath = require("../helper/rootPath");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Page get request is reached...");
  res.sendFile(path.join(rootPath, "views", "home.html"));
  // res.sendFile(path.join(rootPath, "views", "pageNot.html"));
});

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootPath, "views", "addProduct.html"));
});

router.get("/contact-us", (req, res) => {
  res.sendFile(path.join(rootPath, "views", "contact-us.html"));
});

router.post("/success", (req, res) => {
  res.sendFile(path.join(rootPath, "views", "success.html"));
});

module.exports = router;
