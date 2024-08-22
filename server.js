const express = require("express");
const homeRoute = require("./routes/home");
const bodyParser = require("body-parser");
const path = require("path");
const rootPath = require("./helper/rootPath");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homeRoute);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  res.sendFile(path.join(rootPath, "views", "pageNot.html"));
});

app.listen(3000);
