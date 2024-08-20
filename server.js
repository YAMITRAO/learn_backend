const bodyParser = require("body-parser");
const express = require("express");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use("/shop", shopRoute);

app.use((req, res, next) => {
  res.status(404).send("<h2>Page not found</h2>");
});

app.listen(3000);
