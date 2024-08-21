let express = require("express");
let path = require("path");
let fs = require("fs");

let router = express.Router();

let userName = "";

router.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
});

router.post("/login", (req, res) => {
  console.log(req.body.username);
  userName = req.body.username;
  if (fs.existsSync(`${userName}.txt`)) {
    let myContent = fs.readFileSync(`${userName}.txt`, "utf8");
    console.log("my content is:- ", myContent);
    fs.writeFileSync(`${req.body.username}.txt`, myContent);
  } else {
    fs.writeFileSync(`${userName}.txt`, "");
  }
  res.redirect("/");
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  let myContent = fs.readFileSync(`${userName}.txt`, "utf8");
  console.log("my content is:-", myContent);
  let data = myContent.concat("#", req.body.msg);
  console.log("Data to write is:-", data);
  fs.writeFileSync(`${userName}.txt`, data);
  res.sendFile(path.join(__dirname, "..", "views", "chat.html"));
});

router.get("/", (req, res, next) => {
  console.log("username is:-", userName);
  if (!userName) {
    res.redirect("/login");
  } else {
    res.sendFile(path.join(__dirname, "..", "views", "chat.html"));
  }
});

module.exports = router;
