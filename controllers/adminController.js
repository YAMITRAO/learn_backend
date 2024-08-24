const path = require("path");

const Product = require("../modules/product");

module.exports.adminGetController = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

module.exports.adminPostController = (req, res, next) => {
  //   products.push({ title: req.body.title });
  let product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

// exports.products = products;
