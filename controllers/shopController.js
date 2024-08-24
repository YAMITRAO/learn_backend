const adminData = require("../controllers/adminController");
const Product = require("../modules/product");

module.exports.shopController = (req, res, next) => {
  //   const products = adminData.products;
  const products = Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
